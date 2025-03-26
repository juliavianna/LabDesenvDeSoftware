package LabDevSoftware.projetoLab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import LabDevSoftware.projetoLab.entity.Agente;

@Repository
public interface AgenteRepository extends JpaRepository<Agente, Long> {
}
