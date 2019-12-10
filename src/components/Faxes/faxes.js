import React, {Fragment, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import MUIDataTable from "mui-datatables";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
    },
    textfield: {
        marginRight: 10,
        marginLeft: 10,
    }
}));
function actionsColumn(tableMeta) {
    return (
        <div><NavLink to={`/patient/${tableMeta.rowData[0]}/demographics`}><Button color="primary">View Fax</Button></NavLink></div>
    );
}
const columns = [
    {
        name: "id",
        label: "Patient id",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "first_name",
        label: "Date Recieved",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "last_name",
        label: "Time Received",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "date_of_birth",
        label: "Type",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Company",
        label: "Phone Number",
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
            customBodyRender:  (value, tableMeta, updateValue) => actionsColumn(tableMeta),
        }
    },
];

export default function Faxes() {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://127.0.0.1:8000/api/patients/");
            setPatients([...result.data]);
        };
        fetchData();
    }, []);
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
        <GridContainer className={classes.root} justify="center">
            <GridItem xs={12} sm={12} md={10}>
                <MUIDataTable
                    title={"Patients"}
                    data={patients}
                    columns={columns}
                    options={options}
                />
            </GridItem>
        </GridContainer>
    );
}