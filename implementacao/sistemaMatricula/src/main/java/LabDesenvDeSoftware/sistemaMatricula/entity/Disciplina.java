package LabDesenvDeSoftware.sistemaMatricula.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Table(name = "disciplina")
public class Disciplina {
    
    @Column(name = "nome")
    private int nome;

    @Column(name = "periodo")
    private int periodo;

    @Column(name = "vagas")
    private int vagas;

    @Column(name = "alunosMatriculados")
    private Aluno[] alunos;
    
}
