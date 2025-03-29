package LabDevSoftware.projetoLab.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Cliente extends Usuario {
    private final int MAX_RENDIMENTOS = 3;

    @Column(name = "rg")
    private Long rg; // Alterado para Long (ou String, dependendo do caso)

    @Column(name = "cpf")
    private Long cpf; // Alterado para Long (ou String, dependendo do caso)

    @Column(name = "profissao")
    private String profissao;

    @OneToMany(mappedBy = "cliente")  // Removido @JoinColumn aqui
    private List<EntidadeEmpregadora> empregadores; // Alterado para List<EntidadeEmpregadora>

    @ElementCollection
    @CollectionTable(name = "rendimentos", joinColumns = @JoinColumn(name = "cliente_id"))
    @Column(name = "rendimentos")
    private List<Float> rendimentos; // Alterado para List<Float>

    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos;

    public Cliente(){
        super();
    }

    public Cliente(Long id, String nome, Endereco endereco, String senha, Long rg, Long cpf, String profissao, List<EntidadeEmpregadora> empregadores, List<Float> rendimentos) {
        super(id, nome, endereco, senha); // Chama o construtor da classe pai
        this.rg = rg;
        this.cpf = cpf;
        this.profissao = profissao;
        this.empregadores = empregadores;
        this.rendimentos = rendimentos;
    }

    // Getters e Setters
    public Long getRg() {
        return rg;
    }

    public void setRg(Long rg) {
        this.rg = rg;
    }

    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public List<EntidadeEmpregadora> getEmpregadores() {
        return empregadores;
    }

    public void setEmpregadores(List<EntidadeEmpregadora> empregadores) {
        this.empregadores = empregadores;
    }

    public List<Float> getRendimentos() {
        return rendimentos;
    }

    public void setRendimentos(List<Float> rendimentos) {
        this.rendimentos = rendimentos;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
