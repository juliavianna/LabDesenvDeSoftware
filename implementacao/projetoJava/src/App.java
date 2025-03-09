import java.util.Scanner;

public class App {
 public static void main(String[] args) throws Exception {
        // Criando objetos
        Aluno aluno1 = new Aluno(1, "João", "joao@email.com", "1234");
        Aluno aluno2 = new Aluno(2, "Maria", "maria@email.com", "5678");
        Professor professor = new Professor(1, "Prof. Silva", "professor@email.com", "prof123");
        Disciplina disciplina = new Disciplina("Matemática");

        // Criando scanner para ler entrada do usuário
        Scanner scanner = new Scanner(System.in);
        boolean loggedIn = false;
        boolean isAluno = false;
        Usuario usuarioLogado = null;

        // Tela de login
        while (!loggedIn) {
            System.out.println("Realize seu login abaixo :)");
            System.out.print("Digite seu email: ");
            String email = scanner.nextLine();
            System.out.print("Digite sua senha: ");
            String senha = scanner.nextLine();

            if (email.equals(aluno1.getEmail()) && senha.equals(aluno1.getSenha())) {
                usuarioLogado = aluno1;
                loggedIn = true;
                isAluno = true;
                System.out.println("Login bem-sucedido como " + aluno1.getNome());
            } else if (email.equals(aluno2.getEmail()) && senha.equals(aluno2.getSenha())) {
                usuarioLogado = aluno2;
                loggedIn = true;
                isAluno = true;
                System.out.println("Login bem-sucedido como " + aluno2.getNome());
            } else if (email.equals(professor.getEmail()) && senha.equals(professor.getSenha())) {
                usuarioLogado = professor;
                loggedIn = true;
                isAluno = false;
                System.out.println("Login bem-sucedido como Professor " + professor.getNome());
            } else {
                System.out.println("Email ou senha incorretos. Tente novamente.");
            }
        }

        // Menu do sistema
        boolean exit = false;
        while (!exit) {
            if (isAluno) {
                System.out.println("\nEscolha uma opção:");
                System.out.println("1. Matricular aluno");
                System.out.println("2. Cancelar matrícula");
                System.out.println("3. Verificar alunos na disciplina");
                System.out.println("4. Sair");
                int escolha = scanner.nextInt();
                scanner.nextLine();  // Consumir nova linha

                switch (escolha) {
                    case 1:
                        disciplina.matricularAluno((Aluno) usuarioLogado);
                        break;
                    case 2:
                        disciplina.cancelarMatricula((Aluno) usuarioLogado);
                        break;
                    case 3:
                        disciplina.listarAlunos();
                        break;
                    case 4:
                        exit = true;
                        break;
                    default:
                        System.out.println("Opção inválida.");
                }
            } else {
                System.out.println("\nEscolha uma opção (Professor):");
                System.out.println("1. Verificar alunos na disciplina");
                System.out.println("2. Sair");
                int escolha = scanner.nextInt();
                scanner.nextLine();  // Consumir nova linha

                switch (escolha) {
                    case 1:
                        professor.verificarAlunos(disciplina);
                        break;
                    case 2:
                        exit = true;
                        break;
                    default:
                        System.out.println("Opção inválida.");
                }
            }
        }

        System.out.println("Até logo!");
        scanner.close();
    }
}