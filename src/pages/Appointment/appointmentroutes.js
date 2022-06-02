import React from "react";
//import SingleCheckboxwithLabel from "../../components/Forms/components/CustomInputs/SingleCheckboxwithLabel";


const SingleCheckboxwithLabel = (props) => {
    return (
        <div>
            <p>Fake Input</p>
        </div>
    )
}

export const PhysicalExamRoutes = [
    {label: 'HEENT', path: '/appointmentexam/HEENTExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]},
    {
        label: 'Integumentary', path: '/appointmentexam/IntegumentaryExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Cardiovascular', path: '/appointmentexam/CardiovascularExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Musculoskeletal', path: '/appointmentexam/MusculoskeletalExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Gastrointestinal', path: '/appointmentexam/GastrointestinalExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Neurological', path: '/appointmentexam/NeurologicalExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Male Genitoruinary', path: '/appointmentexam/MaleGenitourinaryExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Female Genitourinary', path: '/appointmentexam/FemaleGenitourinaryExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Hematologic Lymphatic', path: '/appointmentexam/HematologicLymphaticExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Psychiatric', path: '/appointmentexam/PsychiatricExam',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
];

export const ROSRoutes = [
    {
        path: '/appointmentros/ROSConstitutional',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Constitutional ROS'
    },
    {
        path: '/appointmentros/ROSAllergicImmunologic',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Allergic Immunologic ROS',
    },
    {
        path: '/appointmentros/ROSIntegumentary',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Integumentary',
    },
    {
        path: '/appointmentros/ROSEyes',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Eyes ROS',
    },
    {
        path: '/appointmentros/ROSEyes',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }],
        label: 'Eyes ROS',
    },
    {
        label: 'Cardiovascular', path: '/appointmentros/ROSCardiovascular',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Respiratory', path: '/appointmentros/ROSRespiratory',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Musculoskeletal', path: '/appointmentros/ROSMusculoskeletal',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Gastrointestinal', path: '/appointmentros/ROSGastrointestinal',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Neurological', path: '/appointmentros/ROSNeurological',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Genitourinary', path: '/appointmentros/ROSGenitourinary',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Endocrine', path: '/appointmentros/ROSEndocrine',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Hematologic', path: '/appointmentros/ROSHematologic',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Psychiatric', path: '/appointmentros/ROSPsychiatric',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    },
    {
        label: 'Ears Nose Throat', path: '/appointmentros/ROSEarsNoseThroat',
        fields: [{
            name: 'no_known_allergies',
            label: 'No Known Allergies',
            component: SingleCheckboxwithLabel,
            value: true,
            fieldoptions: false
        },
            {
                name: 'drug_allergies_present',
                label: 'Known Drug Allergies',
                component: SingleCheckboxwithLabel,
                value: true,
                fieldoptions: false
            }]
    }

];
