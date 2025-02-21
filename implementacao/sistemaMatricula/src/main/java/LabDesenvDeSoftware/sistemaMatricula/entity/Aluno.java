package LabDesenvDeSoftware.sistemaMatricula.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Table(name = "aluno")
public class Aluno extends Usuario {
    @Column(name = "periodo")
    private int periodo;

    @Column(name = "disciplinas")
    private Disciplina[] disciplinas;
}