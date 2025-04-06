import React, { useState } from 'react';
import { getAgenteById, getClienteById, updateAgente, updateCliente } from '../services/APIService';
import Sidebar from '../components/Sidebar';
import '../styles/list.css';

function AtualizarUsuario() {
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
        const dados = await getAgenteById(userId);
        setUserData(dados);
        return;
      } catch (err) {
        // Se não encontrar como agente, tenta como cliente
        try {
          const dados = await getClienteById(userId);
          setUserData(dados);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const nome = e.target.nome.value;
    const senha = e.target.senha.value;
    const email = e.target.email.value;

    const usuarioAtt = { nome, senha, email };

    try {
      if (userData.cnpj) {
        await updateAgente(userId, usuarioAtt);
      } else {
        await updateCliente(userId, usuarioAtt);
      }
      setSuccess("Usuário atualizado com sucesso!");
      // Refresh user data
      const dadoAtt = userData.cnpj 
        ? await getAgenteById(userId)
        : await getClienteById(userId);
      setUserData(dadoAtt);
    } catch (err) {
      setError("Erro ao atualizar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <div className="list-container">
          <header className="list-header">
            <h2>Atualizar Usuário</h2>
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
              <form onSubmit={handleUpdate} className="update-form">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      defaultValue={userData.nome}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={userData.email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senha">Nova Senha:</label>
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      placeholder="Digite a nova senha"
                      required
                    />
                  </div>
                  <button type="submit" disabled={loading}>
                    {loading ? 'Atualizando...' : 'Atualizar'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AtualizarUsuario;