import React from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";

export default function AddInsuranceForm(props) {
    const { register, control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller name="insurance_name" as={<TextField label={`Insurance NAme`} />} control={control} />
            </div>
        </form>

    );

}