import React, {useEffect, useState} from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {makeStyles} from "@material-ui/core";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";

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
    },
    options: {
        width: 200,
        padding: 20,
    }
});

export default function ContactForm(props) {
    const { register, handleSubmit, setValue, reset, control } = useForm();
    let { id } = useParams();
    const classes = useStyles();
    const [formfields, setFormFields] = useState([
        {label: 'Type', name: 'type'},
        {label: 'Number', name: 'number'},
        {label: 'When To Call', name: 'when_to_call', component: 'TextField'},
        {label: 'Special Instructions', name: 'special_instructions', component: 'TextField'},
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/contactinformation/`);
            console.log(result);
            reset({
                    type: result.data[0].type,
                    number: result.data[0].number,
                    when_to_call: result.data[0].when_to_call,
                    special_instructions: result.data[0].special_instructions,
                }
            );

        };
        fetchData().catch(error => console.log(error));
    }, []);

    return (
        <GridContainer className={classes.root}>
            <GridItem>
                <div>
                    <label><Typography className={classes.labeltext} variant="body1">Type:</Typography></label>
                    <select name="type" ref={register}>
                        <option value="cell">cell</option>
                        <option value="home">home</option>
                        <option value="work">work</option>
                    </select>
                </div>
            </GridItem>
            <GridItem>
                <div>
                    <label><Typography className={classes.labeltext} variant="body1">When To Call:</Typography></label>
                    <select name="when_to_call" ref={register}>
                        <option value="morning">morning</option>
                        <option value="daytime">daytime</option>
                        <option value="evening">evening</option>
                        <option value="anytime">anytime</option>
                    </select>
                </div>
            </GridItem>
            {formfields.filter(field => field.label !== 'Type' && field.label !== 'When To Call').map((Formfield => (
                <GridItem key={Formfield.label}>
                    <div>
                        <Controller name={Formfield.name}
                                    as={<TextField label={Formfield.label} className={classes.inputfield}/>}
                                    control={control}
                        />
                    </div>
                </GridItem>
            )))}
        </GridContainer>
    );
}