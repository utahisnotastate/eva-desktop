import {combineReducers} from "redux";

/*const clinicalqueue = (state = [], action) => {
    switch(action.type) {
        case 'check_in_patient':
            return {...state, clinicalqueue: action.newclinicalqueue};
        case 'move_to_exam_room':
            return {...state, clinicalqueue: action.newclinicalqueue};
        case 'move_to_waiting_room':
            return {...state, clinicalqueue: action.newclinicalqueue};
        case 'appointment_in_progress':
            return {...state, clinicalqueue: action.newclinicalqueue};
        case 'initial_load':
            return {...state, clinicalqueue: action.newclinicalqueue};
        default:
            return state;
    }
};*/

function patientToSchedule(state = null, action) {
    switch(action.type) {
        case 'set_patient_to_schedule':
            return action.patient;

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

export const allReducers = combineReducers({
    clinicalqueue,
    patientToSchedule,
});