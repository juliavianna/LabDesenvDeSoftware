package LabDevSoftware.projetoLab.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import LabDevSoftware.projetoLab.entity.Cliente;
import LabDevSoftware.projetoLab.entity.Pedido;
import LabDevSoftware.projetoLab.repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public ResponseEntity<Cliente> buscarPorId(Long id) {
        return clienteRepository.findById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Cliente> atualizar(Long id, Cliente cliente) {
        return clienteRepository.findById(id).map(c -> {
            c.setNome(cliente.getNome());
            c.setEndereco(cliente.getEndereco());
            c.setSenha(cliente.getSenha());
            c.setRg(cliente.getRg());
            c.setRg(cliente.getCpf());
            c.setProfissao(cliente.getProfissao());
            return ResponseEntity.ok(clienteRepository.save(c));
        }).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Object> deletar(Long id) {
        return clienteRepository.findById(id).map(c -> {
            clienteRepository.delete(c);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    void criarPedido(Pedido pedido){
    }

    void modificarPedido(int pedidoId, Pedido novoPedido){
    }

    Pedido consultarPedido(int pedidoId){
        Pedido pedido= new Pedido();
        return pedido;
    }

    void cancelarPedido(int pedidoId) {
    }
    
}
