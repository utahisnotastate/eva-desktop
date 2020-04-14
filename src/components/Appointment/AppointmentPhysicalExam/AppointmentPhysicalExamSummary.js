import React, {useEffect, useState} from 'react';
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import {useParams, useRouteMatch, Switch, Route, Link, NavLink} from "react-router-dom";

export default function AppointmentPhysicalExamSummary() {
    return (
        <>
            <CardHeader color={`primary`}>
                <h4>Physical Exam Summary</h4>
            </CardHeader>
            <CardBody>
                Summary of Findings
            </CardBody>
        </>
    )
}