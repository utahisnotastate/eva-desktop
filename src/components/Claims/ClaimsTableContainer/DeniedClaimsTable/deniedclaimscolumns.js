import React from "react"
import {Typography} from "@material-ui/core";

function AppealClaimButton(tableMeta) {
    return (
        <div><Typography>Appeal Claim</Typography></div>
    )
}

const deniedclaimscolumns = [
    {
        name: "claim_id",
        label: "Appointment Id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "appeal_status",
        label: "Appeal Status",
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
        name: "date_of_birth",
        label: "Date of Birth",
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
        name: "date_of_service",
        label: "Date of Service",
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
            customBodyRender:  (value, tableMeta, updateValue) => AppealClaimButton(tableMeta),
        }
    },
];

export default deniedclaimscolumns;
