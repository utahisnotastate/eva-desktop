import React from "react"
import {Typography} from "@material-ui/core";

function ViewClaimButton(tableMeta) {
    return (
        <div><Typography>Appeal Claim</Typography></div>
    )
}

const completedclaimscolumns = [
    {
        name: "claim_id",
        label: "Appointment Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "final_outcome",
        label: "Final Outcome",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "payor",
        label: "Patient Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "patient",
        label: "Patient",
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
        name: "date_finalized",
        label: "Date Finalized",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "payment_date",
        label: "Payment Date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "payment_amount",
        label: "Payment Amount",
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

export default completedclaimscolumns;