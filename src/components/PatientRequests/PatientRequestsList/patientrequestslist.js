import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from "@material-ui/core/List";
import PatientRequestListItem from "./patientrequestlistitem/patientrequestlistitem";

export default function PatientRequestsList(props) {
    return (
        <List subheader={<ListSubheader className="w3-blue w3-card-4" component="div">Active Requests</ListSubheader>}>
            {props.activePatientRequests.map(patientrequest => (
                <PatientRequestListItem key={patientrequest.name} name={patientrequest.name} type={patientrequest.type} />
            ))}

        </List>
    )
}