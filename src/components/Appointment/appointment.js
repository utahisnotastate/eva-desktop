import React from 'react';
import PatientComplaints from "./Complaints/PatientComplaints";
import AppointmentROS from "./AppointmentROS/AppointmentROS";
import AppointmentPhysicalExam from "./AppointmentPhysicalExam/AppointmentPhysicalExam";
import AppointmentAssessment from "./Assessment/AppointmentAssessment";
import AppointmentPlan from "./AppointmentPlan/AppointmentPlan";
import AppointmentFollowUp from "./AppointmentFollowUp/AppointmentFollowUp";
import AppointmentSummary from "./AppointmentSummary/AppointmentSummary"
import {useParams, useRouteMatch, Switch, Route, Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default function Appointment() {
    let { id } = useParams();
    let { path, url } = useRouteMatch();
    return (
        <Grid container>
            <Grid item xs={2}>
                <div className="w3-ul">
                    <li><Link to={url}>Complaints</Link></li>
                    <li><Link to={`${url}/appointmentros`}>Review of Systems</Link></li>
                    <li><Link to={`${url}/appointmentexam`}>Physical Exam</Link></li>
                    <li><Link to={`${url}/assessment`}>Assessment</Link></li>
                    <li><Link to={`${url}/plan`}>Plan</Link></li>
                    <li><Link to={`${url}/followup`}>Follow Up</Link></li>
                    <li><Link to={`${url}/summary`}>Summary</Link></li>
                </div>
            </Grid>
            <Grid item xs={10}>
                <Switch>
                <Route exact path={path}>
                    <PatientComplaints />
                </Route>
                <Route path={`${path}/appointmentros`}>
                    <AppointmentROS />
                </Route>
                    <Route path={`${path}/appointmentexam`}>
                        <AppointmentPhysicalExam />
                    </Route>
                    <Route path={`${path}/assessment`}>
                        <AppointmentAssessment />
                    </Route>
                    <Route path={`${path}/plan`}>
                        <AppointmentPlan />
                    </Route>
                    <Route path={`${path}/followup`}>
                        <AppointmentFollowUp />
                    </Route>
                    <Route path={`${path}/summary`}>
                        <AppointmentSummary />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
}
/*
<PatientComplaints />
 */