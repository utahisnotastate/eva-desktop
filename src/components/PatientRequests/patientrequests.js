import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import RequestTimeLine from "./TimeLine/timeline";
import Table from '../basestyledcomponents/Table/Table'
import style from '../basestyledcomponents/Table/contentAreas';
import Button from '../basestyledcomponents/Table/Button';
import CustomTabs from "../basestyledcomponents/CustomTabs/CustomTabs";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Person from "@material-ui/icons/Person";
import axios from "axios";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(style);

function viewRequestColumn(tableMeta) {
    console.log(tableMeta)
    return (
        <RequestTimeLine request_description={tableMeta.rowData[3]}/>
    );
}

function NameColumn(tableMeta) {

    return (
        <Typography>{tableMeta.rowData[1].first_name} {tableMeta.rowData[1].last_name}</Typography>
    );
}

const columns = [
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

export default function PatientRequests() {
    const [activePatientRequests, setActivePatientRequests] = useState();
    const classes = useStyles();
    let { id } = useParams();
    const columnheaders = ["Type", "Name", "Date of Birth", "Actions"];
    const fillButtons = [
        { color: "success", icon: Person },
    ].map((prop, key) => {
        return (
            <RequestTimeLine />
        );
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/clinicalrequests`);
            console.log(result.data)
            setActivePatientRequests(result.data);
        };
        fetchData();
    }, []);

    return (
        <GridContainer justify="center">
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
                        {
                            tabName: 'Recently Completed',
                            tabIcon: Person,
                            tabContent: (
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={columnheaders}
                                    tableData={[
                                        ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
                                        ["2", "Utah Doe", "Design", "2012", "€ 89,241", fillButtons],
                                        ["3", "Alex Mike", "Design", "2010", "€ 92,144", fillButtons]
                                    ]}
                                    customCellClasses={[
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ]}
                                    customClassesForCells={[0, 4, 5]}
                                    customHeadCellClasses={[
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ]}
                                    customHeadClassesForCells={[0, 4, 5]}
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
["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
                                        ["2", "John Doe", "Design", "2012", "€ 89,241", fillButtons],
                                        ["3", "Alex Mike", "Design", "2010", "€ 92,144", fillButtons]

                                        <Table
                                    tableHeaderColor="primary"
                                    tableHead={columnheaders}
                                    tableData={activePatientRequests}
                                    customCellClasses={[
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ]}
                                    customClassesForCells={[0, 4, 5]}
                                    customHeadCellClasses={[
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ]}
                                    customHeadClassesForCells={[0, 4, 5]}
                                />
 */