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

export default function ClinicalQueueTable(props) {
    const classes = useStyles();
    const fillButtons = [
        { color: "info", icon: Person },
        { color: "success", icon: Edit },
        { color: "danger", icon: Close }
    ].map((prop, key) => {
        return (
            <Button justIcon size="sm" color={prop.color} key={key}>
                <prop.icon />
            </Button>
        );
    });
    return (
        <Table
            tableHead={props.columnheaders}
            tableData={[
                ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
                ["2", "John Doe", "Design", "2012", "€ 89,241", fillButtons],
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
    );

}