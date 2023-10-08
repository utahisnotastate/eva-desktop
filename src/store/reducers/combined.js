import {combineReducers} from "redux";



function appointments(state = [], action) {
    switch (action.type) {
        case 'LOAD_APPOINTMENTS':
            return action.appointments || []
        case 'ADD_APPOINTMENT':
            return [...state, action.appointment]
        case 'REMOVE_APPOINTMENT':
            return state.filter((appointment) => appointment.id !== action.id)
        default:
            return state
    }
}
function requestupdates(state = [], action) {
    switch(action.type) {
        case 'set_request_updates':
            return action.requestupdates;
        default:
            return state;
    }
}

function requests(state = [], action) {
    switch (action.type) {
        case 'LOAD_REQUESTS':
            return action.requests
        case 'ADD_REQUEST':
            return [...state, action.request]
        default:
            return state
    }
}
function patient(state = { id: '', details: {}, ssn: '' }, action) {
    switch (action.type) {
        case 'LOAD_PATIENT':
            return action.patient
        default:
            return state
    }
}
function patientToSchedule(state = null, action) {
    switch(action.type) {
        case 'set_patient_to_schedule':
            return action.patient;

        default:
            return state;
    }
}

function patientRequests(state = [], action) {
    switch(action.type) {
        case 'load_patient_requests':
            return action.patientrequests;
        default:
            return state;
    }
}

function clinicalqueue(state = [], action) {
    switch(action.type) {
        case 'check_in_patient':
            return action.newclinicalqueue;
        case 'move_to_exam_room':
            return action.newclinicalqueue;
        case 'move_to_waiting_room':
            return action.newclinicalqueue;
        case 'appointment_in_progress':
            return action.newclinicalqueue;
        case 'initial_load':
            return action.newclinicalqueue;
        default:
            return state;
    }
}

function patients(state = [], action) {
    switch (action.type) {
        case 'LOAD_PATIENTS':
            return action.patients
        case 'ADD_PATIENT':
            return [...state, action.patient]
        case 'REMOVE_PATIENT':
            return state.filter((patient) => patient.id !== action.id)
        default:
            return state
    }
}

export const allReducers = combineReducers({
    clinicalqueue,
    appointments,
    patientToSchedule,
    requests,
    patients,
    patientRequests,
    requestupdates,
    patient
});
