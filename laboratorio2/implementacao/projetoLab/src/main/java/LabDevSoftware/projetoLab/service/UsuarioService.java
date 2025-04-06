package LabDevSoftware.projetoLab.service;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import LabDevSoftware.projetoLab.entity.Usuario;
import LabDevSoftware.projetoLab.repository.AgenteRepository;
import LabDevSoftware.projetoLab.repository.ClienteRepository;
import LabDevSoftware.projetoLab.entity.Agente;
import LabDevSoftware.projetoLab.entity.Cliente;

@Service
public class UsuarioService {

    private static final Logger logger = LoggerFactory.getLogger(UsuarioService.class);
    private final AgenteRepository agenteRepository;
    private final ClienteRepository clienteRepository;

    public UsuarioService(AgenteRepository agenteRepository, ClienteRepository clienteRepository) {
        this.agenteRepository = agenteRepository;
        this.clienteRepository = clienteRepository;
    }

    void cadastrar(String nome, String rg, String cpf, String endereco, String profissao, List<String> entidadesEmpregadoras, List<Double> rendimentos) {
        // Implementation for registration
    }
   
    public boolean autenticar(String email, String senha) {
        logger.info("Buscando usuário com email: {}", email);
        
        // Buscar entre agentes
        List<Agente> agentes = agenteRepository.findAll();
        for (Agente agente : agentes) {
            if (agente.getEmail().equals(email) && agente.getSenha().equals(senha)) {
                logger.info("Agente encontrado: {}", email);
                return true;
            }
        }
        
        // Buscar entre clientes
        List<Cliente> clientes = clienteRepository.findAll();
        for (Cliente cliente : clientes) {
            if (cliente.getEmail().equals(email) && cliente.getSenha().equals(senha)) {
                logger.info("Cliente encontrado: {}", email);
                return true;
            }
        }
        
        logger.info("Usuário não encontrado com email: {}", email);
        return false;
    }

    public ResponseEntity<Usuario> buscarPorId(Long id) {
        return null; // Implementação não necessária para este caso
    }
}
