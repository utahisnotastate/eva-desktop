import React, { Component, useEffect, useState} from "react";
import { Formik } from "formik";
import { useForm, FormContext, useFormContext } from "react-hook-form"
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from "axios";
import BasicInfoForm from "./basicinfo";
import AddressForm from "./addressform";
import ContactForm from "./contactinfoform";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    formcontainer: {
      marginBottom: 15,
    },
    areaicon: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
    },
    areatitletext: {
        padding: 20,
    }
});

export default function Demographics(props) {
    const methods = useForm();
    const onSubmit = data => { console.log(data) }
    const classes = useStyles();
    let { id } = useParams();
    const [demographics, setDemographics] = useState();
    return (
        <FormContext {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Grid container className={classes.root} alignItems="flex-start">
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Name</Typography>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <BasicInfoForm/>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.areaicon} square>
                        <AssignmentIcon/>
                        <Typography className={classes.areatitletext} variant="subtitle2">Address</Typography>
                    </Paper>
                </div>
                    <div>
                        <Paper className={classes.areaicon} square>
                            <AddressForm />
                        </Paper>
                    </div>
                    <div>
                        <Paper className={classes.areaicon} square>
                            <AssignmentIcon/>
                            <Typography className={classes.areatitletext} variant="subtitle2">Contact Info</Typography>
                        </Paper>
                    </div>
                    <div>
                        <Paper className={classes.areaicon} square>
                            <ContactForm />
                        </Paper>
                    </div>
                </Grid>
                <input type="submit" value={`Save`} />
            </form>
        </FormContext>
    )
}

/*
useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
            console.log(result);
        };
        fetchData();
    });
 */