import React from "react";
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useForm } from 'react-hook-form';
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import {Typography, Input} from "@material-ui/core";
// import RHFSelectInput from "../../components/RHFComponents/RHFSelectInput/rhfselectinput";
import RHFTextInput from "../../components/RHFComponents/RHFTextInput/rhftextinput";
import {useStateValue} from "../../../ClinicalQueue/context/ClinicalQueueContext";
import {useDispatch, useSelector} from "react-redux";

const API_URL = "http://127.0.0.1:8000/api";
/*
const request_options = [
    { value: 'medication_refill', label: 'Medication Refill'},
    { value: 'clinical_issue', label: 'Clinical Issue' },
    { value: 'insurance_authorization', label: 'Insurance Authorization'},
    { value: 'medication_authorization', label: 'Medication Authorization'}
    ];
*/

export default function NewRequest(props) {
    // console.log(props);
    let { id } = useParams();
    console.log(id);
    const { register, handleSubmit, setValue } = useForm();
    const patientrequests = useSelector(state => state.patientRequests);
    const dispatch = useDispatch();
    // const [{patient}, dispatch] = useStateValue();
    const onSubmit = (data) => {
        // console.log(data);
        axios.post(`http://127.0.0.1:8000/api/patients/${id}/createpatientrequest/`,{
            patient: id,
            type: data.type,
            status: "active",
            request_description: data.request_description
        }).then((response) => {
            console.log(response);
            async function loadPatientRequests() {
                const result = await axios(`${API_URL}/patients/${id}/patientrequests/`);
                return result.data;
            }
            loadPatientRequests().then(response => {
                console.log(response);
                dispatch({type: 'load_patient_requests', patientrequests: response})
                props.setModal(false);
            })
        }).catch(error => console.log(error));

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer direction="column">
            <GridItem>
                <GridContainer>
                    <GridItem xs={4}>
                        <Typography>Type of Request</Typography>
                    </GridItem>
                    <GridItem xs={8}>
                        <select name="type" ref={register}>
                            <option value="medication">Medication refill</option>
                            <option value="insurance_authorization_medication">Insurance Authorization Medication</option>
                            <option value="other">Other</option>
                            <option value="clinical_question">Clinical Question</option>
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
                        <RHFTextInput name="request_description" placeholder={`Provide information about patients request`} register={register} setValue={setValue} multiline={true} rows={4} />
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