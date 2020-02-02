import React, {useState} from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import InsuranceCard from "./InsuranceCard/insurancecard";

const useStyles = makeStyles(style);
const insurance = {
    type: "Primary",
    insurance_name: "TEst Insurance",
    member_id: '123456788',
    group_id: '1234',
    bin_number: '123123',
    pcn: 'zxcd',
    relationship_code: '18',
    date_effective: '1/1/2020'
}
const secondinsurance = {
    type: "secondary",
    insurance_name: "TEst Insurance",
    member_id: '123456788',
    group_id: '1234',
    bin_number: '123123',
    pcn: 'zxcd',
    relationship_code: '18',
    date_effective: '1/1/2020'
}
export default function Insurance(props) {
    const classes = useStyles();
    let { id } = useParams();


    return (
        <GridContainer style={{paddingTop: 50}} justify="center">
            <InsuranceCard insurance={insurance} />
            <InsuranceCard insurance={secondinsurance} />
        </GridContainer>
    );
}

/*
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
 */