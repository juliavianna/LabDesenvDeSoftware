package LabDesenvDeSoftware.sistemaMatricula.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Table(name = "aluno")
public class Aluno extends Usuario {

    final int MAXIMO_OPTATIVAS = 2;

    final int MAXIMO_OBRIGATORIAS = 6;

    @Column(name = "matricula")
    private int matricula;

    @Column(name = "periodo")
    private int periodo;

    @Column(name = "disciplinasOptativas")
    private Disciplina[] disciplinasOptativas;

    @Column(name = "disciplinasObrigatorias")
    private Disciplina[] disciplinasObrigatorias;

    public void matricular(Disciplina disciplina){ 
    }

    public void cancelarMatricula(Disciplina disciplina){ 
    }

    public int getPeriodo(){
        return periodo;
    }
}