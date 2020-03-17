import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import CardIcon from "../basestyledcomponents/Card/CardIcon";
import LanguageIcon from '@material-ui/icons/Language';
import {Button, Typography} from "@material-ui/core";
import './formscenter.css';
import {NavLink} from "react-router-dom";

const styles = {
    cardTitle: {
        marginTop: "0",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    root: {
        margin: 15,
    },
};
const useStyles = makeStyles(styles);


export default function FormsCenterHome() {
    const classes = useStyles();
    return (
        <div style={{padding: 15}}>
            <GridContainer>
                <GridItem xs={10} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon  color="primary">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <NavLink to={`/formscenter/createmedicalchart`}> <h4 className={classes.cardTitle}><Typography>Create Medical Appointment Form</Typography></h4></NavLink>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={10} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon  color="primary">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <Typography>Create Family Medical History Form</Typography>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={10} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon  color="primary">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <Typography>Create Administration Form</Typography>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}
// "/formscenter/createmedicalchart"
// <NavLink to={`/scheduling/${id}`}> <h4 className={classes.cardTitle}>Schedule Appointment</h4></NavLink>