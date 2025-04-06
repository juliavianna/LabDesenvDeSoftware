import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Sidebar />
      <main className="main-content">
        <h2>Bem-vindo ao Sistema</h2>
        <div className="actions-grid">
          <div className="action-card" onClick={() => navigate('/buscar')}>
            <h3>Buscar Usuário</h3>
            <p>Pesquise informações de usuários cadastrados</p>
          </div>
          <div className="action-card" onClick={() => navigate('/atualizar')}>
            <h3>Atualizar Usuário</h3>
            <p>Atualize informações de usuários existentes</p>
          </div>
          <div className="action-card" onClick={() => navigate('/deletar')}>
            <h3>Deletar Usuário</h3>
            <p>Remova usuários do sistema</p>
          </div>
          <div className="action-card" onClick={() => navigate('/listar')}>
            <h3>Listar Usuários</h3>
            <p>Liste todos os usuários do sistema</p>
          </div>
          <div className="action-card" onClick={() => navigate('/pedidos')}>
            <h3>Novo Pedido</h3>
            <p>Cadastre um novo pedido</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;