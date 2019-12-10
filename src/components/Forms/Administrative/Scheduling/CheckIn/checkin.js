import React from 'react';
import useForm from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import GridContainer from "../../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../../basestyledcomponents/Grid/GridItem";
import {Typography, Input} from "@material-ui/core";
import './modal.css';

const options = [{value: true, label: 'Yes'}, {value: false, label: 'No Changes'}];
const paymentoptions = [{value: 'cash', label: 'Cash'}, {value: 'credit_debit', label: 'Credit/Debit'}, {value: 'IOU', label: 'IOU'}];

export default function CheckInForm(props) {
    const { register, handleSubmit, errors, setValue } = useForm();
    const onSubmit = data => {
        console.log(data);
        props.setModal(false);
    };

    const styles = {
        row: {
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            marginBottom: 15,
        },
    };

    return (
        <form style={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <GridContainer direction="column">
                <GridItem style={styles.row} xs={12}>
                    <GridContainer>
                        <GridItem xs={4}>
                            <Typography>Insurance changes:</Typography>
                        </GridItem>
                        <GridItem xs={8}>
                            <RHFInput
                                as={<Select options={options}/>}
                                name="insurance_changes"
                                className="select-input"
                                register={register}
                                setValue={setValue}
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}> <Typography>Copay Amount:</Typography></GridItem>
                        <GridItem xs={8}><Typography>$50.00</Typography></GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}> <Typography>Patient Balance:</Typography></GridItem>
                        <GridItem xs={8}><Typography>$50.00</Typography></GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}><Typography>Total Due:</Typography></GridItem>
                        <GridItem xs={8}><Typography>$50.00</Typography></GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}><Typography>Amount Paid:</Typography></GridItem>
                        <GridItem xs={8}>
                            <RHFInput
                                as={<TextField placeholder={`Enter total amount paid today`} fullWidth={true}/>}
                                name="amount_paid"
                                className="select-input"
                                register={register}
                                setValue={setValue}
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={4}><Typography>Payment Method</Typography></GridItem>
                        <GridItem xs={8}>
                            <RHFInput
                                as={<Select options={paymentoptions}/>}
                                name="payment_method"
                                className="select-input"
                                register={register}
                                setValue={setValue}
                            />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <Input type="submit"/>
        </form>
    );
}