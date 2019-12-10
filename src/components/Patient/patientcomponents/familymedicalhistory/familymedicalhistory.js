import React from "react";
import {useParams} from 'react-router-dom';

export default function FamilyMedicalHistory(props) {
    let { id } = useParams();

    return (
        <div>
            <h4>Family Medical History for patient: {id}</h4>
        </div>
    )
}