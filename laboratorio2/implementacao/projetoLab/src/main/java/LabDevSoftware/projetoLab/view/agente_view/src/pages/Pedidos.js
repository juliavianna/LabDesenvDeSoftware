import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Pedidos.css';
import Sidebar from '../components/Sidebar';

const Pedidos = () => {
    const [pedido, setPedido] = useState({
        dataPedido: new Date().toISOString().split('T')[0], // yyyy-MM-dd
        status: 'Pendente',
        cliente: { id: '' },
        agente: { id: '' },
        automovel: { id: '' },
    });
    const [agentes, setAgentes] = useState([]);
    const [automoveis, setAutomoveis] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});


    // Buscando agentes
    useEffect(() => {
        axios.get('http://localhost:8080/agentes')
            .then(response => {
                setAgentes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar agentes:', error);
            });
    }, []);

    // Buscando automóveis
    useEffect(() => {
        axios.get('http://localhost:8080/automoveis')
            .then(response => {
                setAutomoveis(response.data); // define os automóveis para renderizar no select
            })
            .catch(error => {
                console.error('Erro ao buscar automóveis:', error);
            });
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!pedido.cliente.id) newErrors.cliente = 'Selecione um cliente';
        if (!pedido.agente.id) newErrors.agente = 'Selecione um agente';
        if (!pedido.automovel.id) newErrors.automovel = 'Selecione um automóvel';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função para criar um novo pedido
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/pedidos', pedido);
            setMessage('Pedido criado com sucesso!');
            setPedido({
                dataPedido: new Date().toISOString().split('T')[0], // yyyy-MM-dd
                status: 'Pendente',
                cliente: { id: '' },
                agente: { id: '' },
                automovel: { id: '' },
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
                            type="text"
                            name="cliente.id"
                            id="cliente"
                            value={pedido.cliente?.id || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Agente</label>
                        <select
                            className={`form-select ${errors.agente ? 'error-input' : ''}`}
                            name="agente.id"
                            value={pedido.agente.id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione um agente</option>
                            {agentes.map(agente => (
                                <option key={agente.id} value={agente.id}>
                                    {agente.nome}
                                </option>
                            ))}
                        </select>
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