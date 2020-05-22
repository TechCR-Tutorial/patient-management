package techcr.sample.patient.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import techcr.sample.patient.model.DailyPatient;
import techcr.sample.patient.model.Patient;
import techcr.sample.patient.model.Report;
import techcr.sample.patient.service.DailyPatientService;
import techcr.sample.patient.service.PatientManagementService;

@RestController
@RequestMapping("/patients")
@CrossOrigin("*")
public class DailyPatientRegisterController {

    @Autowired
    private PatientManagementService patientManagementService;
    @Autowired
    private DailyPatientService dailyPatientService;

    @GetMapping("/{phoneNo}/{firstName}/{lastName}")
    public ResponseEntity<List<Patient>> getPatient(@PathVariable String phoneNo,
                                    @PathVariable String firstName,
                                    @PathVariable String lastName) {

        return ResponseEntity.ok(patientManagementService.findPatient(phoneNo, firstName, lastName));
    }

    @PostMapping
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok(patientManagementService.addPatient(patient));
    }

    @GetMapping("/daily/{id}")
    public ResponseEntity registerToday(@PathVariable Long id) {
        dailyPatientService.registerForToday(id);
        return ResponseEntity.ok("Added");
    }

    @GetMapping("/daily/{id}/{date}")
    public ResponseEntity registerDay(@PathVariable Long id, @PathVariable Date date) {
        dailyPatientService.registerForDay(id, date);
        return ResponseEntity.ok("Added");
    }

    @PostMapping("/daily")
    public ResponseEntity addPatientAndRegisterForToday(@RequestBody Patient patient) {
        dailyPatientService.addPatientAndRegisterForToday(patient);
        return ResponseEntity.ok("Added");
    }

    @PostMapping("/reports")
    public ResponseEntity<List<DailyPatient>> reportForDate(@RequestBody Report report) {
        return ResponseEntity.ok(dailyPatientService.findForReport(report));
    }


}
