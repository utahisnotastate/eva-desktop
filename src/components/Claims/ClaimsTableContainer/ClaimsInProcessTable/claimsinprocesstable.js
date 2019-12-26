import React, {useState} from "react"
import MUIDataTable from "mui-datatables";
import {Typography} from "@material-ui/core";
import claimsinprocesscolumns from "./claimsinprocesscolumns";

export default function ClaimsInProcessTable(props) {
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
        filter: false,
        download: false,
        selectableRows: 'none',
        viewColumns: false,
    });
    return (
        <MUIDataTable
            title={"Claims To Be Worked"}
            data={claims}
            columns={claimsinprocesscolumns}
            options={options}
        />
    );

}