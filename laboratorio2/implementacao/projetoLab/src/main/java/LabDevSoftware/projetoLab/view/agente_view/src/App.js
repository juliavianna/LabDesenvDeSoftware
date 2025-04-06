import React, { useEffect, useState } from "react";
import { getAgentes, getAgenteById, createAgente, createEnderecoAgente, updateAgente, deleteAgente, createCliente } from "./services/APIService";
import "./App.css";

function App() {
  const [agentes, setAgentes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [agenteId, setAgenteId] = useState("");
  const [agente, setAgente] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false); 
  const [tipoUsuario, setTipoUsuario] = useState("");


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

  const handleTipoUsuarioChange = (e) => {
    if (tipoUsuario === e.target.value) {
      setTipoUsuario("");
    } else {
      setTipoUsuario(e.target.value); 
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
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    const cnpj = e.target.cnpj.value;
    const bairro = e.target.bairro.value;
    const cidade = e.target.cidade.value;
    const complemento = e.target.complemento.value;
    const estado = e.target.estado.value;
    const numero = e.target.numero.value;
    const rua = e.target.rua.value;

    const endereco = { rua, bairro, numero, complemento, cidade, estado };

    const novoAgente = { nome, email, senha, cnpj, endereco };

    try {
      const data = await createAgente(novoAgente);
      setAgentes([...agentes, data]);
      alert("Agente cadastrado com sucesso!");
    } catch (err) {
      console.error("Erro ao cadastrar agente:", err);
    }

  };

  // Criar novo agente
  const cadastrarCliente = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const senha = e.target.senha.value;
    const email = e.target.email.value;
    const rg = e.target.rg.value;
    const cpf = e.target.cpf.value;
    const bairro = e.target.bairro.value;
    const cidade = e.target.cidade.value;
    const complemento = e.target.complemento.value;
    const estado = e.target.estado.value;
    const numero = e.target.numero.value;
    const rua = e.target.rua.value;

    const endereco = { rua, bairro, numero, complemento, cidade, estado };

    const novoCliente = { nome, email, senha, rg, cpf, endereco };

    try {
      const data = await createCliente(novoCliente);
      setAgentes([...agentes, data]);
      alert("Agente cadastrado com sucesso!");
    } catch (err) {
      console.error("Erro ao cadastrar agente:", err);
    }

  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Laboratório de Desenvolvimento de Software</h2>

        <h3>Cadastrar Usuário</h3>
        <p>Qual Tipo de Usuário é você:</p>
        <label>
          <input type="radio" name="tipoUsuario" value="cliente" checked={tipoUsuario === "cliente"} onChange={handleTipoUsuarioChange}/>
          Cliente
        </label> <br />
        <label>
          <input type="radio" name="tipoUsuario" value="empresa_banco" checked={tipoUsuario === "empresa_banco"} onChange={handleTipoUsuarioChange}/>
          Empresa/Banco
        </label> <br />
        {tipoUsuario === "cliente" && (
          <form onSubmit={cadastrarCliente}>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" name="nome" required placeholder="Digite o nome" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="email">E-mail: </label>
              <input type="text" id="email" name="email" required placeholder="Digite o seu e-mail" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="senha">Senha: </label>
              <input type="text" id="senha" name="senha" required placeholder="Digite a senha" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="cpf">CPF: </label>
              <input type="cpf" id="cpf" name="cpf" required placeholder="Digite o CPF" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="rg">RG: </label>
              <input type="rg" id="rg" name="rg" required placeholder="Digite o RG" />
            </div> 
            <div style={{ textAlign: 'left' }}>
              <h4>Endereço</h4>
              <label htmlFor="bairro" >Bairro: </label>
              <input type="bairro" id="bairro" name="bairro" required placeholder="Digite o bairro" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="cidade">Cidade: </label>
              <input type="cidade" id="cidade" name="cidade" required placeholder="Digite a cidade" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="complemento">Complemento: </label>
              <input type="complemento" id="complemento" name="complemento" required placeholder="Digite o complemento" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="estado">Estado: </label>
              <input type="estado" id="estado" name="estado" required placeholder="Digite o estado" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="numero">Número: </label>
              <input type="numero" id="numero" name="numero" required placeholder="Digite o numero" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="rua">Rua: </label>
              <input type="rua" id="rua" name="rua" required placeholder="Digite a rua" />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        )}
        {tipoUsuario === "empresa_banco" && (
          <form onSubmit={cadastrarAgente}>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" required placeholder="Digite o nome" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="email">E-mail: </label>
            <input type="text" id="email" name="email" required placeholder="Digite o seu e-mail" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="senha">Senha: </label>
            <input type="text" id="senha" name="senha" required placeholder="Digite a senha" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="cnpj">CNPJ: </label>
            <input type="cnpj" id="cnpj" name="cnpj" required placeholder="Digite o CNPJ" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4>Endereço</h4>
            <label htmlFor="bairro" >Bairro: </label>
            <input type="bairro" id="bairro" name="bairro" required placeholder="Digite o bairro" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="cidade">Cidade: </label>
            <input type="cidade" id="cidade" name="cidade" required placeholder="Digite a cidade" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="complemento">Complemento: </label>
            <input type="complemento" id="complemento" name="complemento" required placeholder="Digite o complemento" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="estado">Estado: </label>
            <input type="estado" id="estado" name="estado" required placeholder="Digite o estado" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="numero">Número: </label>
            <input type="numero" id="numero" name="numero" required placeholder="Digite o numero" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="rua">Rua: </label>
            <input type="rua" id="rua" name="rua" required placeholder="Digite a rua" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        )}

         <button className="collapsible" onClick={toggleEdit}>
          {isEditOpen ? "Fechar Edição" : "Editar Usuário Existente"}
        </button>

        {isEditOpen && (
          <div className="content">
            <form onSubmit={atualizarAgente}>
              <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" required placeholder="Atualize o nome" />
              </div>
              <div>
                <label htmlFor="senha">Senha: </label>
                <input type="senha" id="senha" name="senha" required placeholder="Atualize a senha" />
              </div>
              <button type="submit">Atualizar</button>
            </form>
          </div>
        )}

        <h3>-------------------------</h3>
        <h3>Buscar Usuário</h3>
        <form onSubmit={buscarAgente}>
          <div>
            <label htmlFor="agenteId">ID do Usuário: </label>
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
          <div style={{ textAlign: 'left' }}>
            <h4>Detalhes do Usuário</h4>
            <p><strong>Nome:</strong> {agente.nome}</p>
            <p><strong>Email:</strong> {agente.email}</p>
            <p><strong>CNPJ:</strong> {agente.cnpj}</p>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <h3>-------------------------</h3>
        <h3>Deletar Usuário</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deletarAgente(agenteId);
          }}
        >
          <div>
            <label htmlFor="agenteIdDeletar">ID do Usuário: </label>
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
        
        <h3>-------------------------</h3>
        <h3>Listar Usuários</h3>
        <ul style={{ textAlign: 'left' }}>
          {agentes.map((agente) => (
            <li key={agente.id}>
              <strong>Nome:</strong> {agente.nome}
            </li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;