export function createmedicalchartformschema(state= {
    title: "Medical Appointment Form",
    type: "object",
    required: [],
    properties: {
        vitals: {
            type: "object",
            title: "Vitals",
            properties: {
                blood_pressure: {type: "string", title: "Blood Pressure"}
            }
        },
        complaints: {
            type: "object",
            title: "Complaints",
            properties: {
                patient_description: {type: "string", title: "Patient Description"}
            }
        },
    }
}, action) {
    switch (action.type) {
        case 'add_field_to_medical_chart_form':
            console.log({...state, properties:{...state.properties, ...action.newfield}})
            return {...state, properties:{...state.properties, ...action.newfield}};
        default:
            return state;

    }
}
export function createfamilymedicalhistoryformschema(state= {
    title: "Family Medical History Form",
    type: "object",
    required: [],
    properties: {
    }
}, action) {
    switch (action.type) {
        case 'add_field_to_family_medical_history_form':
            return {...state.properties, ...action.newfield}
        default:
            return state;

    }
}