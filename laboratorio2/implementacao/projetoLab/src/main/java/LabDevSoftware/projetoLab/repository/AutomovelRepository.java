package LabDevSoftware.projetoLab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import LabDevSoftware.projetoLab.entity.Automovel;

@Repository
public interface AutomovelRepository extends JpaRepository<Automovel, Long>{
    
}
