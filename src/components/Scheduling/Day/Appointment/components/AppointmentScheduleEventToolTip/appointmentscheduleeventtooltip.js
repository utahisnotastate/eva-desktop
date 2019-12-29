import React from "react";
import {makeStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppointmentScheduleEventCard from "../AppointmentScheduleEventCard/appointmentscheduleeventcard";

export default function AppointmentScheduleEventToolTip(props) {
    console.log(props);
    return (
        <div>
            <Tooltip
                interactive
                placement="right-end"
                disableFocusListener
                title={
                    <AppointmentScheduleEventCard event={props.event} />
                }
            >
                    <Typography>Test</Typography>ß
            </Tooltip>
        </div>
    );
}