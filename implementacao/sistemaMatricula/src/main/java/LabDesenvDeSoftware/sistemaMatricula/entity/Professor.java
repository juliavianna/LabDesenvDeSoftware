package LabDesenvDeSoftware.sistemaMatricula.entity;

import jakarta.persistence.Column;

public class Professor {
    
    @Column(name = "disciplinas")
    private Disciplina[] disciplinas;
    
    public Aluno[] consultarAlunos(Disciplina disciplina){
        Aluno[] arrayExemplo = new Aluno[2];
        return arrayExemplo;
    }
}
