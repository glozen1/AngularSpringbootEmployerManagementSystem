package jp.glozen.spring_crud_app.controller;

import jp.glozen.spring_crud_app.model.Employer;
import jp.glozen.spring_crud_app.services.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/emp")
public class EmployerController {

    @Autowired
    private EmployerService employerService;

    // Add new employer
    @PostMapping("/addEmployer")
    public Employer addEmployer(@RequestBody Employer employer) {
        return employerService.addEmployer(employer);
    }

    // Add more than 1 employer
    @PostMapping("/addEmployers")
    public List<Employer> addAllEmployers(@RequestBody List<Employer> employers) {
        return employerService.addAllEmployers(employers);
    }

    // Get employer by Id
    @GetMapping("/getEmployerByID/{id}")
    public Employer getEmployerById(@PathVariable int id) {
        return employerService.getEmployerByID(id);
    }

    // Get employer by name
    @GetMapping("/getEmployerByName/{name}")
    public  Employer getEmployerByName(@PathVariable String name) {
        return  employerService.getEmployerByName(name);
    }

    // Update employer
    @PutMapping("/updateEmployer")
    public Employer updateEmployer(@RequestBody Employer employer) {
        return employerService.updateEmployer(employer);
    }

    // Delete employer
    @DeleteMapping("/deleteEmployerById/{id}")
    public boolean deleteEmployerByID(@PathVariable int id) {
        return employerService.deleteEmployerByID(id);
    }

    // Get all employer
    @GetMapping("/getAll")
    public List<Employer> getAllEmployer() {
        return employerService.getAllEmployers();
    }
}
