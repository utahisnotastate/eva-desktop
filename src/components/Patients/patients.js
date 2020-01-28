import React, {Fragment, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import Button from "@material-ui/core/Button";
import Button from '../basestyledcomponents/Button';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import MUIDataTable from "mui-datatables";
import {NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import Modal from '../basestyledcomponents/Modal/modal';
import CreateNewPatient from "./createnewpatient";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
    },
    textfield: {
        marginRight: 10,
        marginLeft: 10,
    }
}));

const API_URL = "http://127.0.0.1:8000/api/patients/";
function actionsColumn(tableMeta) {
    // console.log(tableMeta);
    return (
        <NavLink to={`/patient/${tableMeta.rowData[0]}/demographics`}><Button color="primary">View Chart</Button></NavLink>
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
        label: "First Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "last_name",
        label: "Last Name",
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
        name: "gender",
        label: "Gender",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "actions",
        label: "Actions",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender:  (value, tableMeta, updateValue) => actionsColumn(tableMeta),
        }
    },
];
function addNewPatientButton() {
    return (
        <Modal buttontext={`Create New Patient`} form={CreateNewPatient} />
    );
}
export default function Patients() {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(API_URL);
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
        customToolbar: addNewPatientButton,
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