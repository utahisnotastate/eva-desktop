import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentROS() {
    let { id } = useParams();
    const [systems, setSystems] = useState([{ label: 'Constitutional', component: 'ROSConstitutional' },
        { label: 'Allergic Immunologic', component: 'ROSAllergicImmunologic' },
        { label: 'Integumentary', component: 'ROSIntegumentary' },
        { label: 'Eyes',component: 'ROSEyes' },
        { label: 'Cardiovascular',component: 'ROSCardiovascular' },
        { label: 'Respiratory', component: 'ROSRespiratory' },
        { label: 'Musculoskeletal', component: 'ROSMusculoskeletal' },
        { label: 'Gastrointestinal', component: 'ROSGastrointestinal' },
        { label: 'Neurological',component: 'ROSNeurological' },
        { label: 'Genitourinary', component: 'ROSGenitourinary' },
        { label: 'Endocrine',component: 'ROSEndocrine' },
        { label: 'Hematologic',component: 'ROSHematologic' },
        { label: 'Psychiatric',component: 'ROSPsychiatric' },
        { label: 'Ears Nose Throat',component: 'ROSEarsNoseThroat' }]);
    return (
        <div>
            <h3>Review of Systems id:{id}</h3>
        </div>
    )
}