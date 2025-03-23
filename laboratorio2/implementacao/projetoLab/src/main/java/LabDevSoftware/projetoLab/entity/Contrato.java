package LabDevSoftware.projetoLab.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contrato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Pedido pedido;
    private String tipoContrato;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private double valorMensal;
    private boolean ativo;
 
    public Contrato(Long id, Pedido pedido, String tipoContrato, LocalDate dataInicio, LocalDate dataFim, double valorMensal, boolean ativo) {
        this.id = id;
        this.pedido = pedido;
        this.tipoContrato = tipoContrato;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.valorMensal = valorMensal;
        this.dataInicio = dataInicio;
        this.ativo = ativo;
    }
}
