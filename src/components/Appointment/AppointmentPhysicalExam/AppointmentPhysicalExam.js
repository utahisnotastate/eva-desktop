import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"

export default function AppointmentPhysicalExam() {
    let { id } = useParams();
    return (
        <div>
            <h3>Appointment Physical Exam id:{id}</h3>
        </div>
    )
}