import React from 'react';
import  useForm from 'react-hook-form';
import GridContainer from '../../../basestyledcomponents/Grid/GridContainer';
import GridItem from '../../../basestyledcomponents/Grid/GridItem';
import {Typography} from "@material-ui/core";

export default function UpdatePatientRequestForm(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <GridContainer direction={`column`}>
                    <GridItem>
                        <GridContainer>
                            <GridItem xs={4}>
                                <Typography>Change Request Status to: </Typography>
                            </GridItem>
                            <GridItem xs={8}>
                                <select name="changeRequestStatus" ref={register}>
                                    <option value="Active">Active</option>
                                    <option value="Complete">Complete</option>
                                    <option value="Pending Insurance Response">Pending Insurance Response</option>
                                    <option value="Pending New Information from Patient">Pending New Information from Patient</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem>
                        <GridContainer>
                            <GridItem xs={4}>
                                <Typography>This update contains new information from the patient:</Typography>
                            </GridItem>
                            <GridItem xs={8}>
                                <input type="checkbox" placeholder="patientProvidedNewInfo" name="patientProvidedNewInfo" ref={register} />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem>
                        <GridContainer>
                            <GridItem xs={4}>
                                <Typography>Change Assigned To:</Typography>
                            </GridItem>
                            <GridItem xs={8}>
                                <select name="changeAssignedTo" ref={register}>
                                    <option value="Provider1">Provider1</option>
                                    <option value="Provider2">Provider2</option>
                                    <option value="Provider3">Provider3</option>
                                </select>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem>
                        <GridContainer>
                            <GridItem xs={4}>
                                <Typography>Update</Typography>
                            </GridItem>
                            <GridItem xs={8}>
                                <textarea name="RequestUpdateText" ref={register} />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
                <input type="submit" />
            </div>
        </form>
    );

}