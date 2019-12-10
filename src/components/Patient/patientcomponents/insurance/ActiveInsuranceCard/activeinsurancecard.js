import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui ico
import Card from "../../../../basestyledcomponents/Card/Card";
import CardBody from "../../../../basestyledcomponents/Card/CardBody";
import GridContainer from "../../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../../basestyledcomponents/Grid/GridItem";
import imagesStyles from "./imagesStyles";

const style = {
    ...imagesStyles
};
const useStyles = makeStyles(style);

export default function CardExampleImages() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem>
        <Card style={{ width: "20rem" }}>
            <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={classes.imgCardTop}
                src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                alt="Card-img-cap"
            />
            <CardBody>
                <p>
                    front of card
                </p>
            </CardBody>
        </Card>
            </GridItem>
            <GridItem>
                <Card style={{ width: "20rem" }}>
                    <img
                        style={{ height: "180px", width: "100%", display: "block" }}
                        className={classes.imgCardTop}
                        src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                        alt="Card-img-cap"
                    />
                    <CardBody>
                        <p>
                            Back of card
                        </p>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}