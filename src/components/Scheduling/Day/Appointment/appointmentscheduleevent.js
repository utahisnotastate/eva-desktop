import React, {Fragment, useState} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
import AppointmentScheduleEventToolTip
    from "./components/AppointmentScheduleEventToolTip/appointmentscheduleeventtooltip";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function AppointmentScheduleEvent(props) {
    return (
            <AppointmentScheduleEventToolTip event={props.event} />
    );
}