import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentPlan() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Plan id:{id}</h3>
        </div>
    )
}