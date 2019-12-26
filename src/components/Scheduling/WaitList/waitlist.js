import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from '../../basestyledcomponents/Grid/GridItem';
import {makeStyles} from "@material-ui/core";

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
        <NavLink to={`/schedule/${tableMeta.rowData[0]}`}><Button color={`primary`}>Schedule Appointment</Button></NavLink>
    );
}

const waitlistcolumns = [
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
        name: "contact_number",
        label: "Contact Number",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "current_appointment_date",
        label: "Current Appointment Date",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "length_on_waitlist",
        label: "Length of time on wait list",
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

export default function WaitList(props) {
    const classes = useStyles();
    const [waitlist, setWaitlist] = useState([]);
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
                    title={"Wait List"}
                    data={waitlist}
                    columns={waitlistcolumns}
                    options={options}
                />
            </GridItem>
        </GridContainer>
    );
}