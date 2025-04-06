package LabDevSoftware.projetoLab.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LabDevSoftware.projetoLab.entity.Automovel;
import LabDevSoftware.projetoLab.entity.Pedido;
import LabDevSoftware.projetoLab.repository.AutomovelRepository;
import LabDevSoftware.projetoLab.service.PedidoService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @Autowired
    private AutomovelRepository automovelRepository;

    @Operation(summary = "Criar novo pedido", description = "Endpoint POST que cria um novo pedido")
    @PostMapping
    public Pedido criarPedido(@RequestBody Pedido pedido) {
        Automovel automovel = automovelRepository.findById(pedido.getAutomovel().getId())
                .orElseThrow(() -> new EntityNotFoundException("Automóvel não encontrado"));
        pedido.setAutomovel(automovel);
        return pedidoService.salvar(pedido);
    }

    @Operation(summary = "Listar todos os pedidos", description = "Endpoint GET que lista todos os pedidos")
    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoService.listarTodos();
    }

    @Operation(summary = "Listar pedido pelo ID", description = "Endpoint GET que lista um pedido pelo ID")
    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long id) {
        return pedidoService.buscarPorId(id);
    }

}
