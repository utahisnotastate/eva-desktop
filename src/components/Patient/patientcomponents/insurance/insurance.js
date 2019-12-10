import React, {useState} from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import {Paper, Typography} from "@material-ui/core";
import ActiveInsuranceCard from './ActiveInsuranceCard/activeinsurancecard';
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";

const useStyles = makeStyles(style);

export default function Insurance(props) {
    const classes = useStyles();
    let { id } = useParams();
    const columnheaders = ["Company", "Member ID", "Date Effective", "Relationship to insured", "Prescription Authorization Number", "Radiology Authorization number", "Referral Authorization number", "View"];
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
        <GridContainer justify="center">
            <GridItem xs={12} sm={10}>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: 'Active',
                            tabIcon: Person,
                            tabContent: (
                                <ActiveInsuranceCard />
                            )
                        },
                        {
                            tabName: 'Previous',
                            tabIcon: Person,
                            tabContent: (
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={columnheaders}
                                    tableData={[
                                        ["1", "Andrew Mike", "Develop", "2013", "€ 99,225",'1', '1', fillButtons],
                                        ["2", "Utah Doe", "Design", "2012", "€ 89,241",'1', fillButtons],
                                        ["3", "Alex Mike", "Design", "2010", "€ 92,144",'1', fillButtons]
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
    );
}