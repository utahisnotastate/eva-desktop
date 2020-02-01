import React, {useEffect} from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {NavLink, useParams} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import {Paper, Typography} from "@material-ui/core";
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";
import MUIDataTable from "mui-datatables";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import moment from "moment";

const API_URL = "http://127.0.0.1:8000/api";
const useStyles = makeStyles(style);

function ViewAppointment(props) {
    console.log(props.tableMeta);
    return (
        <div>
            <NavLink to={`/appointments/${props.tableMeta.rowData[0]}`}>
                <Typography>View Appointment</Typography>
            </NavLink>
        </div>
    );
}

export default function AppointmentHistory(props) {
    const classes = useStyles();
    let { id } = useParams();
    const appointmenthistory = useSelector(state => state.patientAppointmentHistory)
    const dispatch = useDispatch();
    const columnheaders = [
        {
            name: "id",
            label: "Appointment ID",
            options: {
                display: false,
            }
        },
        {
            name: "start",
            label: "Appointment Date",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "provider_display_name",
            label: "Provider",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => ViewAppointment({value, tableMeta, updateValue}),

            }
        },

    ];
    const fillButtons = [
        { color: "success", icon: Person },
    ].map((prop, key) => {
        return (
            <Button justIcon size="sm" color={prop.color} key={key}>
                <prop.icon />
            </Button>
        );
    });
    useEffect(() => {
        //gets appointments on mount
        const fetchData = async () => {
            const result = await axios.get(`${API_URL}/patients/${id}/appointments`);
            // console.log(result);
            let appointments = result.data;

            return appointments;

        };
        fetchData().then(response => {
            console.log(response);
            dispatch({type: 'initial_load_patient_history', appointmenthistory: response})
        }).catch(error => console.log(error));
    }, []);

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={10}>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: 'Upcoming',
                            tabIcon: Person,
                            tabContent: (
                                <MUIDataTable
                                    title="Upcoming"
                                    data={appointmenthistory.filter((appointment) => moment(appointment.start).isSameOrAfter() )}
                                    columns={columnheaders}
                                    options={{
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
                                    }}
                                />
                            )
                        },
                        {
                            tabName: 'Past',
                            tabIcon: Person,
                            tabContent: (
                                <MUIDataTable
                                    title="Upcoming"
                                    data={appointmenthistory.filter((appointment) => moment(appointment.start).isBefore() )}
                                    columns={columnheaders}
                                    options={{
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
                                    }}
                                />
                            )
                        },
                    ]}
                />
            </GridItem>
        </GridContainer>
    );
}