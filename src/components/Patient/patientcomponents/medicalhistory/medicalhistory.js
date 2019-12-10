import React from "react";
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

const useStyles = makeStyles(style);

export default function MedicalHistory(props) {
    const classes = useStyles();
    let { id } = useParams();
    const columnheaders = ["Type", "Status", "Date Opened", "Assigned to", "Last Updated", "Actions"];
    const fillButtons = [
        { color: "success", icon: Person },
    ].map((prop, key) => {
        return (
            <Button justIcon size="sm" color={prop.color} key={key}>
                <prop.icon />
            </Button>
        );
    });

    return (
        <GridContainer style={{padding: 20}} justify="center">
            <GridItem xs={12}>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: 'Ears/Nose/Throat',
                            tabIcon: Person,
                            tabContent: (
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={columnheaders}
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
                            )
                        },
                        {
                            tabName: 'Pulmonary/Lungs',
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
                        {
                            tabName: 'GI/Stomach',
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
                        {
                            tabName: 'Skin',
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
                        {
                            tabName: 'Heart',
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
                        {
                            tabName: 'Bones/Joints/Muscles',
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
                        {
                            tabName: 'Endocrine',
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
                        {
                            tabName: 'Kidney/Urology',
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
                        {
                            tabName: 'Other',
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