package techcr.sample.patient.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import techcr.sample.patient.model.Patient;

@Repository
public interface PatientManagementRepository extends CrudRepository<Patient, Long> {

    @Query("select p from Patient p where p.phoneNo like ?1% or p.firstName like %?2% or p.lastName like %?3%")
    List<Patient> findByDetails(String phoneNo, String firstName, String lastName);
}
