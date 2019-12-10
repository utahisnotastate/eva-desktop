import React, {Fragment, useState} from "react";
import GridContainer from '../../../../basestyledcomponents/Grid/GridContainer';
import GridItem from "../../../../basestyledcomponents/Grid/GridItem";
import {Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";

export default function ScheduleAppointment(props) {
    let {id} = useParams();
    return(
        <GridContainer direction="column" alignItems="center">
            <GridItem>
                <Typography>Schedule Appointment for: {id}</Typography>
            </GridItem>
            <GridItem>
                <Typography>Calender</Typography>
            </GridItem>

        </GridContainer>


    );
}