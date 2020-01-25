import React, {useState, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {makeStyles} from "@material-ui/core";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from '../../../basestyledcomponents/Grid/GridItem';

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

export default function AddressForm(props) {
    const { register, handleSubmit, setValue, reset, control } = useForm();
    let { id } = useParams();
    const classes = useStyles();
    const onSubmit = data => console.log(data);
    const [formfields, setFormFields] = useState([
        {label: 'Address One', name: 'address_one'},
        {label: 'Address Two', name: 'address_two'},
        {label: 'City', name: 'city'},
        {label: 'State', name: 'state'},
        {label: 'Zip Code', name: 'zip_code'},
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/address/`);
            console.log(result);

            return result.data;
        };
        fetchData().then(response => {
            if(response === undefined) {
                console.log('new patient so settings arent there');
            } else {
                reset({
                        address_one: response[0].address_one,
                        address_two: response[0].address_two,
                        city: response[0].city,
                        state: response[0].state,
                        zip_code: response[0].zip_code,
                    }
                );

            }
        }).catch(error => console.log(error));
    }, []);
    return (
        <GridContainer className={classes.root}>
            {formfields.map((formfield => (
                <GridItem key={formfield.label}>
                    <div>
                        <Controller name={formfield.name}
                                    as={<TextField label={formfield.label} className={classes.inputfield}/>}
                                    control={control}
                        />
                    </div>
                </GridItem>
            )))}

        </GridContainer>
    );
}

/*
reset({
                gender: result.data[0].gender,
                race: result.data[0].race,
                marital_status: result.data[0].marital_status,
                employment_status: result.data[0].employment_status,
                email: result.data[0].email
            });
 */