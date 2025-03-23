package LabDevSoftware.projetoLab.entity;

import jakarta.persistence.Entity;

@Entity
public class Endereco {
    private String rua;
    private String bairro;
    private int numero;
    private String complemento;
    private String cidade;
    private String estado;

    public Endereco(String rua, String bairro, int numero, String complemento, String cidade, String estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
    }
}
