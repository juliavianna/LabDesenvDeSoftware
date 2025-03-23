package LabDevSoftware.projetoLab.entity;

import java.util.List;

import jakarta.persistence.OneToMany;

public class Agente extends Usuario {
    private String nomeEmpresa;

    @OneToMany(mappedBy = "agente")
    private List<Pedido> pedidos;

    public Agente(int RG, int CPF, String nome) {
        super(RG, CPF, nome);
    }
    
}
