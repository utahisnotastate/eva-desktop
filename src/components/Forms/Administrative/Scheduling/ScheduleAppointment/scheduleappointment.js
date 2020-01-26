import React, {Fragment, useState} from "react";
import GridContainer from '../../../../basestyledcomponents/Grid/GridContainer';
import GridItem from "../../../../basestyledcomponents/Grid/GridItem";
import { useForm } from 'react-hook-form';
import {Typography} from "@material-ui/core";
import {useModal} from "react-modal-hook";
import {useParams} from "react-router-dom";

export default function ScheduleAppointment(props) {
    let {id} = useParams();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer direction="column" alignItems="center">
            <GridItem>
                <Typography>Schedule Appointment for: {id}</Typography>
            </GridItem>
            <GridItem>
                <Typography>Calender</Typography>
            </GridItem>

        </GridContainer>
        </form>

    );
}