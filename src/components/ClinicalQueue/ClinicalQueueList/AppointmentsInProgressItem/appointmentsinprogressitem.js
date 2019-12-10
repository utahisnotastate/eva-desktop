import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function AppointmentsInProgressItem() {
    return (
        <ListItem className="w3-card-4">
            <ListItemText primary="Ryan Smith" secondary="DOB: 1/1/1950" />
            <ListItemText primary="Scheduled Appointment Start: 1:45" secondary="Actual Appointment Start: 2:15" />
            <ListItemText primary="Provider: Dr. John" />
        </ListItem>
    );
}