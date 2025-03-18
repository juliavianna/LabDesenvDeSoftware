import java.util.Random;

public abstract class Usuario {

    private int id;
    private String nome;
    private String email;
    private String senha;

    public Usuario(String nome, String email, String senha) {
        this.id = gerarIdAleatorio();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
        public int getId() {
            return id;
        }
    
        private int gerarIdAleatorio() {
            Random random = new Random();
            return random.nextInt(10000); // Gera um número aleatório entre 0 e 9999
        }
    
        public String getNome() {
            return nome;
        }
    
        public void setNome(String nome) {
            this.nome = nome;
        }
    
        public String getEmail() {
            return email;
        }
    
        public void setEmail(String email) {
            this.email = email;
        }
    
        public void setSenha(String senha) {
            this.senha = senha;
        }

        public String getSenha(){
            return senha;
        }

        public boolean realizarLogin(String email, String senha) {
            // Verifica se o email e a senha fornecidos correspondem aos atributos da classe
            if (this.email.equals(email) && this.senha.equals(senha)) {
                System.out.println("Login realizado com sucesso!");
                return true;
            } else {
                System.out.println("Email ou senha incorretos.");
                return false;
            }
        }
}
