public class Aluno extends Usuario {
    
    final int MAXIMO_OPTATIVAS = 2;
    final int MAXIMO_OBRIGATORIAS = 6;
    private int matricula;
    private int periodo;
    private Disciplina[] disciplinasOptativas;
    private Disciplina[] disciplinasObrigatorias;

    public void matricular(Disciplina disciplina){ 
    }

    public void cancelarMatricula(Disciplina disciplina){ 
    }

    public int getPeriodo(){
        return periodo;
    }
}
