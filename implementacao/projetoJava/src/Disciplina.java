public class Disciplina {

    final int MIN_ALUNOS = 3;
    final int MAX_ALUNOS = 60;
    private int nome;
    private int periodo;
    private Aluno[] alunos;
    private boolean disciplinaAtiva;

    public Aluno[] getAlunos() {
        return alunos;
    }
    
    public boolean verificarLimiteVagas(){
        return false;
    }

    public void matricularAluno(Aluno aluno){
        int qtdAlunos = alunos.length;
        if (qtdAlunos < MAX_ALUNOS) {
            // Verifica se o aluno já está matriculado (se necessário)
            for (Aluno a : alunos) {
                if (a != null && a.equals(aluno)) {
                    System.out.println("O aluno já está matriculado nesta disciplina.");
                    return;
                }
            }

            // Se a disciplina tiver espaço, matricula o aluno
            for (int i = 0; i < alunos.length; i++) {
                if (alunos[i] == null) {
                    alunos[i] = aluno; // Matrícula o aluno no índice vazio
                    System.out.println("Aluno matriculado com sucesso!");
                    return;
                }
                
            }
        } else {
            System.out.println("Esta disciplina já está cheia.");
        }
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

    
}
