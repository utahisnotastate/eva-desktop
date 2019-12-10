import React, {Fragment, useState} from "react";
import {useParams, useRouteMatch} from "react-router-dom";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Fab} from "@material-ui/core";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import {useModal} from "react-modal-hook";
import CheckInForm from "../Forms/Administrative/Scheduling/CheckIn/checkin";
import Modal from "../basestyledcomponents/Modal/modal";
import Card from "../basestyledcomponents/Card/Card";
import TimeSlot from "./Day/Appointment/components/TimeSlot/timeslot";
// import SlotDialog from "../basestyledcomponents/Modal/Dialog";
import CardBody from "../basestyledcomponents/Card/CardBody";
import AppointmentScheduleEvent from "./Day/Appointment/appointmentscheduleevent";
import styles from '../basestyledcomponents/buttonStyle';
import '../basestyledcomponents/scss/material-dashboard-pro-react.scss'

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);

function PatientSearch() {
    return (
        <div>
            <Typography>Patient Search</Typography>
        </div>
    );
}

function ScheduleAppointmentDialog(props) {
    return (
        <Fragment>
            <Typography>Appointment Start: {moment(props.slottoschedule.slots[0]).format('MMMM Do @ h:mm A')}</Typography>
            <Typography>Appointment End: {moment(props.slottoschedule.slots[props.slottoschedule.slots.length - 1]).format('MMMM Do @ h:mm A')}</Typography>
            <Typography>Patient First Name: {props.patient}</Typography>
            <Typography>Patient Last Name</Typography>
            <Typography>Patient Contact Number</Typography>
            <Typography>Notify if an earlier appointment opens up?</Typography>
        </Fragment>
    )
}
export default function Scheduling() {
        let { path, url } = useRouteMatch();
        let { id } = useParams();
        console.log(id);
        const [slottoschedule, setSlotToSchedule] = useState();
        const [showModal, hideModal] = useModal(({ in: open, onExited }) => {
            // console.log(slottoschedule.slots);
            return (
                <Dialog disableBackdropClick={true} open={true} onExited={onExited} onClose={hideModal}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Fab color="primary" onClick={hideModal}>X</Fab>
                    </div>
                    <DialogTitle>Schedule appointment</DialogTitle>
                    <DialogContent>
                        {id ? <ScheduleAppointmentDialog slottoschedule={slottoschedule} patient={id}/> : <PatientSearch /> }

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            let appointments = events;
                            appointments.push({
                                title: "Meeting",
                                start: slottoschedule.slots[0],
                                end: slottoschedule.slots[slottoschedule.slots.length - 1],
                                allDay: false,
                                color: 'green'
                            });
                            setEvents(appointments);
                            hideModal()
                        }}>Save</Button>
                    </DialogActions>
                </Dialog>
            );

        },[slottoschedule]);

    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth();
    var d = today.getDate();
    const classes = useStyles();
    const [events, setEvents] = useState([{
        title: "Meeting",
        start: new Date(y, m, d, 10, 30),
        end: new Date(y, m, d, 11, 30),
        allDay: false,
        patient: {id: 1},
        color: "green"
    },
        {
            title: "Meeting",
            start: new Date(y, m, d, 11, 30),
            end: new Date(y, m, d, 12, 30),
            allDay: false,
            patient: {id: 2},
            color: "green"
        }
    ]);
    const [alert, setAlert] = React.useState(null);

    const selectedEvent = event => {
        console.log('clicked! event!');
    };
    const selectedSlot = (event) => {
        console.log(event);
        if (event.slots.length === 1) {
            return;
        }
        setSlotToSchedule(event);
         // console.log(event);
         showModal();
    };
    const addNewEvent = (e, slotInfo) => {
        var newEvents = events;
        newEvents.push({
            title: e,
            start: slotInfo.start,
            end: slotInfo.end
        });
        setAlert(null);
        setEvents(newEvents);
    };
    const hideAlert = () => {
        setAlert(null);
    };
    const eventColors = event => {
        var backgroundColor = "event-";
        event.color
            ? (backgroundColor = backgroundColor + event.color)
            : (backgroundColor = backgroundColor + "default");
        return {
            className: backgroundColor
        };
    };

    const calendercomponents = {
        day: {
            event: AppointmentScheduleEvent,
        },
        week: {
            event: AppointmentScheduleEvent
        },
    };

    const opentime = () => {
        let date = new Date();
            date.setHours(8, 0);
        return date;
    };
    const closetime = () => {
        let date = new Date();
        date.setHours(17, 0);
        return date;
    };
    return (
        <div>
    <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
            <Card>
                <CardBody calendar>
                    <BigCalendar
                        selectable
                        localizer={localizer}
                        drilldownView="day"
                        events={events}
                        defaultView={Views.MONTH}
                        views={['month', 'work_week', 'day']}
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        defaultDate={new Date()}
                        onSelectEvent={(event) => selectedEvent(event)}
                        onSelectSlot={(slotInfo, view) => selectedSlot(slotInfo, view)}
                        eventPropGetter={eventColors}
                        min={opentime()}
                        max={closetime()}
                        components={calendercomponents}
                    />
                </CardBody>
            </Card>
        </GridItem>
    </GridContainer>
        </div>
    );
}
/*
onSelectEvent={event => selectedEvent()}
onSelectSlot={slotInfo => selectedSlot(slotInfo)}

 */