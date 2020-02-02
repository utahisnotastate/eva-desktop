import React, {useEffect} from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";

const API_URL = "http://127.0.0.1:8000/api";

function Editinsuranceform(props) {
    const { register, control, handleSubmit, setValue,  errors } = useForm();
    const dispatch = useDispatch();
    let { id } = useParams();
    const entries = Object.entries(props.formprops)
    // console.log(entries);

    for (const [formfield, formfieldvalue] of entries) {
        setValue(`${formfield}`, `${formfieldvalue}`)
    }


    const onSubmit = (data) => {
        console.log(data);
        axios.patch(`${API_URL}/patients/${props.formprops.patient}/insurance/${props.formprops.id}/`, data).then(response => {
            console.log(response);
            props.setModal(false);
            dispatch({type: `set_${response.data.type}_insurance`, [`${response.data.type}_insurance`]: response.data})
        }).catch(error => console.log(error));
    }
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
            <GridContainer direction="column">
                <GridItem>
                    <Typography>Header</Typography>
                </GridItem>
                <GridItem>
                    <GridContainer>
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
                                <Controller
                                    as={<TextField />}
                                    name="insurance_name"
                                    control={control}
                                    value={props.formprops.insurance_name}
                                    style={style.textwidth}  label={`Enter Insurance Name`}
                                            />
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
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <input type="submit" value="Save Changes"/>
                </GridItem>
            </GridContainer>
        </form>
    );
}

export default Editinsuranceform;