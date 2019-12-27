import React from "react";
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import {Typography, Input} from "@material-ui/core";
// import RHFSelectInput from "../../components/RHFComponents/RHFSelectInput/rhfselectinput";
import RHFTextInput from "../../components/RHFComponents/RHFTextInput/rhftextinput";

/*
const request_options = [
    { value: 'medication_refill', label: 'Medication Refill'},
    { value: 'clinical_issue', label: 'Clinical Issue' },
    { value: 'insurance_authorization', label: 'Insurance Authorization'},
    { value: 'medication_authorization', label: 'Medication Authorization'}
    ];
*/
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];
export default function NewRequest(props) {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer direction="column">
            <GridItem>
                <GridContainer>
                    <GridItem xs={4}>
                        <Typography>Type of Request</Typography>
                    </GridItem>
                    <GridItem xs={8}>
                        <select name="request_type" ref={register}>
                            <option value="medication_refill">Medication refill</option>
                            <option value="clinical_issue">Clinical Issue</option>
                            <option value="insurance_authorization">Insurance Authorization</option>
                            <option value="medication_authorization">Medication Authorization</option>
                        </select>
                    </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem>
                <GridContainer>
                    <GridItem xs={4}>
                        <Typography>Request Description</Typography>
                    </GridItem>
                    <GridItem xs={8}>
                        <RHFTextInput name={`request_description`} placeholder={`Provide information about patients request`} register={register} setValue={setValue} multiline={true} rows={4} />
                    </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem>
                <Input type={`submit`}/>
            </GridItem>
        </GridContainer>
        </form>
    );
}