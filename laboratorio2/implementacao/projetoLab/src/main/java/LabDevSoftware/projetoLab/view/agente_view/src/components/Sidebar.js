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
            <Link to="/buscar">Buscar Usuário</Link>
          </li>
          <li>
            <Link to="/atualizar">Atualizar Usuário</Link>
          </li>
          <li>
            <Link to="/deletar">Deletar Usuário</Link>
          </li>
          <li>
            <Link to="/listar">Listar Usuários</Link>
          </li>
          <li>
            <Link to="/pedidos">Pedidos</Link>
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