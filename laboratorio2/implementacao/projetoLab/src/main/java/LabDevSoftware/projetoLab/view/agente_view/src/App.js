import React, { useEffect, useState } from "react";
import { getAgentes, getAgenteById, createAgente, createEnderecoAgente, updateAgente, deleteAgente } from "./services/APIService";
import "./App.css";

function App() {
  const [agentes, setAgentes] = useState([]);
  const [agenteId, setAgenteId] = useState("");
  const [agente, setAgente] = useState(null);
  const [error, setError] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false); // Estado para controlar o colapso


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


  const toggleEdit = () => {
    setIsEditOpen(!isEditOpen);
  };

  // Atualizar Agenteeee
const atualizarAgente = async (e) => {
  e.preventDefault();
  const id = e.target.id.value;
  const nome = e.target.nome.value;
  const senha = e.target.senha.value;

  const agenteAtualizado = { nome, senha };

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
    const senha = e.target.senha.value;
    const cnpj = e.target.cnpj.value;
    const bairro = e.target.bairro.value;
    const cidade = e.target.cidade.value;
    const complemento = e.target.complemento.value;
    const estado = e.target.estado.value;
    const numero = e.target.numero.value;
    const rua = e.target.rua.value;

    const novoAgente = { nome, senha, cnpj };
    const enderecoAgente = {bairro, cidade, complemento, estado, numero, rua};
    try {
      const data = await createAgente(novoAgente);
      const endAgente = await createEnderecoAgente(enderecoAgente);
      setAgentes([...agentes, data, endAgente]);
      alert("Agente cadastrado com sucesso!");
    } catch (err) {
      console.error("Erro ao cadastrar agente:", err);
    }

  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>LAB DESENVOLVIMENTO DE SOFTWARE</h1>

        <h2>---Cadastrar Usuário---</h2>
        <form onSubmit={cadastrarAgente}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required placeholder="Digite o nome" />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input type="text" id="senha" name="senha" required placeholder="Digite a senha" />
          </div>
          <div>
            <label htmlFor="cnpj">Cnpj:</label>
            <input type="cnpj" id="cnpj" name="cnpj" required placeholder="Digite o CNPJ" />
          </div>
          <div>
            <h6>Endereço:</h6>
            <label htmlFor="bairro">Bairro:</label>
            <input type="bairro" id="bairro" name="bairro" required placeholder="Digite o bairro" />
          </div>
          <div>
            <label htmlFor="cidade">Cidade:</label>
            <input type="cidade" id="cidade" name="cidade" required placeholder="Digite a cidade" />
          </div>
          <div>
            <label htmlFor="complemento">Complemento:</label>
            <input type="complemento" id="complemento" name="complemento" required placeholder="Digite o complemento" />
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <input type="estado" id="estado" name="estado" required placeholder="Digite o estado" />
          </div>
          <div>
            <label htmlFor="numero">Numero:</label>
            <input type="numero" id="numero" name="numero" required placeholder="Digite o numero" />
          </div>
          <div>
            <label htmlFor="rua">Rua:</label>
            <input type="rua" id="rua" name="rua" required placeholder="Digite a rua" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>

         <button className="collapsible" onClick={toggleEdit}>
          {isEditOpen ? "Fechar Edição" : "Editar Usuário Existente"}
        </button>

        {isEditOpen && (
          <div className="content">
            <form onSubmit={atualizarAgente}>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required placeholder="Atualize o nome" />
              </div>
              <div>
                <label htmlFor="senha">Senha:</label>
                <input type="senha" id="senha" name="senha" required placeholder="Atualize a senha" />
              </div>
              <button type="submit">Atualizar</button>
            </form>
          </div>
        )}

  

       
        <h2>---Buscar Usuário---</h2>
        <form onSubmit={buscarAgente}>
          <div>
            <label htmlFor="agenteId">ID do Usuário:</label>
            <input
              type="text"
              id="agenteId"
              value={agenteId}
              onChange={(e) => setAgenteId(e.target.value)}
              placeholder="Digite o ID do Usuário"
            />
          </div>
          <button type="submit">Buscar</button>
        </form>

        {agente && (
          <div>
            <h2>---Detalhes do Usuário---</h2>
            <p><strong>ID:</strong> {agente.id}</p>
            <p><strong>Nome:</strong> {agente.nome}</p>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <h2>---Deletar Usuário---</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deletarAgente(agenteId);
          }}
        >
          <div>
            <label htmlFor="agenteIdDeletar">ID do Usuário:</label>
            <input
              type="text"
              id="agenteIdDeletar"
              value={agenteId}
              onChange={(e) => setAgenteId(e.target.value)}
              placeholder="Digite o ID do Usuário para deletar"
            />
          </div>
          <button type="submit">Deletar</button>
        </form>

        <h2>---Lista de Usuários---</h2>
        <ul>
          {agentes.map((agente) => (
            <li key={agente.id}>
              <strong>Nome:</strong> {agente.nome} <br />
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;