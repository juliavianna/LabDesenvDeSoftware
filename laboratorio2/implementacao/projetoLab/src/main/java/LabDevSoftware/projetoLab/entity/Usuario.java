package LabDevSoftware.projetoLab.entity;
import jakarta.persistence.Entity;

@Entity
public abstract class Usuario {
    private Long id;
    private String nome;
    private Endereco endereco;
    private String senha;

    public Usuario(Long id, String nome, Endereco endereco, String senha) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}
