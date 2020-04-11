export function medicalappointmentformtitle(state = 'Medical Appointment Form', action) {
    switch (action.type) {
        case 'set_title':
            return action.title;
        default:
            return state;

    }
}

export function medicalappointmentformtype(state = 'object', action) {
    switch (action.type) {
        case 'set_form_type':
            return action.formtype;
        default:
            return state;

    }
}

export function medicalappointmentformrequiredfields(state = [], action) {
    switch (action.type) {
        case 'add_required_field':
            return state.push(action.field);
        default:
            return state;

    }
}

export function medicalappointmentformvitals(state = {
    "type": "object",
    "title": "",
    "properties": {
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
export function medicalappointmentformcomplaints(state = {
    "type": "array",
    "title": "",
    "items": {
        "type": "object",
        "properties": {
            "icd10code": {"type": "string", "title": "ICD 10 Code"},
            "icd10description": {"type": "string", "title": "ICD 10 Description"},
            "onset": {"type": "string", "title": "Onset"},
            "progression": {"type": "string", "title": "Progression"},
            "caused_by": {"type": "string", "title": "Caused By"},
        }
    }
}, action) {
    switch (action.type) {
        case 'add_new_vitals_property':
            return {...state, properties: {...state.properties, ...action.newproperty}}
        default:
            return state;

    }

}