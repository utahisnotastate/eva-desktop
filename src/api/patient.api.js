import axios from 'axios'
import API_URL from './api_url'

/*
This is what the patient object looks like. Make sure
const initpatientdata = {
    "id": "",
    "ssn": "",
    "details": {
        "familyhistory": [],
        "socialhistory": [],
        "medicalhistory": [],
        "surgicalhistory": [],
        "allergies": [],
        "requests": [],
        "diagnoses": [],
        "insurances": [],
        "medications": [],
        "appointments": [],
        "first_name": "",
        "last_name": "",
        "middle_name": "",
        "preffered_name": "",
        "address_one": "",
        "address_two": "",
        "city": "",
        "state": "",
        "zip": "",
        "date_of_birth": "",
        "contact_methods": []
    },
}*/






export const getFullPatientInformation = async (patientId) => {
    const basic_information = await axios.get(`${API_URL}/patients/${patientId}/`)
    console.log(basic_information.data)
    return basic_information.data
}

export const createNewPatient = async ({first_name, middle_name, preferred_name, last_name, ssn}) => {
    //const response = await axios.post(`${API_URL}/patients/`, patient)
    console.log({first_name, middle_name, preferred_name, last_name, ssn})
    //return response
}

export const updatePatient = async (patient) => {
    const response = await axios.put(`${API_URL}/patients/${patient.id}/`, patient)
    return response
}
