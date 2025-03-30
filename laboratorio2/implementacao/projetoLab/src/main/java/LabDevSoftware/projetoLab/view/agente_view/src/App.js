import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [agentes, setAgentes] = useState([]);
  // buscando agentes do backend
  useEffect(() => {
    fetch('/agentes') 
      .then((response) => response.json())
      .then((data) => setAgentes(data))
      .catch((error) => console.error('Erro ao buscar agentes:', error));
  }, []);

  const [agenteId, setAgenteId] = useState('');
  const [agente, setAgente] = useState(null);
  const [error, setError] = useState('');

  // buscando agente pelo ID
  const buscarAgente = (e) => {
    e.preventDefault(); 
    fetch(`/agentes/${agenteId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Agente não encontrado');
        }
        return response.json();
      })
      .then((data) => {
        setAgente(data);
        setError('');
      })
      .catch((err) => {
        setAgente(null);
        setError(err.message);
      });
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAB DESENVOLVIMENTO DE SOFTWARE</h1>
        <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite o nome" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Digite o email" />
        </div>
        <button type="submit">Enviar</button>
      </form>
         <ul>
          {agentes.map((agente) => (
            <li key={agente.id}>
              <strong>Nome:</strong> {agente.nome} <br />
              <strong>Email:</strong> {agente.email}
            </li>
          ))}
        </ul> 

        <h1>Buscar Agente</h1>
        <form onSubmit={buscarAgente}>
          <div>
            <label htmlFor="agenteId">ID do Agente:</label>
            <input
              type="text"
              id="agenteId"
              value={agenteId}
              onChange={(e) => setAgenteId(e.target.value)}
              placeholder="Digite o ID do agente"
            />
          </div>
          <button type="submit">Buscar</button>
        </form>

        {/* Exibe o agente encontrado ou mensagem de erro */}
        {agente && (
          <div>
            <h2>Detalhes do Agente</h2>
            <p><strong>ID:</strong> {agente.id}</p>
            <p><strong>Nome:</strong> {agente.nome}</p>
            <p><strong>Email:</strong> {agente.email}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      
      </header>
    </div>

    
  );
}

export default App;