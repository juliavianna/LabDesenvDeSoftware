import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
    (config) => {
        console.log('Making request to:', config.url);
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
    (response) => {
        console.log('Response received:', response.config.url, response.status);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('Error response:', {
                url: error.config.url,
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            });
            
            // Handle specific error cases
            if (error.response.status === 401) {
                console.error('Authentication error - Token might be invalid or expired');
                // You might want to redirect to login here
            } else if (error.response.status === 403) {
                console.error('Forbidden - User does not have permission');
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request setup error:', error.message);
        }
        return Promise.reject(error);
    }
);

export async function getAgentes() {
    try {
        console.log('Fetching agentes...');
        const response = await api.get('/agentes');
        console.log('Agentes fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error in getAgentes:', error);
        throw error;
    }
}

export async function getAgenteByCnpj(cnpj) {
    try {
        const response = await api.get(`/agentes/cnpj/${cnpj}`);
        return response.data;
    } catch (error) {
        throw new Error('Agente não encontrado');
    }
}

export async function getAgenteById(id) {
    const response = await api.get(`/agentes/${id}`);
    return response.data;
}

export async function createAgente(agente) {
    const response = await api.post('/agentes', agente);
    return response.data;
}

export async function updateAgente(id, agente) {
    const response = await api.put(`/agentes/${id}`, agente);
    return response.data;
}

export async function deleteAgente(id) {
    await api.delete(`/agentes/${id}`);
}

export async function getClientes() {
    try {
        console.log('Fetching clientes...');
        const response = await api.get('/clientes');
        console.log('Clientes fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error in getClientes:', error);
        throw error;
    }
}

export async function getClienteByCpf(cpf) {
    try {
        const response = await api.get(`/clientes/cpf/${cpf}`);
        return response.data;
    } catch (error) {
        throw new Error('Cliente não encontrado');
    }
}

export async function createCliente(cliente) {
    const response = await api.post('/clientes', cliente);
    return response.data;
}

export async function updateCliente(id, cliente) {
    const response = await api.put(`/clientes/${id}`, cliente);
    return response.data;
}

export async function deleteCliente(id) {
    await api.delete(`/clientes/${id}`);
}

export async function getClienteById(id) {
    const response = await api.get(`/clientes/${id}`);
    return response.data;
}

export async function getUsuarioById(id) {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
}

export async function loginUser(email, senha) {
    const response = await api.post('/login', { email, senha });
    return response.data;
}

export async function cadastrarAutomovel(automovel) {
    try {
        const response = await api.post('/automoveis', automovel);
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar automóvel:', error);
        throw error;
    }
}
