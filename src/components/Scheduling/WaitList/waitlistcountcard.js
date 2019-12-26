import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../basestyledcomponents/Card/Card";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardText from "../../basestyledcomponents/Card/CardText";

var styles = {
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

export default function WaitListCountCard(props) {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color={`primary`} text>
                <CardText color={`primary`}>
                    <h4 className={classes.cardTitle}>1</h4>
                </CardText>
            </CardHeader>
            <CardBody>
                Patients on Waitlist for earlier appointment
            </CardBody>
        </Card>
    );
}
