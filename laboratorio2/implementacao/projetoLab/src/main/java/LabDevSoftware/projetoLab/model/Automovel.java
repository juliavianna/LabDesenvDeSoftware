@Entity
public class Automovel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matricula;
    private int ano;
    private String marca;
    private String modelo;
    private String placa;

    @ManyToOne
    @JoinColumn(name = "proprietario_id")
    private Usuario proprietario;    
}
