import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import TextField from '@material-ui/core/TextField';
import { Input } from "@material-ui/core";
import {Typography} from "@material-ui/core";

const styles = {
    input: {
        width: '100%',
    },
};

export default function CreateNewPatient() {
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <GridContainer direction={`column`}>
                <GridItem xs={12}>
                    <Typography>Register New Patient</Typography>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>Date of Birth</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <Controller style={styles.input} name={`date_of_birth`} as={<TextField type="date"/>} control={control} placeholder={`mm/dd/yyyy`}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>First Name</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <Controller style={styles.input} name={`first_name`} as={TextField} control={control} placeholder={`First Name`}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>Middle Name</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <Controller style={styles.input} name={`middle_name`} as={TextField} control={control} placeholder={`Middle Name`}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>Last Name</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <Controller style={styles.input} name={`last_name`} as={TextField} control={control} placeholder={`Last Name`}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>Preferred Name</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <Controller style={styles.input} name={`preferred_name`} as={TextField} control={control} placeholder={`Preferred Name`}/>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <input style={{width: '100%'}} type="submit" value={`Create Patient`} />
                </GridItem>
            </GridContainer>
        </form>
    );
}

/*
<input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
                    <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
                    <input type="text" placeholder="Middle Name" name="Middle Name" ref={register} />
                    <input type="text" placeholder="Preferred Name" name="Preferred Name" ref={register} />
                    <input type="datetime" placeholder="Date of Birth" name="Date of Birth" ref={register} />


 */