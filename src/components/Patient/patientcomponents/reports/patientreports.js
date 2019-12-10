import React from "react";
import {useParams} from 'react-router-dom';

export default function PatientReports(props) {
    let { id } = useParams();

    return (
        <div>
            <h4>Reports for patient: {id}</h4>
        </div>
    )
}