import React from "react";
import {Typography} from "@material-ui/core";
import Button from '../../../../basestyledcomponents/Button';

export default function AllergyList(props) {
    if(props.status === 'not_present') {
        return (
            <div>
                <Typography>Pattient has denied any {props.allergy} Allergy</Typography>
                <Button color={`primary`}>Report {props.allergy} Allergy</Button>
            </div>
        );
    }
}