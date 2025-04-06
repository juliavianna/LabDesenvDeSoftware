package LabDevSoftware.projetoLab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LabDevSoftware.projetoLab.entity.Cliente;
import LabDevSoftware.projetoLab.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    
     @Autowired
    private ClienteService clienteService;

    @Operation(summary = "Criar novo cliente", description = "Endpoint POST que cria um novo cliente")
    @PostMapping
    public Cliente criarCliente(@RequestBody Cliente cliente) {
        return clienteService.salvar(cliente);
    }

    @Operation(summary = "Listar todos os clientes", description = "Endpoint GET que lista todos os clientes")
    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.listarTodos();
    }

    @Operation(summary = "Listar cliente pelo ID", description = "Endpoint GET que lista um cliente pelo ID")
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarCliente(@PathVariable Long id) {
        return clienteService.buscarPorId(id);
    }

    @Operation(summary = "Atualizar cliente pelo ID", description = "Endpoint PUT que atualiza um cliente pelo ID")
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        return clienteService.atualizar(id, cliente);
    }

    @Operation(summary = "Deletar cliente pelo ID", description = "Endpoint DELETE que deleta um cliente pelo ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarCliente(@PathVariable Long id) {
        return clienteService.deletar(id);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarClientePorId(@PathVariable Long id) {
        return clienteService.buscarPorId(id);
    }

}
