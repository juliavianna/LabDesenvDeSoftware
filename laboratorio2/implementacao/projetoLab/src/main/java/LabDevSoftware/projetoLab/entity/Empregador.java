package LabDevSoftware.projetoLab.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Empregador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeEmpresa;
    private String enderecoEmpresa;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    public Empregador(Long id, String nomeEmpresa, String enderecoEmpresa) {
        this.id = id;
        this.nomeEmpresa = nomeEmpresa;
        this.enderecoEmpresa = enderecoEmpresa;
    }
}
