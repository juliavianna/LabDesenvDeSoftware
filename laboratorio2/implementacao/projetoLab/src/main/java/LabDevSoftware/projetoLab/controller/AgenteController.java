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

@RestController
@RequestMapping("/agentes")
public class AgenteController {
    @Autowired
    private AgenteService agenteService;

    @PostMapping
    public Agente criarAgente(@RequestBody Agente agente) {
        return agenteService.salvar(agente);
    }

    @GetMapping
    public List<Agente> listarAgentes() {
        return agenteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agente> buscarAgente(@PathVariable Long id) {
        return agenteService.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agente> atualizarAgente(@PathVariable Long id, @RequestBody Agente agente) {
        return agenteService.atualizar(id, agente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarAgente(@PathVariable Long id) {
        return agenteService.deletar(id);
    }
}

