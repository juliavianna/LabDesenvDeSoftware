import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAgente, createCliente } from '../services/APIService';

function Register() {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [rendimento1, setRendimento1] = useState('');
  const [rendimento2, setRendimento2] = useState('');
  const [rendimento3, setRendimento3] = useState('');
  const navigate = useNavigate();


  const handleTipoUsuarioChange = (e) => {
    if (tipoUsuario === e.target.value) {
      setTipoUsuario("");
    } else {
      setTipoUsuario(e.target.value);
      setCpf("");
      setCnpj("");
    }
  };

  // Função para formatar CPF
  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  };

  // Função para formatar CNPJ
  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
  };

  // Handler para CPF
  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os não-dígitos
    value = value.slice(0, 11); // Limita a 11 dígitos
    if (value.length === 11) {
      value = formatCPF(value);
    }
    setCpf(value);
  };

  // Handler para CNPJ
  const handleCnpjChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os não-dígitos
    value = value.slice(0, 14); // Limita a 14 dígitos
    if (value.length === 14) {
      value = formatCNPJ(value);
    }
    setCnpj(value);
  };

  const cadastrarAgente = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    const cnpjLimpo = cnpj.replace(/\D/g, ''); // Remove formatação do CNPJ

    const novoAgente = {
      type: "AGENTE",
      nome,
      email,
      senha,
      cnpj: cnpjLimpo,
      tipo: tipoEmpresa,
    };

    try {
      await createAgente(novoAgente);
      alert("Agente cadastrado com sucesso!");
      navigate('/login');
    } catch (err) {
      console.error("Erro ao cadastrar agente:", err);
      alert("Erro ao cadastrar agente. Por favor, tente novamente.");
    }
  };

  const cadastrarCliente = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const senha = e.target.senha.value;
    const email = e.target.email.value;
    const rg = e.target.rg.value;
    const cpfLimpo = cpf.replace(/\D/g, ''); // Remove formatação do CPF
    const profissao = e.target.profissao.value;
    const empregador = e.target.empregador.value;

    const rendimentos = [rendimento1, rendimento2, rendimento3]
      .map(val => parseFloat(val))
      .filter(val => !isNaN(val)); // remove campos vazios

    if (rendimentos.length === 0) {
      alert("Preencha pelo menos um rendimento.");
      return;
    }

    const novoCliente = {
      type: "CLIENTE",
      nome,
      email,
      senha,
      rg,
      cpf: cpfLimpo,
      profissao,
      empregador,
      rendimentos
    };

    try {
      await createCliente(novoCliente);
      alert("Cliente cadastrado com sucesso!");
      navigate('/login');
    } catch (err) {
      console.error("Erro ao cadastrar cliente:", err);
      alert("Erro ao cadastrar cliente. Por favor, tente novamente.");
    }
  };

  return (
    <div className="register-container">
      <h2>Cadastrar Usuário</h2>
      <div className="user-type-selection">
        <p>Selecione o tipo de usuário:</p>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="tipoUsuario"
              value="CLIENTE"
              checked={tipoUsuario === "CLIENTE"}
              onChange={handleTipoUsuarioChange}
            />
            Cliente
          </label>
          <label>
            <input
              type="radio"
              name="tipoUsuario"
              value="AGENTE"
              checked={tipoUsuario === "AGENTE"}
              onChange={handleTipoUsuarioChange}
            />
            Agente
          </label>
        </div>
      </div>

      {tipoUsuario === "CLIENTE" && (
        <form onSubmit={cadastrarCliente} className="register-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          <div className="form-group">
            <label htmlFor="profissao">Profissão:</label>
            <input type="text" id="profissao" name="profissao" required />
          </div>
          <div className="form-group">
            <label htmlFor="empregador">Empregador:</label>
            <input type="text" id="empregador" name="empregador" required />
          </div>
          <div className="form-group">
            <label>Rendimentos (preencha pelo menos 1):</label>
            <input
              type="number"
              step="0.01"
              placeholder="Rendimento 1 (obrigatório)"
              value={rendimento1}
              onChange={(e) => setRendimento1(e.target.value)}
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="Rendimento 2 (opcional)"
              value={rendimento2}
              onChange={(e) => setRendimento2(e.target.value)}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Rendimento 3 (opcional)"
              value={rendimento3}
              onChange={(e) => setRendimento3(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text" id="cpf" value={cpf} onChange={handleCpfChange} placeholder="000.000.000-00" required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rg">RG:</label>
            <input type="text" id="rg" name="rg" required />
          </div>
          <button type="submit">Cadastrar Cliente</button>
        </form>
      )}

      {tipoUsuario === "AGENTE" && (
        <form onSubmit={cadastrarAgente} className="register-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ:</label>
            <input
              type="text"
              id="cnpj"
              value={cnpj}
              onChange={handleCnpjChange}
              placeholder="00.000.000/0000-00"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Agente:</label>
            <select
              id="tipo"
              name="tipo"
              value={tipoEmpresa}
              onChange={(e) => setTipoEmpresa(e.target.value)}
              required
            >
              <option value="">Selecione o tipo</option>
              <option value="BANCO">BANCO</option>
              <option value="EMPRESA">EMPRESA</option>
            </select>
          </div>
          <button type="submit">Cadastrar Agente</button>
        </form>
      )}
    </div>
  );
}

export default Register;