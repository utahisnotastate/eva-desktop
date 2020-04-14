import React, {useEffect, useState} from 'react';
import { useForm, Controller } from "react-hook-form";
import {useRouteMatch} from "react-router-dom";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";



export default function BasePhysicalExamComponent({label, fields}) {
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
                        <field.component options={field.fieldoptions} key={field.name} name={field.name} register={register} label={field.label}/>

                    </>
                ))}
                <input type={`submit`} value={`Save`}/>

            </form>
        </>
    )
}