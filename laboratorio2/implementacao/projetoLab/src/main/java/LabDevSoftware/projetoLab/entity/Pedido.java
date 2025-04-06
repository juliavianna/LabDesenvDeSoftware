package LabDevSoftware.projetoLab.entity;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedido")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "dataPedido")
    private LocalDate dataPedido;

    @Column(name = "status")
    private String status;
    
    @ManyToOne
    @JoinColumn(name = "cliente_id")  // Renomeado para uma chave estrangeira mais específica
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "agente_id")  // Renomeado para uma chave estrangeira mais específica
    private Agente agente;

    @OneToOne(optional = true)
    @JoinColumn(name = "contrato_id", nullable = true) // Renomeado para uma chave estrangeira mais específica
    private Contrato contrato;

    @OneToOne
    @JoinColumn(name = "automovel_id")  // Renomeado para uma chave estrangeira mais específica
    private Automovel automovel;

     
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataPedido() {
        return dataPedido;
    }

    public void setDataPedido(LocalDate dataPedido) {
        this.dataPedido = dataPedido;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Agente getAgente() {
        return agente;
    }

    public void setAgente(Agente agente) {
        this.agente = agente;
    }

    public Contrato getContrato() {
        return contrato;
    }

    public void setContrato(Contrato contrato) {
        this.contrato = contrato;
    }

    public Automovel getAutomovel() {
        return automovel;
    }

    public void setAutomovel(Automovel automovel) {
        this.automovel = automovel;
    }
}
