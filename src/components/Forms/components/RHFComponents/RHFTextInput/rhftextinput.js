import React from 'react';
import { RHFInput } from 'react-hook-form-input';
import TextField from "@material-ui/core/TextField";
import './rhftextinput.css';

export default function RHFTextInput(props) {
    return (
        <RHFInput
            as={<TextField multiline={props.multiline} rows={props.rows} fullWidth={true}/>}
            name={props.name}
            placeholder={props.placeholder}
            label={props.label}
            className="select-input"
            register={props.register}
            setValue={props.setValue}
        />
    );
}