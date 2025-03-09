import java.util.Random;

public abstract class Usuario {

    private int id;
    private String nome;
    private String email;
    private String senha;
    
        public int getId() {
            return id;
        }
    
        public void setId() {
            Random random = new Random();
            this.id = random.nextInt(10000);
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
