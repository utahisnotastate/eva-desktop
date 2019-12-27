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
    const classes = useStyles();
    const [options, setOptions] = useState({
        searchOpen: false,
        serverSide: false,
        textLabels: {
            body: {
                noMatch: "SORRY NO MATCHES FOUND",
            }
        },
        expandableRows: expandable,
        expandableRowsOnClick: true,
        renderExpandableRow: (rowData, rowMeta) => {
            const colSpan = rowData.length + 1;
            return (
                <TableRow>
                    <TableCell colSpan={colSpan}>
                        {ButtonRow(table_actions, rowData, rowMeta)}
                    </TableCell>
                </TableRow>
            );
        },
        searchPlaceholder: 'Search by patient name',
        elevation: 0,
        print: false,
        filter: true,
        download: false,
        selectableRows: 'none',
        viewColumns: false,
    });
    return (
        <MUIDataTable
            title={title}
            data={[
                { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
                { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
                { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
                { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
            ]}
            columns={columnheaders}
            options={options}
        />
    );

}