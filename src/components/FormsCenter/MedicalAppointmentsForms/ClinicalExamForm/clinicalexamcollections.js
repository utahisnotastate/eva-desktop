import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "../../../basestyledcomponents/Card/Card";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardIcon from "../../../basestyledcomponents/Card/CardIcon";
import CardText from "../../../basestyledcomponents/Card/CardText";
import LanguageIcon from '@material-ui/icons/Language';

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

export default function ClinicalExamsMenu() {
    const [exams, setExams] = useState([
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
    ])
    const classes = useStyles();
    return (
        <div>
            <GridContainer direction="row" alignContent="center">
                <GridItem className={`w3-center w3-margin`} xs={8}><Card><Typography variant="h5">Please Select a Clinical Exam Form you
                    would like to modify or view</Typography></Card></GridItem>
                {exams.map((exam) => (
                    <GridItem key={2} xs={6} sm={4} >
                        <Card>
                            <CardHeader icon>
                                <CardIcon  color="primary">
                                    <LanguageIcon />
                                </CardIcon>
                            </CardHeader>
                            <CardBody>
                                <Typography>{`${exam.label} Exam Form`}</Typography>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </GridContainer>
        </div>

    );
}