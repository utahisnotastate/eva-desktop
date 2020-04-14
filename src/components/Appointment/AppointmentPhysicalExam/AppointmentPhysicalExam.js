import React, {useEffect, useState} from 'react';
import {useParams, useRouteMatch, Route} from "react-router-dom"
import AppointmentPhysicalExamSummary from "./AppointmentPhysicalExamSummary";

function TestExamComponent() {
    return (
        <div><h3>TEst</h3></div>
    );
}

export default function AppointmentPhysicalExam() {
    let { id } = useParams();
    const match = useRouteMatch();
    console.log(match.path)
    return (
        <div>
            <Route exact path={`${match.path}`}>
                <AppointmentPhysicalExamSummary/>
            </Route>
        </div>
    )
}
/*
<div>
            <Route key={`summary`} exact path={`${match.path}`} component={AppointmentROSSummary} />
        </div>

 */