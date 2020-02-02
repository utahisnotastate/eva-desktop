import React, {useEffect, useState} from 'react';
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
import styles from "../../basestyledcomponents/Modal/modalStyle";
import {Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import UpdatePatientRequestForm from "./UpdatePatientRequestForm/updatepatientrequestform";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

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
    const firststory = {   // First story
            inverted: false,
            badgeColor: "danger",
            badgeIcon: CardTravel,
            title: (<TimeLineTitle />),
            titleColor: "danger",
            body: (
                <p>{props.request_description}</p>
            ),
        }
        // const requestupdates = useSelector(state => state.requestupdates);
        // const dispatch = useDispatch();
        // const [requestupdates, setRequestUpdates] = useState([]);
        const [combinedupdates, setCombinedUpdates] = useState([]);

        async function getRequestsFromAPI() {
            axios.get(`http://127.0.0.1:8000/api/clinicalrequests/${props.requestId}`)
                .then(response => {
                    const request_updates = response.data.patient_request_updates;
                    for (const update of request_updates ) {
                        combinedupdates.push({
                            inverted: true,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<Typography>Update from patient</Typography>),
                            titleColor: "danger",
                            body: (
                                <p>{update.update}</p>
                            ),
                        })
                    }
                    // console.log(styledrequestupdateobjects);
                    // dispatch({type: 'set_request_updates', requestupdates: styledrequestupdateobjects})
                });

        }
    useEffect(() => {
        getRequestsFromAPI();
    }, []);



    return (
        <div>
            <Button color="primary" onClick={() => setModal(true)}>
                View Request
            </Button>
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={modal}
                disableBackdropClick
                keepMounted
                scroll="body"
                fullScreen={false}
                fullWidth={false}
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
                    <h4 className={classes.modalTitle}>Patient Request:</h4>
                    <Typography>{props.request_description}</Typography>
                </DialogTitle>
                <DialogContent
                    id="modal-slide-description"
                    className={classes.modalBody}
                >
                    <TimelineComponent stories={combinedupdates} />
                    <Divider />
                    <div>
                        <Typography variant={`h6`}>Log Unsuccesful Contact Attempt</Typography>

                    </div>
                    <Divider />
                    <div>
                        <div>
                            <Typography variant={`h6`}>Update Request</Typography>
                        </div>
                        <div>
                            <UpdatePatientRequestForm requestId={props.requestId} firststory={firststory} setModal={setModal} getRequestsFromAPI={getRequestsFromAPI} />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )

}

/*
[
                        firststory,
                        {
                            inverted: true,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<Typography>Employee Responded</Typography>),
                            titleColor: "danger",
                            body: (
                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank
                                    you for making my family We just had fun with the “future” theme !!! It was a fun
                                    night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @
                                    Figueroa and 12th in downtown.</p>
                            ),
                        },
                        {
                            inverted: false,
                            badgeColor: "danger",
                            badgeIcon: CardTravel,
                            title: (<Typography>Update from patient</Typography>),
                            titleColor: "danger",
                            body: (
                                <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank
                                    you for making my family We just had fun with the “future” theme !!! It was a fun
                                    night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @
                                    Figueroa and 12th in downtown.</p>
                            ),
                        }
                    ]
 */

/*
useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/clinicalrequests/${props.requestId}`);
            // console.log(result.data.patient_request_updates);
            // setRequestUpdates(result.data.patient_request_updates)
            return result;
        };
        fetchData().then(data => console.log(data));
    }, []);
 */
/*
 /*axios.get(`http://127.0.0.1:8000/api/clinicalrequests/${props.requestId}`)
            .then(response => {
                const request_updates = response.data.patient_request_updates;
                for (const update of request_updates ) {
                    combinedupdates.push({
                        inverted: true,
                        badgeColor: "danger",
                        badgeIcon: CardTravel,
                        title: (<Typography>Update from patient</Typography>),
                        titleColor: "danger",
                        body: (
                            <p>{update.update}</p>
                        ),
                    })
                }
                // console.log(styledrequestupdateobjects);
                // dispatch({type: 'set_request_updates', requestupdates: styledrequestupdateobjects})
            });*/
