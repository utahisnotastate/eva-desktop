import React, { Component, useEffect, useState} from "react";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from "axios";
import DemographicsForm from "./demographicsform";

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
    const classes = useStyles();
    let { id } = useParams();
    const [demographics, setDemographics] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics`);
            console.log(result.data[0]);
        };
        fetchData();
    });
    return (
        <Grid container className={classes.root} alignItems="flex-start">
            <div>
                <Paper className={classes.areaicon} square>
                    <AssignmentIcon />
                    <Typography className={classes.areatitletext} variant="subtitle2">Demographics</Typography>
                </Paper>
            </div>
            <div>
                <Paper className={classes.areaicon} square>
                    <DemographicsForm />
                </Paper>
            </div>
            <div>
                <Paper className={classes.areaicon} square>
                    <AssignmentIcon />
                    <Typography className={classes.areatitletext} variant="subtitle2">Demographics for patient: {id}</Typography>
                </Paper>
            </div>

        </Grid>
    )
}