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
}


export function patient(state={initpatientdata}, action) {
    switch (action.type) {
        case 'LOAD_PATIENT':
            return action.patient
        default:
            return state;
    }
}

export function patients(state = [], action) {
    switch (action.type) {
        case 'LOAD_PATIENTS':
            return action.patients
        default:
            return state;
    }
}
