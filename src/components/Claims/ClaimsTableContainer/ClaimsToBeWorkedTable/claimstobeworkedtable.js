import React, {useState} from "react"
import MUIDataTable from "mui-datatables";
import {Typography} from "@material-ui/core";

function BeginClaimButton(tableMeta) {
    return (
        <div><Typography>Begin Claim</Typography></div>
    )
}

const columns = [
    {
        name: "claim_type",
        label: "Claim Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "patient_id",
        label: "Patient id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "first_name",
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
        name: "View",
        label: "Actions",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender:  (value, tableMeta, updateValue) => BeginClaimButton(tableMeta),
        }
    },
];

export default function ClaimsToBeWorkedTable(props) {
    const [claims, setClaims] = useState([]);
    const [options, setOptions] = useState({
        searchOpen: true,
        serverSide: false,
        textLabels: {
            body: {
                noMatch: "SORRY NO MATCHES FOUND",
            }
        },
        searchPlaceholder: 'Search by patient name',
        print: false,
        elevation: 0,
        filter: false,
        download: false,
        selectableRows: 'none',
        viewColumns: false,
    });
    return (
        <MUIDataTable
            title={"Claims To Be Worked"}
            data={claims}
            columns={columns}
            options={options}
        />
    );
}

