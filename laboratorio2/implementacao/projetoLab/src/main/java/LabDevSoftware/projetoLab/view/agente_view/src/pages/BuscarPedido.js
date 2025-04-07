import React, { useState } from 'react';
import { getPedidoById } from '../services/APIService';
import Sidebar from '../components/Sidebar';

function BuscarPedido() {
    const [idPedido, setIdPedido] = useState("");
    const [pedidoData, setPedidoData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            // Tenta buscar primeiro como agente
            try {
                const data = await getPedidoById(idPedido); // Certifique-se de que 'idPedido' esteja disponível no escopo
                setPedidoData(data);
                setError("");
                return;
            } catch (err) {
                setPedidoData(null);
                setError("Pedido não encontrado");
            }
        } catch (err) {
            console.error("Erro inesperado:", err);
            setError("Erro ao buscar o pedido");
        }
    };

    return (
        <div className="page-container">
            <Sidebar />
            <main className="main-content">
                <div className="search-container">
                    <h2>Buscar Pedido</h2>

                    <form onSubmit={handleSearch} className="search-form">

                        <div className="form-group">
                            <label htmlFor="userId">ID do Pedido:</label>
                            <input
                                type="text"
                                id="userId"
                                value={idPedido}
                                onChange={(e) => setIdPedido(e.target.value)}
                                placeholder="Digite o ID do pedido"
                                required
                            />
                        </div>
                        <button type="submit">Buscar</button>
                    </form>

                    {pedidoData && (
                        <div className="pedido-details">
                            <h3>Detalhes do Pedido</h3>
                            <div className="details-grid">
                                <div className="detail-item">
                                    <strong>Data do pedido:</strong>
                                    <span>{pedidoData.dataPedido}</span>
                                </div>
                                <div className="detail-item">
                                    <strong>Status:</strong>
                                    <span>{pedidoData.status}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && <p className="error-message">{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default BuscarPedido;
