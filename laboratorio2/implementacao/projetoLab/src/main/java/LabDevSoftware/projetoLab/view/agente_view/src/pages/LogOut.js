import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LogOut.css';

const LogOut = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'Usuário';

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <div className="logout-container">
            <div className="user-info">
                <span className="welcome-text">Olá, {userName}</span>
                <button className="logout-button" onClick={handleLogout}>
                    Sair
                </button>
            </div>
        </div>
    );
};

export default LogOut;

