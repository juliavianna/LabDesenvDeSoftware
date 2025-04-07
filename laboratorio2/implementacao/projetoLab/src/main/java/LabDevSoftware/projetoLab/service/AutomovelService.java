package LabDevSoftware.projetoLab.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import LabDevSoftware.projetoLab.entity.Automovel;
import LabDevSoftware.projetoLab.repository.AutomovelRepository;

@Service
public class AutomovelService  {

    @Autowired
    AutomovelRepository automovelRepository;
    
    public List<Automovel> listarTodos() {
        return automovelRepository.findAll();
    }
}
