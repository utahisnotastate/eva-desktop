import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

export default function CheckboxList({name, register, label, options}) {
    return (
        <FormGroup>
            {options.map((option) => (
                <FormControlLabel control={<Checkbox name={option.name} inputRef={register}/>} label={option.label}/>
            ))}

        </FormGroup>
    )
}

/*
<FormControlLabel control={<Checkbox name={name} inputRef={register}/>} label={label}/>
 */