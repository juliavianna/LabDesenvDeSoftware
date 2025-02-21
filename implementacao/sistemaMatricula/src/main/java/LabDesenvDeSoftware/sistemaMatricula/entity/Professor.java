package LabDesenvDeSoftware.sistemaMatricula.entity;

import jakarta.persistence.Column;

public class Professor {
    @Column(name = "disciplinas")
    private Disciplina[] disciplinas;
    
}
