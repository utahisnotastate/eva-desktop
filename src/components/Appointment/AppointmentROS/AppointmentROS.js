import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentROS() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Review of Systems id:{id}</h3>
        </div>
    )
}