import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // Criando objetos
        Aluno aluno1 = new Aluno("João", "joao@email.com", "1234", 1);
        Aluno aluno2 = new Aluno("Maria", "maria@email.com", "5678", 4);
        Professor professor = new Professor("José Silva", "professor@email.com", "prof123");
        Aluno[] alunosPsicCores = new Aluno[60]; 
        alunosPsicCores[0] = aluno1;
        alunosPsicCores[1] = aluno2;   
        Aluno[] alunosCalcI = new Aluno[60];
        Aluno[] alunosFisica = new Aluno[60];
        Aluno[] alunosLitBr = new Aluno[60];
        
        // Criando disciplinas
        Disciplina disciplina1 = new Disciplina("Cálculo I", 1, true,alunosCalcI);
        Disciplina disciplina2 = new Disciplina("Psicologia das Cores", 7, false, alunosPsicCores);
        Disciplina disciplina3 = new Disciplina("Física", 1, true,alunosFisica);
        Disciplina disciplina4 = new Disciplina("Literatura Brasileira", 4, false,alunosLitBr);

        // Criando lista de disciplinas
        Disciplina[] disciplinas = {disciplina1, disciplina2, disciplina3, disciplina4};

        // Criando scanner para ler entrada do usuário
        Scanner scanner = new Scanner(System.in);
        boolean loggedIn = false;
        boolean isAluno = false;
        Aluno alunoLogado = null;
        Professor professorLogado = null;

        // Tela de login
        while (!loggedIn) {
            System.out.println("\n________________________________________________________________________________________________________________________");
            System.out.println("\nBem-vindo!!!!!");
            System.out.println("Vamos fazer login? :)");
            System.out.print("\nDigite seu email: ");
            String email = scanner.nextLine();
            System.out.print("\nDigite sua senha: ");
            String senha = scanner.nextLine();

            if (email.equals(aluno1.getEmail()) && senha.equals(aluno1.getSenha())) {
                alunoLogado = aluno1;
                loggedIn = true;
                isAluno = true;
                System.out.println("\nLogin bem-sucedido como " + aluno1.getNome() + ".");
            } else if (email.equals(aluno2.getEmail()) && senha.equals(aluno2.getSenha())) {
                alunoLogado = aluno2;
                loggedIn = true;
                isAluno = true;
                System.out.println("\nLogin bem-sucedido como " + aluno2.getNome() + ".");
            } else if (email.equals(professor.getEmail()) && senha.equals(professor.getSenha())) {
                professorLogado = professor;
                loggedIn = true;
                isAluno = false;
                System.out.println("\nLogin bem-sucedido como Professor " + professor.getNome() + ".");
            } else {
                System.out.println("Email ou senha incorretos. Tente novamente.");
            }
        }

        // Menu do sistema
        boolean exit = false;
        while (!exit) {
            if (isAluno) {
                // Menu de opções para o aluno
                System.out.println("\nEscolha uma opção:");
                System.out.println("1. Matricular aluno em uma disciplina");
                System.out.println("2. Cancelar matrícula em uma disciplina");
                System.out.println("3. Ver disciplinas matriculadas");
                System.out.println("4. Sair");
                int escolha = scanner.nextInt();
                scanner.nextLine();  // Consumir nova linha

                switch (escolha) {
                    case 1:
                        // Exibir disciplinas para matrícula
                        System.out.println("\nEscolha uma disciplina para se matricular:");
                        for (int i = 0; i < disciplinas.length; i++) {
                            System.out.println((i + 1) + ". " + disciplinas[i].getNome());
                        }
                        int disciplinaEscolhida = scanner.nextInt() - 1;
                        scanner.nextLine();  // Consumir nova linha
                        if (disciplinaEscolhida >= 0 && disciplinaEscolhida < disciplinas.length) {
                            Disciplina disciplinaSelecionada = disciplinas[disciplinaEscolhida];
                            disciplinaSelecionada.matricularAluno((Aluno) alunoLogado);
                        } else {
                            System.out.println("Opção inválida.");
                        }
                        break;
                    case 2:
                        // Exibir disciplinas para cancelamento
                        System.out.println("\nEscolha uma disciplina para cancelar matrícula:");
                        for (int i = 0; i < disciplinas.length; i++) {
                            System.out.println((i + 1) + ". " + disciplinas[i].getNome());
                        }
                        int disciplinaCancelada = scanner.nextInt() - 1;
                        scanner.nextLine();  // Consumir nova linha
                        if (disciplinaCancelada >= 0 && disciplinaCancelada < disciplinas.length) {
                            Disciplina disciplinaSelecionada = disciplinas[disciplinaCancelada];
                            disciplinaSelecionada.cancelarMatricula((Aluno) alunoLogado);
                        } else {
                            System.out.println("Opção inválida.");
                        }
                        break;
                    case 3:
                        if (alunoLogado.getDisciplinasObrigatorias() != null) {
                            System.out.println("Disciplinas obrigatórias:" + alunoLogado.getDisciplinasObrigatorias());
                        } else {
                            System.out.println("Sem disciplinas obrigatórias matriculadas.");
                        }
                        if (alunoLogado.getDisciplinasOptativas() != null) {
                            System.out.println("Disciplinas optativas:" + alunoLogado.getDisciplinasOptativas());
                        } else {
                            System.out.println("Sem disciplinas optativas matriculadas.");
                        }
                    case 4:
                        exit = true;
                        break;
                    default:
                        System.out.println("Opção inválida.");
                }
            } else {
                // Menu de opções para o professor
                System.out.println("\nEscolha uma opção (Professor):");
                System.out.println("1. Verificar alunos em uma disciplina");
                System.out.println("2. Sair");
                int escolha = scanner.nextInt();
                scanner.nextLine();  // Consumir nova linha

                switch (escolha) {
                    case 1:
                        // Exibir disciplinas para o professor escolher
                        System.out.println("\nEscolha uma disciplina para verificar os alunos:");
                        for (int i = 0; i < disciplinas.length; i++) {
                            System.out.println((i + 1) + ". " + disciplinas[i].getNome());
                        }
                        int disciplinaEscolhida = scanner.nextInt() - 1;
                        scanner.nextLine();
                            Disciplina disciplinaSelecionada = disciplinas[disciplinaEscolhida];
                            professor.consultarAlunos(disciplinaSelecionada);
                        break;
                    case 2:
                        exit = true;
                        break;
                    default:
                        System.out.println("Opção inválida.");
                }
            }
        }

        System.out.println("\nAté logo!");
        scanner.close();
    }
}