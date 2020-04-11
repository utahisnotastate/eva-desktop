import React from 'react';
import PatientComplaints from "./Complaints/PatientComplaints";
import {useParams} from "react-router-dom";

export default function Appointment() {
    let { id } = useParams();
    return (
        <PatientComplaints />
    );
}