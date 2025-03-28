package LabDevSoftware.projetoLab.entity;

import java.util.List;
import jakarta.persistence.OneToMany;

public class Agente extends Usuario {
    private int cnpj;
    TipoAgente tipo;

    @OneToMany(mappedBy = "agente")
    private List<Pedido> pedidos;

    public Agente(Long id, String nome, Endereco endereco, String senha, int cnpj) {
        super(id, nome, endereco, senha);
        this.cnpj = cnpj;
    }

    public int getCnpj() {
        return cnpj;
    }

    public void setCnpj(int cnpj) {
        this.cnpj = cnpj;
    }

    public void setTipo(TipoAgente tipo) {
        this.tipo = tipo;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
