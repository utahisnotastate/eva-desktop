import React, {useEffect, useState} from "react";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';
import {useParams, useRouteMatch, NavLink} from "react-router-dom";
import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Fab} from "@material-ui/core";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import {useModal} from "react-modal-hook";
import Card from "../basestyledcomponents/Card/Card";
import CardBody from "../basestyledcomponents/Card/CardBody";
import AppointmentScheduleEvent from "./Day/Appointment/appointmentscheduleevent";
import WaitListCountCard from "./WaitList/waitlistcountcard";
import ReferralsToSchedule from "./ReferralsToSchedule/referralstoschedule";
import ScheduleAppointmentModal from "./ScheduleAppointmentModal/scheduleappointmentmodal";
import styles from '../basestyledcomponents/buttonStyle';

var toDate = require('@fav/type.to-date');

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);
const API_URL = "http://127.0.0.1:8000/api";
export default function Scheduling() {
        let { path, url } = useRouteMatch();
        let { id } = useParams();
        const { register, handleSubmit, control, errors } = useForm();
        // gets new appointments after appointment has been scheduled
        async function getNewAppointments() {
            const result = await axios(`${API_URL}/appointments`);
            // console.log(result.data);
            let appointments = result.data;
            let convertedappointments = [];
            appointments.forEach(appointment => {
                let newstart = toDate.RFC3339(appointment.start);
                let newend = toDate.RFC3339(appointment.end);
                let resourceId = appointment.provider;
                // console.log(appointment.provider);
                // console.log({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
                convertedappointments.push({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
            });
            setAppointments(convertedappointments);

    }
        // handles create new patient form
        const onSubmit = data => {
            console.log('Resource Id ' + slottoschedule.resourceId);
            console.log(data);
            axios.post('http://127.0.0.1:8000/api/appointments/', {
                patient: id,
                provider: slottoschedule.resourceId,
                type: data.type,
                status: "scheduled",
                start:  moment(slottoschedule.start).toISOString(),
                end: moment(slottoschedule.end).toISOString()

            }).then(response => {
                if(response.statusText === "Created") {
                    console.log('It worked!!!')
                    hideModal();
                    // getNewAppointments().catch(error => console.log(error));
                }

                //console.log(response);

            })
        };
        // console.log(errors);
        // resources are the providers
        const [resources, setResources] = useState([]);
        const [appointments, setAppointments] = useState([]);
        // holds the values of the appointment information for the form to have
        const [slottoschedule, setSlotToSchedule] = useState();
        const [showModal, hideModal] = useModal(({ in: open, onExited }) => {
            console.log(slottoschedule);
            return (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Dialog disableBackdropClick={true} open={true} onExited={onExited} onClose={hideModal}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Fab color="primary" onClick={hideModal}>X</Fab>
                        </div>
                        <DialogTitle>Schedule appointment</DialogTitle>
                        <DialogContent>
                            <ScheduleAppointmentModal slottoschedule={slottoschedule} patient={id} register={register} control={control}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSubmit(onSubmit)}>Schedule</Button>
                        </DialogActions>
                    </Dialog>
                    </form>
                </div>
            );

        },[slottoschedule]);

    useEffect(() => {
        // gets providers
        const fetchData = async () => {
            const result = await axios(`${API_URL}/providers`);
            console.log(result);
            setResources([...result.data]);
        };
        fetchData();
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(`${API_URL}/appointments`);
            // console.log(result.data);
            let appointments = result.data;
            let convertedappointments = [];
            appointments.forEach(appointment => {
                let newstart = toDate.RFC3339(appointment.start);
                let newend = toDate.RFC3339(appointment.end);
                let resourceId = appointment.provider;
                // console.log(appointment.provider);
                // console.log({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
                convertedappointments.push({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
            });
            setAppointments(convertedappointments);
            // console.log(appointments);

        };
        fetchData();
    }, []);
    const handleSelect = ({start, end, resourceId}) => {
        if (start === end) {
            return false;
        }
        setSlotToSchedule({start, end, resourceId});
        showModal();
    };
    const eventColors = event => {
        // console.log(event);
        return {
            style: {
                backgroundColor: '#1f618d',
            }
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
    <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
            <GridContainer>
                <GridItem xs={4}>
                    <NavLink to="/waitlist">
                        <WaitListCountCard />
                    </NavLink>
                </GridItem>
                <GridItem xs={4}>
                    <NavLink to="/referralstoschedule">
                        <ReferralsToSchedule />
                    </NavLink>

                </GridItem>
            </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
            <Card>
                <CardBody calendar>
                    <BigCalendar
                        selectable
                        localizer={localizer}
                        drilldownView="day"
                        events={appointments}
                        defaultView={Views.DAY}
                        views={['month', 'work_week', 'day']}
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        defaultDate={new Date()}
                        onSelectEvent={(event) => console.log(event)}
                        onSelectSlot={handleSelect}
                        eventPropGetter={eventColors}
                        resources={resources}
                        resourceTitleAccessor="display_name"
                        resourceIdAccessor={resource => {
                            return resource.id}
                        }
                        titleAccessor="type"
                        min={opentime()}
                        max={closetime()}
                        onView={view => console.log('View is ' + view)}
                        components={calendercomponents}
                    />
                </CardBody>
            </Card>
        </GridItem>
    </GridContainer>

    );
}
