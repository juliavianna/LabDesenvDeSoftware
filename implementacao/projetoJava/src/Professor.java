public class Professor extends Usuario {

    
    private Disciplina[] disciplinas;

    public Professor(String nome, String email, String senha) {
        super(nome, email, senha);
        this.disciplinas = disciplinas;
    }
    
    public Aluno[] consultarAlunos(Disciplina disciplina){
        return disciplina.getAlunos();
    }

    public Disciplina[] getDisciplinas() {
        return disciplinas;
    }
}
