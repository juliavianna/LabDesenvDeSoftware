package LabDevSoftware.projetoLab.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import LabDevSoftware.projetoLab.entity.Agente;
import LabDevSoftware.projetoLab.entity.Pedido;
import LabDevSoftware.projetoLab.repository.AgenteRepository;

@Service
public class AgenteService {
    @Autowired
    private AgenteRepository agenteRepository;

    void modificarPedido(int pedidoId, Pedido novoPedido){
    }

    void avaliarPedido(int pedidoId, boolean parecer){
    }

    public Agente salvar(Agente agente) {
        return agenteRepository.save(agente);
    }

    public List<Agente> listarTodos() {
        return agenteRepository.findAll();
    }

    public ResponseEntity<Agente> buscarPorId(Long id) {
        return agenteRepository.findById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Agente> atualizar(Long id, Agente agente) {
        return agenteRepository.findById(id).map(a -> {
            a.setNome(agente.getNome());
            a.setEndereco(agente.getEndereco());
            a.setSenha(agente.getSenha());
            a.setCnpj(agente.getCnpj());
            return ResponseEntity.ok(agenteRepository.save(a));
        }).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Object> deletar(Long id) {
        return agenteRepository.findById(id).map(a -> {
            agenteRepository.delete(a);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
