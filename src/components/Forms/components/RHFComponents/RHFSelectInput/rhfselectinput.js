import React from 'react';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import './rhfselectinput.css';

export default function RHFSelectInput(props) {
    console.log(props);
    // console.log(props.options);
    return(
        <RHFInput
            as={<Select options={props.options} register={props.register}  />}
            name={props.name}
            value={props.value}
            isClearable
            className="select-input"
            register={props.register}
            setValue={props.setValue}
        />
    );
}