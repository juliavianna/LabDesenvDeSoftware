public class Secretaria extends Usuario {

    private Disciplina[] disciplinas;
    private Curso curso;


    public Secretaria(String nome, String email, String senha, Disciplina[] disciplinas, Curso curso) {
        super(nome, email, senha);
        this.disciplinas = disciplinas;
        this.curso = curso;
    }

    public void cadastrarDisciplina(Disciplina disciplina) {
        for(int i=0; i < disciplinas.length; i++){
            if(disciplinas[i] == null) {
                disciplinas[i] = disciplina;
            }
        }
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

    public Curso getCurso(){
        return curso;
    }
}
