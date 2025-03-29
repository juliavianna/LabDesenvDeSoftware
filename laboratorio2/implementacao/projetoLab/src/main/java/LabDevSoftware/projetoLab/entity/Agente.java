package LabDevSoftware.projetoLab.entity;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;

@Entity
public class Agente extends Usuario {

    @Column(name = "cnpj")
    private Long cnpj;

    @Enumerated(EnumType.STRING)
    TipoAgente tipo;

    @OneToMany(mappedBy = "agente")
    private List<Pedido> pedidos;

    // Construtor padrão obrigatório para o Hibernate
    public Agente() {
        super();
    }

    public Agente(Long id, String nome, Endereco endereco, String senha, Long cnpj) {
        super(id, nome, endereco, senha);
        this.cnpj = cnpj;
    }

    public Long getCnpj() {
        return cnpj;
    }

    public void setCnpj(Long cnpj) {
        this.cnpj = cnpj;
    }

    public void setTipo(TipoAgente tipo) {
        this.tipo = tipo;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
