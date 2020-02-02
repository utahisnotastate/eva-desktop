import React from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api";

export default function AddInsuranceForm(props) {
    const { register, control, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    let { id } = useParams();
    console.log(id);
    const onSubmit = data => {
        console.log(data);
            axios.post(`${API_URL}/patients/${id}/insurance/`, {
                patient: id,
                insurance_name: data.insurance_name,
                member_id: data.member_id,
                group_ID: data.group_ID,
                bin_number: data.bin_number,
                pcn: data.pcn,
                date_effective: data.date_effective,
                copay_amount: data.copay_amount,
                type: data.type,

            }).then(response => {
                if(response.statusText === "Created") {
                    console.log(response);

                    if(data.type === "primary") {
                        props.setModal(false);
                        dispatch({type: 'patient_has_insurance'});
                        dispatch({type: 'set_primary_insurance', primary_insurance: data})

                    }

                    else {
                        props.setModal(false);
                        dispatch({type: 'patient_has_insurance'});
                        dispatch({type: 'set_secondary_insurance', secondary_insurance: data})

                    }
                }
            })

    }
    // console.log(errors);
    const style = {
        formrow: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: 10,
        },
        textwidth: {
            width: '100%',
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div style={style.formrow}>
                    <Typography>Insurance Type:</Typography>
                    <div>
                        <select name="type" ref={register}>
                            <option value="primary">primary</option>
                            <option value="secondary">secondary</option>
                        </select>
                    </div>
                </div>
                <div style={style.formrow}>
                    <Typography>Insurance Name:</Typography>
                    <Controller style={style.textwidth} label={`Enter Insurance Name`} name="insurance_name"
                                as={<TextField/>} control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>Member Number:</Typography>
                    <Controller style={style.textwidth} label={`Enter Memmber ID number`} name="member_id"
                                as={<TextField/>} control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>Group Number:</Typography>
                    <Controller style={style.textwidth} label={`Enter Group number`} name="group_ID" as={<TextField/>}
                                control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>Bin Number:</Typography>
                    <Controller style={style.textwidth} label={`Enter Bin number`} name="bin_number" as={<TextField/>}
                                control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>PCN Number:</Typography>
                    <Controller style={style.textwidth} label={`Enter PCN number`} name="pcn" as={<TextField/>}
                                control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>Date coverage began:</Typography>
                    <Controller style={style.textwidth} name="date_effective"
                                as={<TextField type="date"/>} control={control}/>
                </div>
                <div style={style.formrow}>
                    <Typography>Copay Amount:</Typography>
                    <Controller style={style.textwidth} label={`Enter Copay Amount`} name="copay_amount"
                                as={<TextField type="number"/>} control={control}/>
                </div>
            </div>
            <div>
                <input type="submit" value="Save" />
            </div>

        </form>

    );

}