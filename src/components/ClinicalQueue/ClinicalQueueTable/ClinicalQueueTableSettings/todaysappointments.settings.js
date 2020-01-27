import React from "react";
import CheckInPatient from "../../ClinicalQueueActions/CheckInPatient/checkinpatient";
import VerifyInsuranceAction from "../../ClinicalQueueActions/VerifyInsuranceAction/verifyinsuranceaction";
import MarkNoShow from "../../ClinicalQueueActions/MarkNoShow/marknoshow";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function updateThis() {
    console.log('Update this!!');
}

function TodaysAppointmentActions(props) {
    console.log(props.tableMeta);
    return (
        <div style={{display: 'flex'}}>
            <CheckInPatient appointment={props.tableMeta.rowData[0]}/>
            <VerifyInsuranceAction verification={{status: 'unverified'}}/>
            <MarkNoShow />
        </div>
    );
}
const TodaysAppointmentsSettings = {
    title: 'Upcoming Appointments',
    /*actions: [
        {label: 'Check In', component: (<CheckInPatient/>)},
        {label: 'Insurance Status', component: (<VerifyInsuranceAction verification={{status: 'unverified'}}/>)},
        {label: 'No Show', component: (<MarkNoShow/>)}
    ],*/
    columnheaders: [
        {
            name: "id",
            label: "Appointment ID",
            options: {
                display: false,
            }
        },
        {
            name: "patient",
            label: "Patient ID",
            options: {
                display: false,
            }
        },
        {
            name: "patient_display_name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "start",
            label: "Appointment Time",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "provider_display_name",
            label: "Provider",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => TodaysAppointmentActions({value, tableMeta, updateValue}),

            }
        },

    ],
};

export default TodaysAppointmentsSettings