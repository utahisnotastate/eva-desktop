import React, {useState} from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from "@material-ui/core/List";
import WaitingAreaItem from "./WaitingAreaItem/waitingareaitem";
import WaitingToBeSeenItem from "./WaitingToBeSeenItem/waitingtobeseenitem";
import AppointmentsInProgressItem from "./AppointmentsInProgressItem/appointmentsinprogressitem";
import RecentlyCompletedAppointmentsItem from "./RecentlyCompletedAppointmentsItem/recentlycompletedappointmentsitem";

export default function ClinicalQueueList() {
    const [clinicalQueue, setClinicalQueue] = useState([]);

    return (
        <div>
            <List subheader={<ListSubheader className="w3-blue w3-card-4" component="div">In Waiting Area</ListSubheader>}>
                <WaitingAreaItem />
                <WaitingAreaItem />
                <WaitingAreaItem />
            </List>
            <List subheader={<ListSubheader className="w3-blue w3-card-4" component="div">In Examination Room waiting to be seen</ListSubheader>}>
                <WaitingToBeSeenItem />
            </List>
            <List subheader={<ListSubheader className="w3-blue w3-card-4" component="div">Appointments in Progress</ListSubheader>}>
                <AppointmentsInProgressItem />
            </List>
            <List subheader={<ListSubheader className="w3-blue w3-card-4" component="div">Recently Completed Appointments</ListSubheader>}>
                <RecentlyCompletedAppointmentsItem />
            </List>
        </div>

    );

}
