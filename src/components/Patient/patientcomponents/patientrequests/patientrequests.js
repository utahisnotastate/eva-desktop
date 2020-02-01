import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
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
import NewRequest from "../../../Forms/Clinical/Patient/newrequest";
import RequestTimeLine from "../../../PatientRequests/TimeLine/timeline";
import Modal from '../../../basestyledcomponents/Modal/modal';
import axios from "axios";
import {useStateValue} from "../../../ClinicalQueue/context/ClinicalQueueContext";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(style);




export default function PatientRequests() {
    const classes = useStyles();
    let { id } = useParams();
    // const [patient, dispatch] =  useStateValue();
    // console.log(useStateValue());
    // console.log(patient);
    // const [activePatientRequests, setActivePatientRequests] = useState(patient.clinicalrequests);
    const patientrequests = useSelector(state => state.patientRequests);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/patientrequests`);
            return result.data;
        };

        fetchData().then(response => {
            // console.log(response);
            dispatch({type: 'load_patient_requests', patientrequests: response})
        });

    }, []);

    function viewRequestColumn(tableMeta) {
        // console.log(tableMeta);
        return (
            <RequestTimeLine requestId={tableMeta.rowData[0]} request_description={tableMeta.rowData[4]}/>
        );
    }

    function NameColumn(tableMeta) {

        return (
            <Typography>{tableMeta.rowData[2].first_name} {tableMeta.rowData[2].last_name}</Typography>
        );
    }

    const columns = [
        {
            name: "id",
            label: "Request ID",
            options: {
                display: false,
            }
        },
        {
            name: "type",
            label: "Type",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "patient.id",
            label: "Name",
            options: {
                display: false,
                filter: true,
                sort: true,
                empty: true,
            }
        },
        {
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "request_description",
            label: "Request Description",
        },
        {
            name: "patient_request_updates",
            label: "Request Updates",
            options: {
                display: false,
                empty: true,
            }
        },
        {
            name: 'viewrequest',
            label: 'View Request',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => viewRequestColumn(tableMeta),
            }
        },
    ];
    const [options, setOptions] = useState({
        searchOpen: false,
        serverSide: true,
        textLabels: {
            body: {
                noMatch: "SORRY NO MATCHES FOUND",
            }
        },
        searchPlaceholder: 'Search by patient name',
        elevation: 0,
        print: false,
        filter: true,
        download: false,
        selectableRows: 'none',
        viewColumns: false,
        onTableInit: () => { console.log('Init!')}
    });
    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={10}>
                <Modal buttontext={`New Request`} modaltitle={`New Request`} patientId={id} form={NewRequest} />
            </GridItem>
            <GridItem xs={12} sm={10}>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: 'Active',
                            tabIcon: Person,
                            tabContent: (
                                <MUIDataTable
                                    title={`Active Requests`}
                                    data={patientrequests.filter((patientrequest) => patientrequest.status === "active")}
                                    options={options}
                                    columns={columns}
                                />
                            )
                        },
                    ]}
                />
            </GridItem>
            </GridContainer>
    )
}
/*
const [requests, setRequests] = useState([]);
    const columnheaders = ["Type", "Status", "Date Opened", "Assigned to", "Last Updated", "Actions"];
    const fillButtons = [
        { color: "success", icon: Person },
    ].map((prop, key) => {
        return (
            <RequestTimeLine />
        );
    });
 */
/*
/*fetchData().then( response => {
            console.log(response);
            dispatch({
                type: 'load_patient_requests',
                clinicalrequests: response,
            })*/
