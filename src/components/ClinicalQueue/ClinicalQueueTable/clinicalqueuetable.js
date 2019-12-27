import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Table from '../../basestyledcomponents/Table/Table';
import Button from '../../basestyledcomponents/Table/Button'
import style from '../../basestyledcomponents/Table/contentAreas'

const useStyles = makeStyles(style);
const actionsrowstyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#54f',
};

function ButtonRow(actions) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
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
     const {table_actions} = props;
    const classes = useStyles();
    const fillButtons = table_actions.map((action, key) => {
        return (
            <div key={key}>
                {action.component}
            </div>
        );
    });

    return (
        <Table
            tableHead={props.columnheaders}
            tableData={[
                ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", ButtonRow(table_actions)],
                ["2", "John Doe", "Design", "2012", "€ 89,241", ButtonRow(table_actions)],
                ["3", "Alex Mike", "Design", "2010", "€ 92,144", ButtonRow(table_actions)]
            ]}
            customCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight,
            ]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textCenter,
            ]}
            customHeadClassesForCells={[0, 4, 5]}
        />
    );

}

/*
const fillButtons = table_actions.map((action, key) => {
        return (
            <div key={key}>
                {action.component}
            </div>
        );
    });
 */