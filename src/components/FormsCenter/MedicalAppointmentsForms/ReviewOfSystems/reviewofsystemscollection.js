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

export default function ReviewofSystemsMenu() {

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
        { label: 'Ears Nose Throat',component: 'ROSEarsNoseThroat' }])
    const classes = useStyles();
    console.log(systems);
    return (
        <div>
            <GridContainer direction="row" alignContent="center">
                <GridItem className={`w3-center w3-margin`} xs={8}><Card><Typography variant="h5">Please Select a ROS Form you
                    would like to modify or view</Typography></Card></GridItem>
                {systems.map((system) => (
                    <GridItem key={2} xs={6} sm={4} >
                        <Card>
                            <CardHeader icon>
                                <CardIcon  color="primary">
                                    <LanguageIcon />
                                </CardIcon>
                            </CardHeader>
                            <CardBody>
                                <Typography>{`${system.label} Review of Systems`}</Typography>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </GridContainer>
        </div>

    );
}