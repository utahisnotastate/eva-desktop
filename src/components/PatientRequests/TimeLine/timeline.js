import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Build from "@material-ui/icons/Build";
import TimelineComponent from "../../basestyledcomponents/TimeLineStyled/Timeline";
import Button from "../../basestyledcomponents/Button";
import CheckInForm from "../../Forms/Administrative/Scheduling/CheckIn/checkin";
import styles from "../../basestyledcomponents/Modal/modalStyle";
import {Typography} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

function TimeLineTitle(props) {
    return (
        <div>
            <Typography>Medication Refill</Typography>
        </div>
    );
}

export default function RequestTimeLine(props) {
    const [modal, setModal] = React.useState(false);
    const classes = useStyles();

    return (
        <div>
            <Button color="primary" onClick={() => setModal(true)}>
                View
            </Button>
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={modal}
                disableBackdropClick
                keepMounted
                fullScreen={true}
                fullWidth={true}
                transition={Transition}
                onClose={() => setModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Button
                        justIcon
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="transparent"
                        onClick={() => setModal(false)}
                    >
                        <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>Patient Request</h4>
                </DialogTitle>
                <DialogContent
                    id="modal-slide-description"
                    className={classes.modalBody}
                >
                    <TimelineComponent stories={[
                        {   // First story
                            inverted: false,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<TimeLineTitle />),
                            titleColor: "danger",
                            body: (
                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank
                                    you for making my family We just had fun with the “future” theme !!! It was a fun
                                    night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @
                                    Figueroa and 12th in downtown.</p>
                            ),
                            footerTitle: "11 hours ago via Twitter",
                        }
                    ]} />
                </DialogContent>
            </Dialog>
        </div>
    )

}