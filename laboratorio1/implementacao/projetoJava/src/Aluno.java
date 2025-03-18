public class Aluno extends Usuario {

    final int MAX_OBRIGATORIAS = 4;
    final int MAX_OPTATIVAS = 2;
    private int periodo;
    private Disciplina[] disciplinasObrigatorias;
    private Disciplina[] disciplinasOptativas;

    public Aluno(String nome, String email, String senha, int periodo) {
        super(nome, email, senha);
        this.periodo = periodo;
        this.disciplinasObrigatorias = new Disciplina[MAX_OBRIGATORIAS];
        this.disciplinasOptativas = new Disciplina[MAX_OPTATIVAS];
    }

    public void matricular(Disciplina disciplina) {
        if (disciplina.isObrigatoria()) {
            // Verifica se há espaço nas disciplinas obrigatórias
            for (int i = 0; i < disciplinasObrigatorias.length; i++) {
                if (disciplinasObrigatorias[i] == null) {
                    disciplinasObrigatorias[i] = disciplina;
                    disciplina.matricularAluno(this); // Matricula o aluno na disciplina
                    System.out.println("\nMatrícula em disciplina obrigatória realizada com sucesso!");
                    return;
                }
            }
            System.out.println("\nVocê já atingiu o limite de disciplinas obrigatórias.");
        } else {
            // Verifica se há espaço nas disciplinas optativas
            for (int i = 0; i < disciplinasOptativas.length; i++) {
                if (disciplinasOptativas[i] == null) {
                    disciplinasOptativas[i] = disciplina;
                    disciplina.matricularAluno(this); // Matricula o aluno na disciplina
                    System.out.println("\nMatrícula em disciplina optativa realizada com sucesso!");
                    return;
                }
            }
            System.out.println("\nVocê já atingiu o limite de disciplinas optativas.");
        }
    }

    // Método para cancelar a matrícula do aluno em uma disciplina
    public void cancelarMatricula(Disciplina disciplina) {
        // Verifica se o aluno está matriculado na disciplina obrigatória
        if (disciplina.isObrigatoria()) {
            for (int i = 0; i < disciplinasObrigatorias.length; i++) {
                if (disciplinasObrigatorias[i] != null && disciplinasObrigatorias[i].equals(disciplina)) {
                    disciplinasObrigatorias[i] = null;
                    disciplina.cancelarMatricula(this); // Cancela a matrícula na disciplina
                    System.out.println("\nMatrícula em disciplina obrigatória cancelada com sucesso.");
                    return;
                }
            }
            System.out.println("\nVocê não está matriculado nessa disciplina obrigatória.");
        } else {
            // Verifica se o aluno está matriculado na disciplina optativa
            for (int i = 0; i < disciplinasOptativas.length; i++) {
                if (disciplinasOptativas[i] != null && disciplinasOptativas[i].equals(disciplina)) {
                    disciplinasOptativas[i] = null;
                    disciplina.cancelarMatricula(this); // Cancela a matrícula na disciplina
                    System.out.println("\nMatrícula em disciplina optativa cancelada com sucesso.");
                    return;
                }
            }
            System.out.println("\nVocê não está matriculado nessa disciplina optativa.");
        }
    }

    public int getPeriodo() {
        return periodo;
    }

    public String getDisciplinasObrigatorias() {
        StringBuilder lista = new StringBuilder();
        for (Disciplina d : disciplinasObrigatorias) {
            if (d != null) {
                lista.append(d.getNome()).append(", ");
            }
        }
        return lista.length() > 0 ? lista.substring(0, lista.length() - 2) : "Nenhuma";
    }

    public String getDisciplinasOptativas() {
        StringBuilder lista = new StringBuilder();
        for (Disciplina d : disciplinasOptativas) {
            if (d != null) {
                lista.append(d.getNome()).append(", ");
            }
        }
        return lista.length() > 0 ? lista.substring(0, lista.length() - 2) : "Nenhuma";
    }
}
