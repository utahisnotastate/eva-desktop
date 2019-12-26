import {Typography} from "@material-ui/core";
import React from "react"


function ViewClaimButton(tableMeta) {
    return (
        <div><Typography>View Claim</Typography></div>
    )
}
const claimsinprocesscolumns = [
    {
        name: "appointment_id",
        label: "Appointment Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "patient_name",
        label: "Patient Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "provider",
        label: "Provider",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "assigned_employee",
        label: "Billing Employee Working On It",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "View",
        label: "Actions",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender:  (value, tableMeta, updateValue) => ViewClaimButton(tableMeta),
        }
    },
];

export default claimsinprocesscolumns;