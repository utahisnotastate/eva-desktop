import React from "react";
import {NavLink} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "../../../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../../../basestyledcomponents/Card/CardHeader";
import {Button, Typography} from "@material-ui/core";
import Modal from '../../../../../basestyledcomponents/Modal/modal';

export default function AppointmentScheduleEventCard(props) {
    return (
        <Card>
            <CardHeader color="rose">
                <Typography>Patient Name</Typography>
                <Typography>Date of Birth: </Typography>
            </CardHeader>
            <List component="nav">
                <ListItem>
                    <NavLink to={`/patient/${props.event.patient.id}/demographics`}><Typography variant="subtitle2">
                        View Profile
                    </Typography></NavLink>
                </ListItem>
                <ListItem>
                    <Modal buttontext="Check In" />
                </ListItem>
                <ListItem>
                    <Modal buttontext="Verify Insurance" />
                </ListItem>
                <ListItem>
                    <Modal buttontext="No Show" />
                </ListItem>
            </List>
        </Card>
    );
}