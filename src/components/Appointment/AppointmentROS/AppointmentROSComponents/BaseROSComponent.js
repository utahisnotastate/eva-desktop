import React, {useEffect, useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import {useRouteMatch} from "react-router-dom";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";



export default function BaseROSComponent({label, fields}) {
    const methods = useForm();
    const { handleSubmit, control, reset, register } = methods;

    const onSubmit = data => console.log(data);
    let { path, url } = useRouteMatch();

    return (
        <>
            <CardHeader color={`primary`}>
                <h4>{label}</h4>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (
                    <>
                        <field.component name={field.name} register={register} label={field.label}/>

                    </>
                ))}
                <input type={`submit`} value={`Save`}/>

            </form>
        </>
    )
}

/*
<FormControlLabel control={<field.component name={field.name} inputRef={register} />} label={field.label} />
<Controller name={field.name} as={<field.component />} control={control} value={field.value} />

const fields = [
        {name: 'no_known_allergies', label: 'No Known Allergies', component: SingleCheckboxwithLabel, value: true, fieldoptions: false},
        {name: 'drug_allergies_present', label: 'Known Drug Allergies', component: SingleCheckboxwithLabel, value: true, fieldoptions: false}
        ]
 */