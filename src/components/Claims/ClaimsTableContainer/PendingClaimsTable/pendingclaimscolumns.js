import {Typography} from "@material-ui/core";
import React from "react"


function ViewClaimButton(tableMeta) {
    return (
        <div><Typography>View Claim</Typography></div>
    )
}
const pendingclaimscolumns = [
    {
        name: "claim_id",
        label: "Appointment Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "payor",
        label: "Payor",
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
        label: "Date Submitted",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "assigned_employee",
        label: "Claim Acknowledged",
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

export default pendingclaimscolumns;