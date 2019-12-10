import React from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {useParams, useRouteMatch,} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import Person from "@material-ui/icons/Person";
import Button from "../../../basestyledcomponents/Table/Button";
import {Paper, Typography} from "@material-ui/core";
import CustomTabs from "../../../basestyledcomponents/CustomTabs/CustomTabs";

const useStyles = makeStyles(style);

export default function SocialHistory(props) {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    let { id } = useParams();
    console.log('path is ' + path);
    console.log('url is ' + url);
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
        <GridContainer justify="center">
            <GridItem xs={12} sm={10}>
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: 'Alcohol History',
                            tabIcon: Person,
                            tabContent: (
                                <Typography>Alcohol History</Typography>
                            )
                        },
                        {
                            tabName: 'Tobacco History',
                            tabIcon: Person,
                            tabContent: (
                                <Typography>Tobacco History</Typography>
                            )
                        },
                        {
                            tabName: 'Drug History',
                            tabIcon: Person,
                            tabContent: (
                                <Typography>Drug History</Typography>
                            )
                        },
                    ]}
                />
            </GridItem>
        </GridContainer>
    )
}