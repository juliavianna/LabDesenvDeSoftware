public class Disciplina {

    final int MIN_ALUNOS = 3;
    final int MAX_ALUNOS = 60;
    private String nome;
    private int periodo;
    private boolean isObrigatoria;
    private Aluno[] alunos;
    private boolean disciplinaAtiva;

    public Disciplina(String nome, int periodo, boolean isObrigatoria, Aluno[] alunos) {
        this.nome = nome;
        this.periodo = periodo;
        this.isObrigatoria = isObrigatoria;
        this.alunos = alunos;
    }

    public Aluno[] getAlunos() {
        return alunos;
    }

    public String getNome() {
        return nome;
    }
    
    public boolean verificarLimiteVagas(){
        return false;
    }

    public void matricularAluno(Aluno aluno){
        int qtdAlunos = contarAlunosMatriculados();
        if (qtdAlunos < MAX_ALUNOS) {    
            // Se a disciplina tiver espaço, matricula o aluno
            for (int i = 0; i < alunos.length; i++) {
                if (alunos[i] == null) {
                    alunos[i] = aluno;               }
            }
        } else {
            System.out.println("\nEsta disciplina já está cheia.");
        }
    }

    public void cancelarMatricula(Aluno aluno) {
        for (int i = 0; i < alunos.length; i++) {
            if (alunos[i] != null && alunos[i].equals(aluno)) {
                alunos[i] = null;
                System.out.println("\n" + aluno.getNome() + " teve sua matrícula cancelada em " + nome);
                return;
            }
        }
        System.out.println("\n" + aluno.getNome() + " não está matriculado em " + nome);
    }

    public boolean verificarStatus() {
        int qtdAlunos = alunos.length;
        if (qtdAlunos < MIN_ALUNOS) {
            disciplinaAtiva = false;
        }
        else {
            disciplinaAtiva = true;
        }
        return disciplinaAtiva;
    }

    public boolean isObrigatoria() {
        return isObrigatoria;
    }

    public int contarAlunosMatriculados(){
        int qtdAlunos = 0;
        for (Aluno a : alunos) {
            if (a != null) {
                qtdAlunos++;
            }
        }
        return qtdAlunos;
    }

    public int getPeriodo() {
        return periodo;
    }
    
}
