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
}
