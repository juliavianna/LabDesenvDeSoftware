public class Aluno extends Usuario {
    
    final int MAX_OBRIGATORIAS = 4;
    final int MAX_OPTATIVAS = 2;
    private int periodo;
    private Disciplina[] disciplinasObrigatorias;
    private Disciplina[] disciplinasOptativas;

    public Aluno(String nome, String email, String senha, int periodo) {
        super(nome, email, senha);
        this.periodo = periodo;
        this.disciplinasObrigatorias = disciplinasObrigatorias;
        this.disciplinasOptativas = disciplinasOptativas;
    }

    public void matricular(Disciplina disciplina){ 
    }

    public void cancelarMatricula(Disciplina disciplina){ 
    }

    public int getPeriodo(){
        return periodo;
    }
}
