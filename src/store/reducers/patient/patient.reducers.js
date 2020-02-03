
export function patientdiagnoses(state = [], action) {
    switch (action.type) {
        case 'load_all_diagnoses':
            return action.diagnoses;
        default:
            return state;
    }

}

export function hasinsurance(state = false, action) {
    switch(action.type) {
        case 'patient_has_no_insurance':
            return false;
        case 'patient_has_insurance':
            return true;
        default:
            return state;
    }
}

export function primaryinsurance(state = {}, action) {
    switch (action.type) {
        case 'set_primary_insurance':
            return action.primary_insurance;
        default:
            return state;

    }
}
export function secondaryinsurance(state = { }, action) {
    switch (action.type) {
        case 'set_secondary_insurance':
            return action.secondary_insurance;
        default:
            return state;

    }
}
export function surgicalhistory(state = [], action) {
    switch(action.type) {
        case 'load_surgical_history':
            return action.surgicalhistory;

        case 'update_surgical_history':
            return action.surgicalhistory;

        default:
            return state;
    }
}
export function addmedicationformicd10result(state = {
    icd10assessmentcode: '',
    assessment_description: ''
}, action) {
    switch (action.type) {
        case 'updated_icd10':
            return action.icd10value;

        default:
            return state;
    }

}

export function addMedicationFormMedication(state = '', action) {
    switch (action.type) {
        case 'set_medication':
            return action.name;
        default:
            return state;

    }
}

export function patientmedications(state = [], action) {
    switch (action.type) {
        case 'load_all_medications':
            return action.medications;
        case 'update_patient_medications':
            return action.medications;
        default:
            return state;
    }

}

export function drugallergies(state = [], action) {
    switch (action.type) {
        case 'load_all_drug_allergies':
            return action.drugallergies;
        default:
            return state;

    }
}

export function foodallergies(state = [], action) {
    switch (action.type) {
        case 'load_all_food_allergies':
            return action.foodallergies;
        default:
            return state;

    }
}

export function latexallergy(state = false, action) {
    switch (action.type) {
        case 'load_latex_allergy':
            return action.latexallergy;
        default:
            return state;

    }
}

export function petallergies(state = [], action) {
    switch(action.type) {
        case 'load_all_pet_allergies':
            return action.petallergies;
        default:
            return state;
    }
}

export function pollenallergy(state=false, action) {
    switch(action.type) {
        case 'load_pollen_allergy':
            return action.pollenallergy;
        default:
            return state;
    }
}
// export function familymedicalhistory(state = )