public class Aluno extends Usuario {
    
    final int MAX_OBRIGATORIAS = 4;
    final int MAX_OPTATIVAS = 2;
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
