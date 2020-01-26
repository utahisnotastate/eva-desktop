import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppointmentScheduleEventCard from "../AppointmentScheduleEventCard/appointmentscheduleeventcard";
import axios from "axios";

export default function AppointmentScheduleEventToolTip(props) {
    const [displayname, setDisplayName] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${props.event.patient}/`);
            return result.data;
        };
        fetchData().then(response => {
            console.log(response);
            setDisplayName(response.display_name);
        }).catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Tooltip
                interactive
                placement="right-end"
                disableFocusListener
                title={<AppointmentScheduleEventCard event={props.event}/>}
            >
            <Typography>{displayname}</Typography>
            </Tooltip>
        </div>

    );
}
/*
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
 */
/*
 () => {
                return <AppointmentScheduleEventCard event={props.event}/>
            }
 */