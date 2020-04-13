import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentSummary() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Summary id:{id}</h3>
        </div>
    )
}