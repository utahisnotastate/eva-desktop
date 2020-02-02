import axios from "axios";


const API_URL = "http://127.0.0.1:8000/api";


function getPatientInsuranceInformation(patient) {
    const result = axios.get(`${API_URL}`)
}