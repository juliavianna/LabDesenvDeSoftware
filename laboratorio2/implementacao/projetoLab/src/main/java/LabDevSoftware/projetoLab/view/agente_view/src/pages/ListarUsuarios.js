import React, { useState, useEffect } from 'react';
import { getAgentes, getClientes } from '../services/APIService';
import Sidebar from '../components/Sidebar';
import '../styles/list.css';

function ListarUsuarios() {
  const [agentes, setAgentes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [agentesData, clientesData] = await Promise.all([
          getAgentes(),
          getClientes()
        ]);
        setAgentes(agentesData);
        setClientes(clientesData);
        setError("");
      } catch (err) {
        setError("Erro ao carregar usuários");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <div className="list-container">
          <header className="list-header">
            <h2>Lista de Usuários</h2>
            <div className="list-stats">
              <span className="stat-item">
                <strong>Total de Agentes:</strong> {agentes.length}
              </span>
              <span className="stat-item">
                <strong>Total de Clientes:</strong> {clientes.length}
              </span>
            </div>
          </header>
          
          {error && <p className="error-message">{error}</p>}

          <div className="users-section">
            <div className="section-header">
              <h3>Agentes</h3>
              <span className="section-count">{agentes.length} registros</span>
            </div>
            {agentes.length > 0 ? (
              <div className="users-grid">
                {agentes.map((agente) => (
                  <div key={agente.id} className="user-card">
                    <div className="card-header">
                      <h4>{agente.nome}</h4>
                      <span className="user-type">Agente</span>
                    </div>
                    <div className="card-body">
                      <div className="info-row">
                        <span className="label">Email:</span>
                        <span className="value">{agente.email}</span>
                      </div>
                      <div className="info-row">
                        <span className="label">CNPJ:</span>
                        <span className="value">{agente.cnpj}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Nenhum agente cadastrado</p>
              </div>
            )}
          </div>

          <div className="users-section">
            <div className="section-header">
              <h3>Clientes</h3>
              <span className="section-count">{clientes.length} registros</span>
            </div>
            {clientes.length > 0 ? (
              <div className="users-grid">
                {clientes.map((cliente) => (
                  <div key={cliente.id} className="user-card">
                    <div className="card-header">
                      <h4>{cliente.nome}</h4>
                      <span className="user-type">Cliente</span>
                    </div>
                    <div className="card-body">
                      <div className="info-row">
                        <span className="label">Email:</span>
                        <span className="value">{cliente.email}</span>
                      </div>
                      <div className="info-row">
                        <span className="label">CPF:</span>
                        <span className="value">{cliente.cpf}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>Nenhum cliente cadastrado</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListarUsuarios;