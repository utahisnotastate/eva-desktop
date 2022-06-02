import React, {useEffect, useState} from 'react';
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";
import BaseROSComponent from "./AppointmentROSComponents/BaseROSComponent";
import AppointmentROSSummary from "./AppointmentROSSummary";

export default function AppointmentROS() {
    let { id } = useParams();
    const match = useRouteMatch();
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
    // console.log('path is ' + path)
    console.log(match.path);
    return (
        <div>
            <Route key={`summary`} exact path={`${match.path}`} component={AppointmentROSSummary} />
        </div>
    )
}

/*

 <Switch>
                <Route path={`/appointments/:id/appointmentros/ROSAllergicImmunologic`}>
                    <BaseROSComponent/>
                </Route>

            </Switch>
 */