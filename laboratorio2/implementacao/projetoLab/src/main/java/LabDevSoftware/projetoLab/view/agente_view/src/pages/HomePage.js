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
            <h3>Buscar usuário</h3>
            <p>Pesquise informações de usuários cadastrados</p>
          </div>
          <div className="action-card" onClick={() => navigate('/atualizar')}>
            <h3>Atualizar usuário</h3>
            <p>Atualize informações de usuários existentes</p>
          </div>
          <div className="action-card" onClick={() => navigate('/deletar')}>
            <h3>Deletar usuário</h3>
            <p>Remova usuários do sistema</p>
          </div>
          <div className="action-card" onClick={() => navigate('/pedidos')}>
            <h3>Criar novo pedido</h3>
            <p>Cadastre um novo pedido</p>
          </div>
          <div className="action-card" onClick={() => navigate('/buscar-pedido')}>
            <h3>Buscar pedido</h3>
            <p>Pesquise um pedido</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;