public class Professor extends Usuario {

    
    private Disciplina[] disciplinas;

    public Professor(String nome, String email, String senha) {
        super(nome, email, senha);
        this.disciplinas = disciplinas;
    }
    
    public void consultarAlunos(Disciplina disciplina) {
        // Obtendo o array de alunos matriculados na disciplina
        Aluno[] alunosMatriculados = disciplina.getAlunos();  // Supondo que você tenha um método getAlunos() que retorna os alunos

        // Verificando se a disciplina tem alunos matriculados
        if (alunosMatriculados != null && alunosMatriculados.length > 0) {
            System.out.println("\nAlunos matriculados na disciplina " + disciplina.getNome() + ":");
            for (Aluno aluno : alunosMatriculados) {
                if (aluno != null) {
                    System.out.println(aluno.getNome());
                }
            }
        } else {
            System.out.println("\nNenhum aluno matriculado nesta disciplina.");
        }
    }

    public Disciplina[] getDisciplinas() {
        return disciplinas;
    }
}
