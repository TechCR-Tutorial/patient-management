package techcr.sample.patient.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import techcr.sample.patient.model.Patient;

@Repository
public interface PatientManagementRepository extends CrudRepository<Patient, Long> {

    @Query(
        value =   "select * "
                + "from PATIENT p "
                + "where p.PHONE_NO like %?1% and p.FIRST_NAME like %?2% and p.LAST_NAME like %?3% and p.ADDRESS like %?4%",
        nativeQuery = true)
    List<Patient> findByDetails(String phoneNo, String firstName, String lastName, String address);
}
