import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";

export default function PatientRequestListItem(props) {
    return (
        <ListItem className="w3-card-4">
            <ListItemAvatar>
                <Avatar>
                    <p>Medication</p>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.name} secondary={props.type} />
            <ListItemSecondaryAction>
                <Button>View</Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}