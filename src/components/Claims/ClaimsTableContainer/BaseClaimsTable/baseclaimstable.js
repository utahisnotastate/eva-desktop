import React, {useState} from "react"
import MUIDataTable from "mui-datatables";
import {Typography} from "@material-ui/core";

export default function BaseClaimsTable(props) {
    const [claims, setClaims] = useState([]);
    const {claims_filter, table_title, columns} = props;
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
            title={table_title}
            data={claims}
            columns={columns}
            options={options}
        />
    );

}