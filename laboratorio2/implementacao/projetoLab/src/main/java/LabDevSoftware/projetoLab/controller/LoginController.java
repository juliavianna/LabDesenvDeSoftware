package LabDevSoftware.projetoLab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import LabDevSoftware.projetoLab.service.UsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.HashMap;
import java.util.Map;
import LabDevSoftware.projetoLab.entity.Agente;
import LabDevSoftware.projetoLab.entity.Cliente;
import io.swagger.v3.oas.annotations.Operation;
import LabDevSoftware.projetoLab.service.AgenteService;
import LabDevSoftware.projetoLab.service.ClienteService;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AgenteService agenteService;

    @Autowired
    private ClienteService clienteService;

    @Operation(summary = "Fazer Login", description = "Endpoint POST que faz Login no sistema")
    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Buscar todos os agentes
            for (Agente agente : agenteService.listarTodos()) {
                if (agente.getEmail() != null && agente.getEmail().equals(loginRequest.getEmail())) {
                    if (agente.getSenha().equals(loginRequest.getSenha())) {
                        Map<String, Object> response = new HashMap<>();
                        response.put("message", "Login bem-sucedido!");
                        response.put("tipo", "AGENTE");
                        response.put("id", agente.getId());
                        response.put("nome", agente.getNome());
                        response.put("email", agente.getEmail());
                        return ResponseEntity.ok().body(response);
                    } else {
                        Map<String, String> errorResponse = new HashMap<>();
                        errorResponse.put("message", "Senha incorreta");
                        return ResponseEntity.badRequest().body(errorResponse);
                    }
                }
            }

            // Buscar todos os clientes
            for (Cliente cliente : clienteService.listarTodos()) {
                if (cliente.getEmail() != null && cliente.getEmail().equals(loginRequest.getEmail())) {
                    if (cliente.getSenha().equals(loginRequest.getSenha())) {
                        Map<String, Object> response = new HashMap<>();
                        response.put("message", "Login successful");
                        response.put("tipo", "CLIENTE");
                        response.put("id", cliente.getId());
                        response.put("nome", cliente.getNome());
                        response.put("email", cliente.getEmail());
                        return ResponseEntity.ok().body(response);
                    } else {
                        Map<String, String> errorResponse = new HashMap<>();
                        errorResponse.put("message", "Senha incorreta");
                        return ResponseEntity.badRequest().body(errorResponse);
                    }
                }
            }

            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Email não encontrado");
            return ResponseEntity.badRequest().body(errorResponse);

        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Erro interno do servidor");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
}

class LoginRequest {
    private String email;
    private String senha;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}