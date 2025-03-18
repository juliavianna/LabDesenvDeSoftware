
@Entity
public class Cliente extends Usuario {

    private Endereco endereço;
    private String profissao;
    private Empregador[] empregadores;
    private float[] rendimentos;
    private final int MAX_RENDIMENTOS = 3;

    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos;

    public Cliente() {
        super();
    }

    
    
}
