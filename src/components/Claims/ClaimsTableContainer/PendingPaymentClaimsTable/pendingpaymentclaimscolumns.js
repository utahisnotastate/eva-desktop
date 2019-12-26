import React from "react"
import {Typography} from "@material-ui/core";

function ViewClaimButton(tableMeta) {
    return (
        <div><Typography>View Claim</Typography></div>
    )
}

const pendingpaymentclaimscolumns = [
    {
        name: "claim_id",
        label: "Claim ID",
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
        name: "patient",
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
        name: "date_approved",
        label: "Date Approved",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "estimated_payment_date",
        label: "Estimated Payment Date",
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

export default pendingpaymentclaimscolumns;