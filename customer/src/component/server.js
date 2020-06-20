import axios from 'axios'

export const BASE_URL = "http://localhost:8080/patients"

class BackendService {
    searchPatients(patient) {

        var phoneNo = !patient.phoneNo ? "*" : patient.phoneNo
        var firstName = !patient.firstName ? "*" : patient.firstName
        var lastName = !patient.lastName ? "*" : patient.lastName
        var address = !patient.address ? "*" : patient.address

        var getURL = `${BASE_URL}/${phoneNo}/${firstName}/${lastName}/${address}`
        console.log(`Search URL ${getURL}`)
        return axios.get(getURL)
    }

    addPatientAndRegisterForToday(patient) {
        var url = `${BASE_URL}/daily`
        return axios.post(url, patient)
    }

    registerForToday(patientId) {
        var url = `${BASE_URL}/daily/${patientId}`
        return axios.get(url)
    }

    registerForDay(patientId, date) {
        var url = `${BASE_URL}/daily/${patientId}/${date}`
        return axios.get(url)
    }

    addPatient(patient) {
        var url = `${BASE_URL}`
        return axios.post(url, patient)
    }

    reports(report) {
        var url = `${BASE_URL}/reports`
        return axios.post(url, report)
    }

    deleteDayPatient(dayPatientId) {
        var url = `${BASE_URL}/reports/${dayPatientId}`
        return axios.delete(url)
    }
}

export default new BackendService();