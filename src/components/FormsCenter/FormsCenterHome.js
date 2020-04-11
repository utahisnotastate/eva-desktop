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

    const [systems, setSystems] = useState([{ label: 'Constitutional', component: 'ROSConstitutional' },
        { label: 'Allergic Immunologic', component: 'ROSAllergicImmunologic' },
        { label: 'Integumentary', component: 'ROSIntegumentary' },
        { label: 'Eyes',component: 'ROSEyes' },
        { label: 'Cardiovascular',component: 'ROSCardiovascular' },
        { label: 'Respiratory', component: 'ROSRespiratory' },
        { label: 'Musculoskeletal', component: 'ROSMusculoskeletal' },
        { label: 'Gastrointestinal', component: 'ROSGastrointestinal' },
        { label: 'Neurological',component: 'ROSNeurological' },
        { label: 'Genitourinary', component: 'ROSGenitourinary' },
        { label: 'Endocrine',component: 'ROSEndocrine' },
        { label: 'Hematologic',component: 'ROSHematologic' },
        { label: 'Psychiatric',component: 'ROSPsychiatric' },
        { label: 'Ears Nose Throat',component: 'ROSEarsNoseThroat' }]);

    const [physicalexams, setPhysicalExams] = useState([
        { label: 'HEENT', route: 'HEENTExam' },
        { label: 'Integumentary', route: 'IntegumentaryExam' },
        { label: 'Cardiovascular', route: 'CardiovascularExam' },
        { label: 'Musculoskeletal', route: 'MusculoskeletalExam' },
        { label: 'Gastrointestinal', route: 'GastrointestinalExam' },
        { label: 'Neurological', route: 'NeurologicalExam' },
        { label: 'Male Genitoruinary', route: 'MaleGenitourinaryExam' },
        { label: 'Female Genitourinary',route: 'FemaleGenitourinaryExam' },
        { label: 'Hematologic Lymphatic', route: 'HematologicLymphaticExam' },
        { label: 'Psychiatric',route: 'PsychiatricExam' },
    ]);

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
                            <Typography>Clinical Appointment Forms</Typography>
                            <ul className="w3-ul">
                                <li><NavLink to={`/formscenter/vitalsform`}><Typography>Vitals Form</Typography></NavLink></li>
                                <li><NavLink to={`/formscenter/patientcomplaintsform`}><Typography>Patient Complaints Form</Typography></NavLink></li>
                                <li><NavLink to={`/formscenter/assessmentform`}><Typography>Assessment Form</Typography></NavLink></li>
                                <li><NavLink to={`/formscenter/planform`}><Typography>Plan Form</Typography></NavLink></li>
                            </ul>
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
                            <Typography>Customize Physical Exam Forms</Typography>
                            <ul className="w3-ul">
                                {physicalexams.map(physicalexam => (
                                    <li><Typography>{physicalexam.label}</Typography></li>
                                ))}
                            </ul>
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
                            <Typography>Customize Review of System Forms</Typography>
                            <ul className="w3-ul">
                                {systems.map(system => (
                                    <li><Typography>{system.label}</Typography></li>
                                ))}
                            </ul>
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
                            <Typography>Create Custom Appointment Form from scratch</Typography>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}
// "/formscenter/createmedicalchart"
// <NavLink to={`/scheduling/${id}`}> <h4 className={classes.cardTitle}>Schedule Appointment</h4></NavLink>