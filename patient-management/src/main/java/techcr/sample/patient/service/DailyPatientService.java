package techcr.sample.patient.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import techcr.sample.patient.model.DailyPatient;
import techcr.sample.patient.model.Patient;
import techcr.sample.patient.model.Report;
import techcr.sample.patient.repository.DailyPatientRepository;

@Service
public class DailyPatientService {

    @Autowired
    private DailyPatientRepository dailyPatientRepository;
    @Autowired
    private PatientManagementService patientManagementService;

    public void registerForToday(Long patientId) {
        registerForDay(patientId, new Date());
    }

    public void registerForDay(Long patientId, Date date) {
        DailyPatient dailyPatient = new DailyPatient();
        dailyPatient.setDate(date);
        Optional<Patient> patient = patientManagementService.findByID(patientId);
        patient.ifPresent(dailyPatient::setPatient);
        dailyPatientRepository.save(dailyPatient);
    }

    public void addPatientAndRegisterForToday(Patient patient) {
        Patient addedPatient = patientManagementService.addPatient(patient);
        DailyPatient dailyPatient = new DailyPatient();
        dailyPatient.setDate(new Date());
        dailyPatient.setPatient(addedPatient);
        dailyPatientRepository.save(dailyPatient);
    }

    public List<DailyPatient> findForReport(Report report) {
        return dailyPatientRepository.findForReport(report.getStartDate(), report.getEndDate());
    }

    public void deleteRegisterEntry(Long id) {
        dailyPatientRepository.deleteById(id);
    }
}
