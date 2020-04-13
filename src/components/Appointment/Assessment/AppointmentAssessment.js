import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentAssessment() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Assessment id:{id}</h3>
        </div>
    )
}