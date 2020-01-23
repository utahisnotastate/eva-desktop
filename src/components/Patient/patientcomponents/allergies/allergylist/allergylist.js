import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Table from '../../../../basestyledcomponents/Table/Table';
import style from '../../../../basestyledcomponents/Table/contentAreas';
import Button from '../../../../basestyledcomponents/Button';

const useStyles = makeStyles(style);

export default function AllergyList(props) {
    console.log(typeof(props.allergies));
    console.log(typeof([]));
    // console.log(props.allergies.length);
    const classes = useStyles();
    const columnheaders = ["","drug"];

    if(props.allergies) {
        return (
            <div>
                <Typography>Allergies</Typography>
                <ul>
                {props.allergies.map(allergy => (
                   <li key={allergy.drug}><Typography>{allergy.drug}</Typography></li>
                ))}
                </ul>
            </div>

        );
    } else {
        return (
            <div>
                <Typography>Pattient has denied any {props.allergy} Allergies</Typography>
                <Button color={`primary`}>Report {props.allergy} Allergy</Button>
            </div>
        );

    }
}