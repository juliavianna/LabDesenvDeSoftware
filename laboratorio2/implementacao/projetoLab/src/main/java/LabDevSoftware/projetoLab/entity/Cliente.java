package LabDevSoftware.projetoLab.entity;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
public class Cliente extends Usuario {
    private final int MAX_RENDIMENTOS = 3;
    private int rg;
    private int cpf;
    private String profissao;
    private EntidadeEmpregadora[] empregadores;
    private float[] rendimentos;

    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos;

    public Cliente(Long id, String nome, Endereco endereco, String senha, int rg, int cpf, String profissao, EntidadeEmpregadora[] empregadores, float[] rendimentos) {
        super(id, nome, endereco, senha);
        this.rg = rg;
        this.cpf = cpf;
        this.profissao = profissao;
        this.empregadores = empregadores;
        this.rendimentos = rendimentos;
    }

    public int getRg() {
        return rg;
    }

    public int getCpf() {
        return cpf;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setRg(int rg) {
        this.rg = rg;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }
    
}
