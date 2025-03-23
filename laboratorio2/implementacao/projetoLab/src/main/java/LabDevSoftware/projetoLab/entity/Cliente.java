package LabDevSoftware.projetoLab.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
public class Cliente extends Usuario {

    private String profissao;
    private Empregador[] empregadores;
    private float[] rendimentos;
    private final int MAX_RENDIMENTOS = 3;

    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos;

    public Cliente(int RG, int CPF, String nome) {
        super(RG, CPF, nome);
    }

    
    
}
