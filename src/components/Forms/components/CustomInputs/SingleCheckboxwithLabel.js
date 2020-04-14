import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

export default function SingleCheckboxwithLabel({name, register, label}) {
    return (
        <FormControlLabel control={<Checkbox name={name} inputRef={register}/>} label={label}/>
    )
}