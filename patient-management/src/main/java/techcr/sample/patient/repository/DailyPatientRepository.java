package techcr.sample.patient.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import techcr.sample.patient.model.DailyPatient;
import techcr.sample.patient.model.Report;

public interface DailyPatientRepository extends CrudRepository<DailyPatient, Long> {

    @Query("select dp from DailyPatient dp where dp.date between ?1 and ?2")
    List<DailyPatient> findForReport(Date startDate, Date endDate);
}
