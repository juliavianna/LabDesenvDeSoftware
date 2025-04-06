import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Pedidos.css';
import Sidebar from '../components/Sidebar';

const Pedidos = () => {
    const [pedido, setPedido] = useState({
        status: 'PENDENTE',
        cliente: { id: '' },
        agente: { id: '' },
        automovel: { id: '' },
        contrato: { id: '' }
    });
    const [clientes, setClientes] = useState([]);
    const [agentes, setAgentes] = useState([]);
    const [automoveis, setAutomoveis] = useState([]);
    const [contratos, setContratos] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [clientesRes, agentesRes, automoveisRes, contratosRes] = await Promise.all([
                    axios.get('/api/clientes'),
                    axios.get('/api/agentes'),
                    axios.get('/api/automoveis'),
                    axios.get('/api/contratos')
                ]);
                setClientes(clientesRes.data);
                setAgentes(agentesRes.data);
                setAutomoveis(automoveisRes.data);
                setContratos(contratosRes.data);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
                setMessage('Erro ao carregar dados. Por favor, tente novamente.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!pedido.cliente.id) newErrors.cliente = 'Selecione um cliente';
        if (!pedido.agente.id) newErrors.agente = 'Selecione um agente';
        if (!pedido.automovel.id) newErrors.automovel = 'Selecione um automóvel';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post('/api/pedidos', pedido);
            setMessage('Pedido criado com sucesso!');
            setPedido({
                status: 'PENDENTE',
                cliente: { id: '' },
                agente: { id: '' },
                automovel: { id: '' },
                contrato: { id: '' }
            });
            setErrors({});
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
            setMessage('Erro ao criar pedido. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setPedido(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setPedido(prev => ({
                ...prev,
                [name]: value
            }));
        }
        // Clear error when field is changed
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    return (
        <div className="page-container">
            <Sidebar />
            <div className={`pedidos-container ${loading ? 'loading' : ''}`}>
                
                <div className="pedidos-header">
                    <h2>Criar Novo Pedido de Aluguel </h2>
                </div>
                
                {message && (
                    <div className={`alert ${message.includes('sucesso') ? 'alert-success' : 'alert-danger'}`}>
                        {message}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="pedidos-form">
                    

                    <div className="form-group">
                        <label className="form-label">Cliente</label>
                        <input
                            type="cliente"
                            id="cliente"
                            value={pedido.cliente.id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Agente</label>
                        <input
                            type="agente"
                            id="agente"
                            value={pedido.agente.id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Automóvel</label>
                        <select 
                            className={`form-select ${errors.automovel ? 'error-input' : ''}`}
                            name="automovel.id" 
                            value={pedido.automovel.id} 
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione um automóvel</option>
                            {automoveis.map(automovel => (
                                <option key={automovel.id} value={automovel.id}>
                                    {automovel.marca} {automovel.modelo} - {automovel.placa}
                                </option>
                            ))}
                        </select>
                        {errors.automovel && <div className="error-message">{errors.automovel}</div>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Contrato</label>
                        <select 
                            className="form-select"
                            name="contrato.id" 
                            value={pedido.contrato.id} 
                            onChange={handleChange}
                        >
                            <option value="">Selecione um contrato (opcional)</option>
                            {contratos.map(contrato => (
                                <option key={contrato.id} value={contrato.id}>
                                    Contrato #{contrato.id}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={loading}
                    >
                        {loading ? 'Processando...' : 'Criar Pedido'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Pedidos;