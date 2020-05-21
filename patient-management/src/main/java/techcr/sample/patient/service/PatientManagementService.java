package techcr.sample.patient.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import techcr.sample.patient.model.DailyPatient;
import techcr.sample.patient.model.Patient;
import techcr.sample.patient.repository.PatientManagementRepository;
import techcr.sample.patient.util.Utility;

@Service
public class PatientManagementService {

    @Autowired
    private PatientManagementRepository patientManagementRepository;

    public List<Patient> findPatient(String phoneNo, String firstName, String lastName) {
        if (!Utility.isEmpty(phoneNo) && !phoneNo.startsWith("0")) {
            phoneNo = "0" + phoneNo;
        }
        return patientManagementRepository.findByDetails(Utility.nvlEmpty(phoneNo), Utility.formatForDB(firstName),
            Utility.formatForDB(lastName));
    }

    public Patient addPatient(Patient patient) {
        patient.format();
        return patientManagementRepository.save(patient);
    }

    public Optional<Patient> findByID(Long id) {
        return patientManagementRepository.findById(id);
    }
}
