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
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

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
                                    <ClinicalQueueTable columnheaders={columnheaders}/>
                                )
                            },
                            {
                                tabName: "In Waiting Room",
                                tabIcon: AirlineSeatLegroomExtraIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders}/>
                                )
                            },
                            {
                                tabName: "Waiting in examination room",
                                tabIcon: PersonIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders}/>
                                )
                            },
                            {
                                tabName: "Appointment in progress",
                                tabIcon: PeopleIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders}/>
                                )
                            },
                            {
                                tabName: "Recently Completed",
                                tabIcon: HowToRegIcon,
                                tabContent: (
                                    <ClinicalQueueTable columnheaders={columnheaders}/>
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}