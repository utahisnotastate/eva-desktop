import React from 'react';
import {useParams} from "react-router-dom";

export default function Appointment() {
    let { id } = useParams();
    return (
        <div className="">
            <h3>Appointment id: {id}</h3>
        </div>
    );
}