import React from 'react';
import Button from '../../../../basestyledcomponents/Button';
import {Typography} from "@material-ui/core";

export default function PresentUnpresentAllergy(props) {
    if(props.status === 'unchecked') {
        return (
            <div>
                <Typography>Patient has not yet been asked if they have an allergy to {props.allergy}</Typography>
                <Button color={`primary`}>Report {props.allergy} Allergy</Button>
                <Button color={`primary`}>Patient denied {props.allergy} Allergy</Button>
            </div>
        );
    } else if(props.status === 'not_present') {
        return (
            <div>
                <Typography>Patient has denied having an allergy to {props.allergy}</Typography>
                <Button color={`primary`}>Report {props.allergy} Allergy</Button>
            </div>
        );
    } else {
        return (
            <div>


                <div>
                    <Typography>Patient has reported having an allergy to {props.allergy}</Typography>
                    <Button color={`primary`}>Remove {props.allergy} Allergy</Button>
                </div>
            </div>
        );
    }

}