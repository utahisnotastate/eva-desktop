import React, {Component, useEffect} from 'react';
import useForm from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
    },
    labeltext: {
        color: '#000000',
    },
    inputfield: {
        padding: 20,
    }
});


export default function DemographicsForm(props) {
    const classes = useStyles();
    let { id } = useParams();
    const { register, handleSubmit, setValue, reset } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics`);
            reset({
                first_name: result.data[0].patient.first_name,
                middle_name: result.data[0].patient.middle_name,
                last_name: result.data[0].patient.last_name,
                 preferred_name: result.data[0].patient.preferred_name,
            }
            );
        };
        fetchData();
    }, []);
    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label><Typography className={classes.labeltext} variant="body1">First Name:</Typography></label>
                <RHFInput setValue={setValue} register={register} name="first_name" as={<TextField className={classes.inputfield}/>} />
            </div>
            <div>
                <label><Typography className={classes.labeltext}  variant="body1">Middle Name:</Typography></label>
                <RHFInput setValue={setValue} register={register} name="middle_name" as={<TextField className={classes.inputfield}/>} />
            </div>
            <div>
                <label><Typography className={classes.labeltext} variant="body1">Last Name:</Typography></label>
                <RHFInput setValue={setValue} register={register} name="last_name" as={<TextField className={classes.inputfield}/>} />
            </div>
            <div>
                <label><Typography className={classes.labeltext} variant="body1">Preferred Name:</Typography></label>
                <RHFInput setValue={setValue} register={register} name="preferred_name" as={<TextField className={classes.inputfield}/>} />
            </div>
        </form>
    )

}