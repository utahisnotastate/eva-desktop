import React, {useEffect, useState} from "react";
import axios from "axios";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import {Paper, Typography} from "@material-ui/core";
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";
import MUIDataTable from "mui-datatables";
import {useSelector, useDispatch} from "react-redux";
import Modal from "../../../basestyledcomponents/Modal/modal";
import AddNewMedicationForm from "../../../Forms/Clinical/Patient/addNewMedication";

const useStyles = makeStyles(style);
const API_URL = "http://127.0.0.1:8000/api";

function AddNewMedication(props) {
    return (
        <Modal buttontext={`Add Medication`} form={AddNewMedicationForm}/>
    );
}



export default function Medications(props) {
    const classes = useStyles();
    let { id } = useParams();
    const dispatch = useDispatch();
    const medications = useSelector(state => state.patient.patientmedications)
    const [options, setOptions] = useState({
        searchOpen: false,
        serverSide: false,
        textLabels: {
            body: {
                noMatch: "SORRY NO MATCHES FOUND",
            }
        },
        elevation: 2,
        searchPlaceholder: 'Search by medication name',
        print: false,
        filter: false,
        download: false,
        customToolbar: AddNewMedication,
        selectableRows: 'none',
        viewColumns: false,
    });
    const columns = [
        {
            name: "prescribed_by",
            label: "Prescribed by",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Medication",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "dosage",
            label: "Dosage",
        },
        {
            name: "frequency",
            label: "Frequency",
        },
    ];

    useEffect(() => {
        async function getPatientMedications() {
            const result = await axios(`${API_URL}/patients/${id}/medications/`);
            console.log(result.data);
            return result.data;
        }
        getPatientMedications().then(response => {
            dispatch({type: 'load_all_medications', medications: response })
        })

    }, []);

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={10}>
                <MUIDataTable
                    title={`Medications`}
                    data={medications}
                    columns={columns}
                    options={options}
                />
            </GridItem>
        </GridContainer>
    )
}