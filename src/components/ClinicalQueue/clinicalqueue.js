import React, {useState} from 'react';
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


const styles = {
    textCenter: {
        textAlign: "center"
    }
};

const useStyles = makeStyles(styles);

export default function ClinicalQueue() {
    const classes = useStyles();
    const [inWaitingArea, setInWaitingArea] = useState([]);
    const [waitingToBeSeen, setWaitingToBeSeen] = useState([]);
    return (
        <div>
            <GridContainer direction="column" alignContent="center">
                <GridItem xs={12} sm={9}>
                    <CustomTabs
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Todays Upcoming Appointments",
                                tabIcon: AirlineSeatLegroomExtraIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={TodaysAppointmentsSettings.title}
                                        columnheaders={TodaysAppointmentsSettings.columnheaders}
                                        table_actions={TodaysAppointmentsSettings.actions}
                                        expandable={true}
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
                                        table_actions={InWaitingRoomSettings.actions}
                                        expandable={true}/>
                                )
                            },
                            {
                                tabName: "Waiting in examination room",
                                tabIcon: PersonIcon,
                                tabContent: (
                                    <ClinicalQueueTable
                                        title={InExamRoomSettings.title}
                                        columnheaders={InExamRoomSettings.columnheaders}
                                        table_actions={InExamRoomSettings.actions}
                                        expandable={true}/>
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
                                        expandable={false}/>
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
                                        expandable={true}/>
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

 */