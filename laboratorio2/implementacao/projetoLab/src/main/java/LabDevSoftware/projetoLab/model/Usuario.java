@Entity
public class Usuario {
    private int RG;
    private int CPF;
    private String nome;

    public Usuario(int RG, int CPF, String nome) {
        this.RG = RG;
        this.CPF = CPF;
        this.nome = nome;
    }
    
}
