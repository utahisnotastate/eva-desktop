import React from "react";
import CheckInPatient from "../../ClinicalQueueActions/CheckInPatient/checkinpatient";
import VerifyInsuranceAction from "../../ClinicalQueueActions/VerifyInsuranceAction/verifyinsuranceaction";
import MarkNoShow from "../../ClinicalQueueActions/MarkNoShow/marknoshow";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const TodaysAppointmentsSettings = {
    actions: [
        {label: 'Check In', component: (<CheckInPatient/>)},
        {label: 'Insurance Status', component: (<VerifyInsuranceAction verification={{status: 'verified'}}/>)},
        {label: 'No Show', component: (<MarkNoShow/>)}
    ],
    columnheaders: [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "company",
            label: "Appointment Time",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "Provider",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "Date Scheduled",
            options: {
                filter: true,
                sort: false,
            }
        },

    ],
};

export default TodaysAppointmentsSettings