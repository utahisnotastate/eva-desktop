import React, {useEffect} from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {makeStyles} from "@material-ui/core";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";

export default function ContactForm(props) {
    return (
        <GridContainer>
            <GridItem>
                <Typography>Contact</Typography>
            </GridItem>
        </GridContainer>
    );
}