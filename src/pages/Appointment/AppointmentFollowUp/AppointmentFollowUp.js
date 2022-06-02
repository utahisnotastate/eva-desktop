import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentFollowUp() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Follow Up id:{id}</h3>
        </div>
    )
}