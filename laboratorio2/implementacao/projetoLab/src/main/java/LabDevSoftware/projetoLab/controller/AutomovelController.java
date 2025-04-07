package LabDevSoftware.projetoLab.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import LabDevSoftware.projetoLab.entity.Automovel;
import LabDevSoftware.projetoLab.service.AutomovelService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/automoveis")
public class AutomovelController {

    @Autowired
    AutomovelService automovelService;

    @Operation(summary = "Listar todos os automóveis", description = "Endpoint GET que lista todos os automóveis")
    @GetMapping
    public List<Automovel> listarAutomoveis() {
        return automovelService.listarTodos();
    }
    
}
