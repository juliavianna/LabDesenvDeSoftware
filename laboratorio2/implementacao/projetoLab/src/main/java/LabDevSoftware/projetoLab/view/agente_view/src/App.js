import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import './styles/main.css';
import BuscarUsuario from './pages/BuscarUsuario';
import AtualizarUsuario from './pages/AtualizarUsuario';
import DeletarUsuario from './pages/DeletarUsuario';
import ListarUsuarios from './pages/ListarUsuarios';
import Pedidos from './pages/Pedidos';
import LogOut from './pages/LogOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/buscar" element={<BuscarUsuario />} />
        <Route path="/atualizar" element={<AtualizarUsuario />} />
        <Route path="/deletar" element={<DeletarUsuario />} />
        <Route path="/listar" element={<ListarUsuarios />} /><Route path="/pedidos" element={<Pedidos />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </Router>
  );
}

export default App;