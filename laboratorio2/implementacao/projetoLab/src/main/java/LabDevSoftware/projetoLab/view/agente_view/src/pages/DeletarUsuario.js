import React, { useState } from 'react';
import { getAgenteById, getClienteById, deleteAgente, deleteCliente } from '../services/APIService';
import Sidebar from '../components/Sidebar';
import '../styles/list.css';

function DeletarUsuario() {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const buscarUsuario = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Tenta buscar primeiro como agente
      try {
        const data = await getAgenteById(userId);
        setUserData(data);
        return;
      } catch (err) {
        // Se não encontrar como agente, tenta como cliente
        try {
          const data = await getClienteById(userId);
          setUserData(data);
          return;
        } catch (err) {
          setUserData(null);
          setError("Usuário não encontrado");
        }
      }
    } catch (err) {
      setUserData(null);
      setError("Erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja deletar este usuário? Esta ação não pode ser desfeita.")) {
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        if (userData.cnpj) {
          await deleteAgente(userId);
        } else {
          await deleteCliente(userId);
        }
        setSuccess("Usuário deletado com sucesso!");
        setUserData(null);
        setUserId("");
      } catch (err) {
        setError("Erro ao deletar usuário");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <div className="list-container">
          <header className="list-header">
            <h2>Deletar Usuário</h2>
          </header>
          
          <form onSubmit={buscarUsuario} className="search-form">
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
            <button type="submit" disabled={loading}>
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          {userData && (
            <div className="user-card">
              <div className="card-header">
                <h4>{userData.nome}</h4>
                <span className="user-type">
                  {userData.cnpj ? 'Agente' : 'Cliente'}
                </span>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <span className="label">Email:</span>
                  <span className="value">{userData.email}</span>
                </div>
                {userData.cnpj && (
                  <div className="info-row">
                    <span className="label">CNPJ:</span>
                    <span className="value">{userData.cnpj}</span>
                  </div>
                )}
                {userData.cpf && (
                  <div className="info-row">
                    <span className="label">CPF:</span>
                    <span className="value">{userData.cpf}</span>
                  </div>
                )}
                <button 
                  onClick={handleDelete}
                  className="delete-button"
                  disabled={loading}
                >
                  {loading ? 'Deletando...' : 'Confirmar Exclusão'}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default DeletarUsuario;