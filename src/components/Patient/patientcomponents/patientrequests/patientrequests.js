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

const useStyles = makeStyles(style);




export default function PatientRequests(props) {
    const classes = useStyles();
    let { id } = useParams();
    const [activePatientRequests, setActivePatientRequests] = useState();

    function viewRequestColumn(tableMeta) {
        console.log(tableMeta)
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
            name: "patient",
            label: "Name",
            options: {
                filter: true,
                sort: true,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => NameColumn(tableMeta),
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
            options: {
                display: false,
            }
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

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/patientrequests`);
            console.log(result.data)
            setActivePatientRequests(result.data);
        };
        fetchData();
    }, []);

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
                                    data={activePatientRequests}
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