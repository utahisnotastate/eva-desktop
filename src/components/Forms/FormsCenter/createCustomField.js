import React, { useState } from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import TextField from '@material-ui/core/TextField';
import { Input } from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";

const styles = {
    input: {
        width: '100%',
    },
};

export default function CreateCustomField(props) {
    const { register, handleSubmit, errors, control } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        console.log(data)
        props.setModal(false);
        dispatch({type: 'add_field_to_medical_chart_form', newfield: {
            [`${data.field_name}`]: {
                type: "string"
            }
        }
        }
        );
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <GridContainer direction={`column`}>
                        <GridItem xs={12}>
                            <Typography>Create Custom Field</Typography>
                        </GridItem>
                        <GridItem xs={12}>
                            <GridContainer>
                                <GridItem xs={4}>
                                    <Typography>Field Name</Typography>
                                </GridItem>
                                <GridItem xs={8}>
                                    <Controller style={styles.input} name={`field_name`} as={TextField}
                                                control={control}
                                                placeholder={`Enter the field name here`}/>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={12}>
                            <GridContainer>
                                <GridItem xs={4}>
                                    <Typography>Required Field</Typography>
                                </GridItem>
                                <GridItem xs={8}>
                                    <input type="checkbox" placeholder="required_field" name="required_field" ref={register} />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem>
                            <input style={styles.input} type="submit" value={`Add Field to Form`}/>
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        </div>
    );
}

/*
<input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
                    <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
                    <input type="text" placeholder="Middle Name" name="Middle Name" ref={register} />
                    <input type="text" placeholder="Preferred Name" name="Preferred Name" ref={register} />
                    <input type="datetime" placeholder="Date of Birth" name="Date of Birth" ref={register} />


 */