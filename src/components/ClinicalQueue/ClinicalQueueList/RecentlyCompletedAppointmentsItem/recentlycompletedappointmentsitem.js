import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";

export default function RecentlyCompletedAppointmentsItem() {
    return (
        <ListItem className="w3-card-4">
            <ListItemText primary="John Smith" secondary="DOB: 1/1/1950" />
            <ListItemText primary="Arrival Time: 1:45" secondary="Appointment Completion Time: 2:15" />
            <ListItemText primary="Provider: Dr. John" />
            <ListItemSecondaryAction>
                <Button color="primary">Schedule Follow Up</Button>
                <Button>View Appointment</Button>
            </ListItemSecondaryAction>
        </ListItem>
    );
}