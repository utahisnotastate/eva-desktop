import {combineReducers} from "redux";
import {patientdiagnoses, patientmedications, drugallergies, hasinsurance, foodallergies, latexallergy, petallergies, pollenallergy, surgicalhistory, addmedicationformicd10result, addMedicationFormMedication, primaryinsurance, secondaryinsurance} from "./patient/patient.reducers";
import {createmedicalchartformschema, createfamilymedicalhistoryformschema} from "./formscenter/formscenter.reducers";
import {medicalappointmentformtitle as title, medicalappointmentformtype as type, medicalappointmentformrequiredfields as required, medicalappointmentformvitals as vitals, medicalappointmentformcomplaints as complaints} from "./formscenter/MedicalAppointmentForm/medicalappointmentform.reducers";


function patientAppointmentHistory(state=[], action) {
    switch(action.type) {
        case 'initial_load_patient_history':
            return action.appointmenthistory;
        default:
            return state;

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
function vitalsformschema(state={
    type: "object",
    title: "Vital Fields",
    properties: {
        "blood_pressure": {"type": "string", "title": "Blood Pressure"}
    }
}, action) {
    switch (action.type) {
        case 'add_new_vitals_property':
            return {...state, properties: {...state.properties, ...action.newproperty}}
        default:
            return state;


    }
}
function vitalsformuischema(state={
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}

function assessmentformschema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function assessmentformuischema(state = {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}
function patientcomplaintsformschema(state={
    "type": "object",
    "title": "Patient Complaints Form Fields",
        "properties": {
            "icd10code": {"type": "string", "title": "ICD 10 Code"},
            "icd10description": {"type": "string", "title": "ICD 10 Description"},
            "onset": {"type": "string", "title": "Onset"},
            "progression": {"type": "string", "title": "Progression"},
            "caused_by": {"type": "string", "title": "Caused By"},
        }
}, action) {
    switch (action.type) {
        case 'add_new_complaints_property':
            return {...state, properties: {...state.properties, ...action.newproperty}}
        default:
            return state;


    }
}
function patientcomplaintsformuischema(state={
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;


    }
}
export function reviewofsystemsformschema(state = {
    "type": "object",
    "title": "",
    "properties": {
        "no_allergies": {
            "type": "boolean",
            "title": "No Allergies",
            "default": true,
        },
        "hiv": {
            "type": "boolean",
            "title": "HIV",
            "default": false,
        },

    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
export function reviewofsystemsformuischema(state = {
    "ui:options": {
        label: false
    }
}, action) {
    switch (action.type) {
        default:
            return state;

    }
}
const patientallergies = combineReducers({
    drugallergies,
    foodallergies,
    latexallergy,
    petallergies,
    pollenallergy,

});
const vitalsform = combineReducers({
    vitalsformschema,
    vitalsformuischema


});
const patientcomplaintsform = combineReducers({
    patientcomplaintsformschema,
    patientcomplaintsformuischema


});
const patient = combineReducers({
    patientdiagnoses,
    patientmedications,
    patientallergies,
    surgicalhistory,
    hasinsurance,
    primaryinsurance,
    secondaryinsurance,
    addmedicationformicd10result,
    addMedicationFormMedication,
});
const properties = combineReducers({
    vitals,
    complaints,
})
const medicalappointmentformschema = combineReducers({
    title,
    type,
    required,
    properties,
});

export const allReducers = combineReducers({
    clinicalqueue,
    patientToSchedule,
    patientAppointmentHistory,
    patientRequests,
    requestupdates,
    patient,
    vitalsform,
    patientcomplaintsform,
    medicalappointmentformschema,
});
