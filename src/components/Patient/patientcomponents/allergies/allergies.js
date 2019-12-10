import React from "react";
import {useParams} from 'react-router-dom';

export default function Allergies(props) {
    let { id } = useParams();
    console.log('hello?');
    return (
        <div>
            <h4>Allergies for patient: {id}</h4>
        </div>
    );
}