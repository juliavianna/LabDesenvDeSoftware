public class Agente extends Usuario {
    private String nomeEmpresa;

    @OneToMany(mappedBy = "agente")
    private List<Pedido> pedidos;

    public Agente() {
        super();
    }
    
}
