import React, { useEffect, useState } from "react";
import { getAgentes, getAgenteById, createAgente, updateAgente, deleteAgente } from "./services/APIService";
import "./App.css";

function App() {
  const [agentes, setAgentes] = useState([]);
  const [agenteId, setAgenteId] = useState("");
  const [agente, setAgente] = useState(null);
  const [error, setError] = useState("");

  // Buscar todos os agentes ao carregar o componente
  useEffect(() => {
    getAgentes()
      .then((data) => setAgentes(data))
      .catch((err) => console.error("Erro ao buscar agentes:", err));
  }, []);

  // Buscar um agente pelo ID
  const buscarAgente = async (e) => {
    e.preventDefault();
    try {
      const data = await getAgenteById(agenteId);
      setAgente(data);
      setError("");
    } catch (err) {
      setAgente(null);
      setError("Agente não encontrado");
    }
  };

  // Atualizar Agenteeee
const atualizarAgente = async (e) => {
  e.preventDefault();
  const id = e.target.id.value;
  const nome = e.target.nome.value;
  const email = e.target.email.value;

  const agenteAtualizado = { nome, email };

  try {
    const data = await updateAgente(id, agenteAtualizado);
    const novosAgentes = agentes.map((agente) =>
      agente.id === id ? data : agente
    );
    setAgentes(novosAgentes);
    alert("Agente atualizado com sucesso!");
  } catch (err) {
    console.error("Erro ao atualizar agente:", err);
  }
};

// Deletar Agente
const deletarAgente = async (id) => {
  try {
    await deleteAgente(id);
    const novosAgentes = agentes.filter((agente) => agente.id !== id);
    setAgentes(novosAgentes);
    alert("Agente deletado com sucesso!");
  } catch (err) {
    console.error("Erro ao deletar agente:", err);
  }
};


  // Criar novo agente
  const cadastrarAgente = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;

    const novoAgente = { nome, email };
    
    try {
      const data = await createAgente(novoAgente);
      setAgentes([...agentes, data]);
      alert("Agente cadastrado com sucesso!");
    } catch (err) {
      console.error("Erro ao cadastrar agente:", err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LAB DESENVOLVIMENTO DE SOFTWARE</h1>

        <h2>Cadastrar Agente</h2>
        <form onSubmit={cadastrarAgente}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required placeholder="Digite o nome" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Digite o email" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>

        <h2>Lista de Agentes</h2>
        <ul>
          {agentes.map((agente) => (
            <li key={agente.id}>
              <strong>Nome:</strong> {agente.nome} <br />
              <strong>Email:</strong> {agente.email}
            </li>
          ))}
        </ul>

        <h2>Buscar Agente</h2>
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

        {agente && (
          <div>
            <h2>Detalhes do Agente</h2>
            <p><strong>ID:</strong> {agente.id}</p>
            <p><strong>Nome:</strong> {agente.nome}</p>
            <p><strong>Email:</strong> {agente.email}</p>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;