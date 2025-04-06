import React, { useState } from 'react';
import { getAgenteById, getClienteById } from '../services/APIService';
import Sidebar from '../components/Sidebar';

function BuscarUsuario() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Tenta buscar primeiro como agente
      try {
        const data = await getAgenteById(userId);
        setUserData(data);
        setError("");
        return;
      } catch (err) {
        // Se não encontrar como agente, tenta como cliente
        const data = await getClienteById(userId);
        setUserData(data);
        setError("");
      }
    } catch (err) {
      setUserData(null);
      setError("Usuário não encontrado");
    }
  };

  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <div className="search-container">
          <h2>Buscar Usuário</h2>
          
          <form onSubmit={handleSearch} className="search-form">
            
            <div className="form-group">
              <label htmlFor="userId">ID do Usuário:</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Digite o ID do Usuário"
                required
              />
            </div>
            <button type="submit">Buscar</button>
          </form>

          {userData && (
            <div className="user-details">
              <h3>Detalhes do Usuário</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <strong>Nome:</strong>
                  <span>{userData.nome}</span>
                </div>
                <div className="detail-item">
                  <strong>Email:</strong>
                  <span>{userData.email}</span>
                </div>
                {userData.cnpj && (
                  <div className="detail-item">
                    <strong>CNPJ:</strong>
                    <span>{userData.cnpj}</span>
                  </div>
                )}
                {userData.cpf && (
                  <div className="detail-item">
                    <strong>CPF:</strong>
                    <span>{userData.cpf}</span>
                  </div>
                )}
                {userData.rg && (
                  <div className="detail-item">
                    <strong>RG:</strong>
                    <span>{userData.rg}</span>
                  </div>
                )}
                {userData.profissao && (
                  <div className="detail-item">
                    <strong>Profissão:</strong>
                    <span>{userData.profissao}</span>
                  </div>
                )}
                {userData.empregador && (
                  <div className="detail-item">
                    <strong>Empregador:</strong>
                    <span>{userData.empregador}</span>
                  </div>
                )}
                {userData.maxRendimentos && (
                  <div className="detail-item">
                    <strong>Máximo de Rendimentos:</strong>
                    <span>{userData.maxRendimentos}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {error && <p className="error-message">{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default BuscarUsuario;
