package jp.glozen.spring_crud_app.services;

import jp.glozen.spring_crud_app.model.Employer;
import jp.glozen.spring_crud_app.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository employerRepository;

    public Employer addEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public List<Employer> addAllEmployers(List<Employer> employers) {
        return  employerRepository.saveAll(employers);
    }

    public Employer getEmployerByID(int id) {
        return employerRepository.findById(id).orElse(null);
    }

    public Employer getEmployerByName(String name) {
        return  employerRepository.findByName(name);
    }

    public Employer updateEmployer(Employer employer) {
        Employer existingEMP = employerRepository.findById(employer.getId()).orElse(null);
        System.out.println(employer);
        if(existingEMP == null) {
            System.out.println("Emp not found");
            return  employerRepository.save(employer);
        }else  {
            existingEMP.setName(employer.getName());
            existingEMP.setEmail(employer.getEmail());
            existingEMP.setStartDate(employer.getStartDate());
            existingEMP.setEndDate(employer.getEndDate());
            existingEMP.setCompany(employer.getCompany());
            existingEMP.setUrl(employer.getUrl());
            existingEMP.setPhone(employer.getPhone());
            existingEMP.setDescription(employer.getDescription());
            existingEMP.setSalary(employer.getSalary());
            employerRepository.save(existingEMP);
        }
        return employer;
    }

    public boolean deleteEmployerByID(int id) {
        Employer existingEMP = employerRepository.getById(id);
        if(existingEMP != null) {
            employerRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }
}