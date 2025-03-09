public class Professor extends Usuario {
    
    private Disciplina[] disciplinas;
    
    public Aluno[] consultarAlunos(Disciplina disciplina){
        return disciplina.getAlunos();
    }

    public Disciplina[] getDisciplinas() {
        return disciplinas;
    }
}
