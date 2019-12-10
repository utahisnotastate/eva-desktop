import React from "react";
import {useParams} from 'react-router-dom';

export default function PatientForms(props) {
    let { id } = useParams();

    return (
        <div>
            <h4>Forms for patient: {id}</h4>
        </div>
    )
}