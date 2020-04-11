import React, {useEffect, useState} from 'react';
import {useStateValue} from "./context/ClinicalQueueContext";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import ClinicalQueueTable from "./ClinicalQueueTable/clinicalqueuetable";
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import CustomTabs from "../basestyledcomponents/CustomTabs/CustomTabs";
import TodaysAppointmentsSettings from "./ClinicalQueueTable/ClinicalQueueTableSettings/todaysappointments.settings";
import InWaitingRoomSettings from "./ClinicalQueueTable/ClinicalQueueTableSettings/inwaitingroom.settings";
import InExamRoomSettings from "./ClinicalQueueTable/ClinicalQueueTableSettings/waitinginexamroom.settings";
import AppointmentInProgressSettings
    from "./ClinicalQueueTable/ClinicalQueueTableSettings/appointmentinprogress.settings";
import RecentlyCompletedAppointmentSettings
    from "./ClinicalQueueTable/ClinicalQueueTableSettings/recentlycompleted.settings";
import axios from "axios";
import moment from "moment";
import {useSelector, useDispatch} from "react-redux";


const styles = {
    textCenter: {
        textAlign: "center"
    }
};

const API_URL = "http://127.0.0.1:8000/api";

const useStyles = makeStyles(styles);

export default function ClinicalQueue() {
    const classes = useStyles();
    // const [{clinicalqueue}, dispatch] = useStateValue();
    console.log(useSelector(state => state));
    const clinicalqueue = useSelector(state => state.clinicalqueue);
    const dispatch = useDispatch();

    useEffect(() => {
        //gets appointments on mount
        const fetchData = async () => {
            const result = await axios.get(`${API_URL}/appointmentstoday/`);
            console.log(result);
            let appointments = result.data;

            return appointments;
            // console.log(appointments);

        };
        fetchData().then(response => {
            console.log(response);
            let modifiedappointments = [];
            response.forEach(appointment => {
                let formattedstart = moment(appointment.start).format('h:mm')
                let formattedend = moment(appointment.end).format('h:mm')
                modifiedappointments.push({...appointment, ...{start: formattedstart}})
            })
            dispatch({
                type: 'initial_load',
                newclinicalqueue: modifiedappointments,
            })
        }).catch(error => console.log(error));
    }, []);
    return (
        <div>
            <GridContainer direction="column" alignContent="center">
                <GridItem xs={12} sm={9}>
                    <CustomTabs
                        title={'Clinical Queue'}
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Todays Upcoming Appointments",
                                tabIcon: AirlineSeatLegroomExtraIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={TodaysAppointmentsSettings.title}
                                        columnheaders={TodaysAppointmentsSettings.columnheaders}
                                        // table_actions={TodaysAppointmentsSettings.actions}
                                        clinicalqueuefilter="scheduled"
                                        data={clinicalqueue}
                                    />
                                )
                            },
                            {
                                tabName: "In Waiting Room",
                                tabIcon: AirlineSeatLegroomExtraIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={InWaitingRoomSettings.title}
                                        columnheaders={InWaitingRoomSettings.columnheaders}
                                        // table_actions={InWaitingRoomSettings.actions}
                                        clinicalqueuefilter="arrived"
                                        data={clinicalqueue}
                                    />
                                )
                            },
                            {
                                tabName: "Waiting in examination room",
                                tabIcon: PersonIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={InExamRoomSettings.title}
                                        columnheaders={InExamRoomSettings.columnheaders}
                                        // table_actions={InExamRoomSettings.actions}
                                        clinicalqueuefilter="in_exam_room"
                                        data={clinicalqueue}
                                    />
                                )
                            },
                            {
                                tabName: "Appointment in progress",
                                tabIcon: PeopleIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={AppointmentInProgressSettings.title}
                                        columnheaders={AppointmentInProgressSettings.columnheaders}
                                        table_actions={AppointmentInProgressSettings.actions}
                                        data={clinicalqueue}
                                    />
                                )
                            },
                            {
                                tabName: "Recently Completed",
                                tabIcon: HowToRegIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={RecentlyCompletedAppointmentSettings.title}
                                        columnheaders={RecentlyCompletedAppointmentSettings.columnheaders}
                                        table_actions={RecentlyCompletedAppointmentSettings.actions}
                                        data={clinicalqueue}
                                    />
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}

/*
/*let convertedappointments = [];
            appointments.forEach(appointment => {
                let newstart = toDate.RFC3339(appointment.start);
                let newend = toDate.RFC3339(appointment.end);
                let resourceId = appointment.provider;
                // console.log(appointment.provider);
                // console.log({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
                convertedappointments.push({...appointment, ...{start: newstart, end: newend, resourceId: resourceId}})
            });
            setAppointments(convertedappointments);
 */
/*
setTodaysaAppointments(modifiedappointments.filter(appointment => appointment.status === "scheduled"));
            setInWaitingArea(modifiedappointments.filter(appointment => appointment.status === "arrived"));
            setInExamRoom(modifiedappointments.filter(appointment => appointment.status === "in_exam_room"))
            setAppointmentsInProgress(modifiedappointments.filter(appointment => appointment.status === "in_progress"))
            setFinishedAppointments(modifiedappointments.filter(appointment => appointment.status === "in_progress"))
 */
/*
const [todaysappointments, setTodaysaAppointments] = useState([]);
    const [inWaitingArea, setInWaitingArea] = useState([]);
    const [inExamRoom, setInExamRoom] = useState([]);
    const [appointmentsinprogress, setAppointmentsInProgress] = useState([])
    const [finishedappointments, setFinishedAppointments] = useState([]);
 */