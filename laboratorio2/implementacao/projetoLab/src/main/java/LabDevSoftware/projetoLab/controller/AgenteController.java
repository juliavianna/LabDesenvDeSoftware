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
import LabDevSoftware.projetoLab.entity.Agente;
import LabDevSoftware.projetoLab.service.AgenteService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/agentes")
public class AgenteController {
    @Autowired
    private AgenteService agenteService;

    @Operation(summary = "Criar novo agente", description = "Endpoint POST que cria um novo agente")
    @PostMapping
    public Agente criarAgente(@RequestBody Agente agente) {
        return agenteService.salvar(agente);
    }

    @Operation(summary = "Listar todos os agentes", description = "Endpoint GET que lista todos os agentes")
    @GetMapping
    public List<Agente> listarAgentes() {
        return agenteService.listarTodos();
    }

    @Operation(summary = "Listar agente pelo ID", description = "Endpoint GET que lista um agente pelo ID")
    @GetMapping("/{id}")
    public ResponseEntity<Agente> buscarAgente(@PathVariable Long id) {
        return agenteService.buscarPorId(id);
    }

    @Operation(summary = "Atualizar agente pelo ID", description = "Endpoint PUT que atualiza um agente pelo ID")
    @PutMapping("/{id}")
    public ResponseEntity<Agente> atualizarAgente(@PathVariable Long id, @RequestBody Agente agente) {
        return agenteService.atualizar(id, agente);
    }

    @Operation(summary = "Deletar agente pelo ID", description = "Endpoint DELETE que deleta um agente pelo ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarAgente(@PathVariable Long id) {
        return agenteService.deletar(id);
    }
}

