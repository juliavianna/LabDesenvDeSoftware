public class Secretaria extends Usuario {

    private Disciplina[] disciplinas;
    private Curso curso;


    public Secretaria(String nome, String email, String senha, Disciplina[] disciplinas) {
        super(nome, email, senha);
        this.disciplinas = disciplinas;
        this.curso = curso;
    }

    public void cadastrarDisciplina(Disciplina disciplina) {
        System.out.println("Disciplina " + disciplina.getNome() + " cadastrada com sucesso!");
    }

    public void atualizarAluno(Aluno aluno) {
        System.out.println("Aluno com matrícula " + aluno.getId() + " atualizado com sucesso!");
    }

    public void atualizarMatricula(Disciplina disciplina) {
        System.out.println("Matrícula " + disciplina.getNome() + " atualizada com sucesso!");
    }

    public void atualizarProfessor(Professor professor) {
        System.out.println("Professor com ID " + professor.getId() + " atualizado com sucesso!");
    }
}
