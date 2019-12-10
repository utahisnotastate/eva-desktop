import React from "react";
import {useParams} from 'react-router-dom';

export default function Documentation(props) {
    let { id } = useParams();

    return (
        <div>
            <h4>Documentation for patient: {id}</h4>
        </div>
    )
}