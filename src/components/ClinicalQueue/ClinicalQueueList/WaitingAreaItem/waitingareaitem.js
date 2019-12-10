import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import WaitingAreaItemForm from "./WatingAreaItemForm/waitingareaitemform";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: '80%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function WaitingAreaItem() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ListItem className="w3-card-4">
                <ListItemText primary="John Smith" secondary="DOB: 1/1/1950"/>
                <ListItemText primary="Scheduled Appointment Start: 1:45" secondary="Arrival Time: 1:15"/>
                <ListItemText primary="Provider: Dr. John"/>
                <ListItemSecondaryAction>
                    <Button variant="contained" color="primary" onClick={handleOpen}>Move To Examination Room</Button>
                </ListItemSecondaryAction>
            </ListItem>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Button className="w3-right" variant="contained" color="secondary" onClick={handleClose}>X</Button>
                    <h2 id="simple-modal-title">Move to examination room</h2>
                    <WaitingAreaItemForm />
                </div>
            </Modal>
        </div>
    );
}