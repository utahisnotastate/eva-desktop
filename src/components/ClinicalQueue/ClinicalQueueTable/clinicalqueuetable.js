import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from '../../basestyledcomponents/Table/Table';
import Button from '../../basestyledcomponents/Table/Button'
import MUIDataTable from "mui-datatables";
import style from '../../basestyledcomponents/Table/contentAreas'

const useStyles = makeStyles(style);
const actionsrowstyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#54f',
};

function ButtonRow(actions, rowData) {
    console.log(rowData);
    return (
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
            {actions.map((action, key) => {
                return (
                    <div style={{margin: 5}} key={key}>
                        {action.component}
                    </div>
                );
            })}
        </div>
    )
}



export default function ClinicalQueueTable(props) {
     const {table_actions, columnheaders, expandable, title} = props;
     const [appointments, setAppointments] = useState(props.data);
    const classes = useStyles();
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
        <MUIDataTable
            title={title}
            data={props.data.filter(appointment => appointment.status === props.clinicalqueuefilter)}
            columns={columnheaders}
            options={options}
        />
    );

}