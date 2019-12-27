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
import CheckInPatient from "./ClinicalQueueActions/CheckInPatient/checkinpatient";
import VerifyInsuranceAction from "./ClinicalQueueActions/VerifyInsuranceAction/verifyinsuranceaction";
import MarkNoShow from "./ClinicalQueueActions/MarkNoShow/marknoshow";
import MoveToExaminationRoom from "./ClinicalQueueActions/MoveToExaminationRoom/movetoexaminationroom";
import ScheduleFollowUp from "./ClinicalQueueActions/ScheduleFollowUp/schedulefollowup";
import MoveBackToWaitingRoom from "./ClinicalQueueActions/MoveBackToWaitingRoom/movebacktowaitingroom";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

const styles = {
    textCenter: {
        textAlign: "center"
    }
};

const useStyles = makeStyles(styles);
const table_actions = [
    {label: 'Check In', component: (<CheckInPatient/>)},
    {label: 'Insurance Status', component: (<VerifyInsuranceAction verification={{status: 'verified'}}/>)},
    {label: 'No Show', component: (<MarkNoShow/>)}

    ];

const waiting_room_actions = [
    {label: 'Move', component: (<MoveToExaminationRoom />)},
];
const recently_completed_actions = [
    {label: 'Schedule Follow Up', component: (<ScheduleFollowUp requires_follow_up={true} patentId={1}/>)}

];

const in_examination_room_actions = [
    {label: 'Move to waiting room', component: (<MoveBackToWaitingRoom />)}

];

export default function ClinicalQueue() {
    const classes = useStyles();
    const [inWaitingArea, setInWaitingArea] = useState([]);
    const [waitingToBeSeen, setWaitingToBeSeen] = useState([]);
    const upcomingapptheaders = ["#", "Name", "Appointment Time", "Provider", "Date Scheduled",  "Actions"];
    const waiting_in_exam_room_headers = ["#", "Name", "Time Arrived", "Appointment Time", "Provider", "Examination Room",  "Actions"];
    const columnheaders = ["#", "Name", "Time Arrived", "Appointment Time", "Provider", "Actions"];
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
                                    <ClinicalQueueTable columnheaders={upcomingapptheaders} table_actions={table_actions}/>
                                )
                            },
                            {
                                tabName: "In Waiting Room",
                                tabIcon: AirlineSeatLegroomExtraIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders} table_actions={waiting_room_actions}/>
                                )
                            },
                            {
                                tabName: "Waiting in examination room",
                                tabIcon: PersonIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={waiting_in_exam_room_headers} table_actions={in_examination_room_actions}/>
                                )
                            },
                            {
                                tabName: "Appointment in progress",
                                tabIcon: PeopleIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders} table_actions={[]}/>
                                )
                            },
                            {
                                tabName: "Recently Completed",
                                tabIcon: HowToRegIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders} table_actions={recently_completed_actions}/>
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}