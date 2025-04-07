import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/buscar">Buscar usuário</Link>
          </li>
          <li>
            <Link to="/atualizar">Atualizar usuário</Link>
          </li>
          <li>
            <Link to="/deletar">Deletar usuário</Link>
          </li>
          <li>
            <Link to="/pedidos">Criar pedido</Link>
          </li>
          <li>
            <Link to="/buscar-pedido">Buscar pedido</Link>
          </li>
          <li className="logout-link">
            <Link to="/logout">Sair</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;