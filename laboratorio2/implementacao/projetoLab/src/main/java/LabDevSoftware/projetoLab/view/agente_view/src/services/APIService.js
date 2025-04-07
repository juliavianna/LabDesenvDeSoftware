import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export async function getPedidoById(id) {
    const response = await axios.get(`${API_URL}/pedidos/${id}`);
    return response.data;
}

export async function getAgentes() {
    const response = await axios.get(`${API_URL}/agentes`);
    return response.data;
}

export async function getAgenteByCnpj(cnpj) {
    try {
        const response = await axios.get(`${API_URL}/agentes/cnpj/${cnpj}`);
        return response.data;
    } catch (error) {
        throw new Error('Agente não encontrado');
    }
}

export async function getAgenteById(id) {
    const response = await axios.get(`${API_URL}/agentes/${id}`);
    return response.data;
}


export async function createAgente(agente) {
    const response = await axios.post(`${API_URL}/agentes`, agente);
    return response.data;
}

export async function updateAgente(id, agente) {
    const response = await axios.put(`${API_URL}/agentes/${id}`, agente);
    return response.data;
}

export async function deleteAgente(id) {
    await axios.delete(`${API_URL}/agentes/${id}`);
}


export async function getClientes() {
    const response = await axios.get(`${API_URL}/clientes`);
    return response.data;
}

export async function getClienteByCpf(cpf) {
    try {
        const response = await axios.get(`${API_URL}/clientes/cpf/${cpf}`);
        return response.data;
    } catch (error) {
        throw new Error('Cliente não encontrado');
    }
}

export async function createCliente(cliente) {
    const response = await axios.post(`${API_URL}/clientes`, cliente);
    return response.data;
}

export async function updateCliente(id, cliente) {
    const response = await axios.put(`${API_URL}/agentes/${id}`, cliente);
    return response.data;
}

export async function deleteCliente(id) {
    await axios.delete(`${API_URL}/clientes/${id}`);
}
export async function getClienteById(id) {
    const response = await axios.get(`${API_URL}/clientes/${id}`);
    return response.data;
}


export async function getUsuarioById(id) {
    const response = await axios.get(`${API_URL}/usuarios/${id}`);
    return response.data;
}

export async function loginUser(email, senha) {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data;
  }
