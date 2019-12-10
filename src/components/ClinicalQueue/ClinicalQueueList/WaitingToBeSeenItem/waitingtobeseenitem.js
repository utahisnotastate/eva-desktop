import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function WaitingToBeSeenItem() {
    return (
        <ListItem className="w3-card-4">
            <ListItemText primary="Bob Johnson" secondary="DOB: 1/1/1950" />
            <ListItemText primary="Scheduled Appointment Start: 1:45" secondary="Arrival Time: 1:15" />
            <ListItemText primary="Examination Room: 2" />
        </ListItem>
    );
}