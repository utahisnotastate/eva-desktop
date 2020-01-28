import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "../basestyledcomponents/Card/Card";
import CardBody from "../basestyledcomponents/Card/CardBody";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardIcon from "../basestyledcomponents/Card/CardIcon";
import CardText from "../basestyledcomponents/Card/CardText";
import LanguageIcon from '@material-ui/icons/Language';
import PatientSearch from "./PatientSearch/patientsearch";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const styles = {
    cardTitle: {
        marginTop: "0",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
const useStyles = makeStyles(styles);

function Home() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer direction="column" alignContent="center">
                <GridItem xs={12} sm={12} md={4}>
                    <PatientSearch />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon  color="primary">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Practice News</h4>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to "Naviglio" where you can enjoy the main night
                            life in Barcelona...
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon color="primary">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Patient Requests I'm assigned too</h4>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to "Naviglio" where you can enjoy the main night
                            life in Barcelona...
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader icon>
                            <CardIcon color="success">
                                <LanguageIcon />
                            </CardIcon>
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>My Schedule</h4>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to "Naviglio" where you can enjoy the main night
                            life in Barcelona...
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>

    );
}

export default Home;