package jp.glozen.spring_crud_app.repository;


import jp.glozen.spring_crud_app.model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer,Integer> {
    Employer getByName(String name);

    Employer findByName(String name);
}
