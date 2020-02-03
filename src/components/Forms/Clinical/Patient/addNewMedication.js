import React from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import InternalProviderSelect from "../../../basestyledcomponents/InternalProviderSelect/internalproviderselect";
import ICD10Search from "../../../basestyledcomponents/ICD10Search/icd10search";
import MedicationAndDosageSearch
    from "../../../basestyledcomponents/MedicationAndDosageSearch/medicationanddosagesearch";

const API_URL = "http://127.0.0.1:8000/api";

export default function AddNewMedicationForm(props) {
    const { register, control, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const icd10assessmentcode = useSelector(state => state.patient.addmedicationformicd10result.icd10assessmentcode)
    const assessment_description = useSelector(state => state.patient.addmedicationformicd10result.assessment_description);
    const medicationname = useSelector(state => state.patient.addMedicationFormMedication);
    let { id } = useParams();
    const onSubmit = data => {

        const icd10formvalues = {
            icd10assessmentcode,
            assessment_description,
            medicationname,

        }
        console.log({...data, ...icd10formvalues});
        /*axios.post(`${API_URL}/patients/${id}/medications/`, data).then(response => {
            async function getPatientMedications() {
                const result = await axios(`${API_URL}/patients/${id}/medications/`);
                console.log(result.data);
                return result.data;
            }
            getPatientMedications().then(response => {
                dispatch({type: 'load_all_medications', medications: response })
            })
        })*/

    }

    const style= {
        row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 20,
        },
        rowlabel: {
            flexGrow: 1,
            alignItems: 'center',
        },
        rowinputcontainer: {
            flexGrow: 2,
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <GridContainer direction={`column`}>
                <GridItem style={style.row}>
                    <Typography>Add New Medication</Typography>
                </GridItem>
                <GridItem style={style.row}>
                    <div style={style.rowlabel}>
                        <Typography>Prescribed By</Typography>
                    </div>
                    <div style={{...style.row, ...style.rowinputcontainer}}>
                        <InternalProviderSelect register={register} />
                        <Typography>Or search for outside provider</Typography>
                        <Controller
                            as={<TextField  />}
                            name="provider"
                            placeholder={`Enter prescriber here`}
                            control={control}
                            defaultValue={props.prescribed_by}
                        />
                    </div>
                </GridItem>
                <GridItem style={style.row}>
                    <Typography>Diangosis</Typography>
                    <div style={style.row}>
                        <ICD10Search dispatch={dispatch} register={register} />
                    </div>

                </GridItem>
                <GridItem style={style.row}>
                    <Typography>Medication</Typography>
                 <MedicationAndDosageSearch dispatch={dispatch} />
                    <Controller
                        as={<TextField  />}
                        name="dosage"
                        placeholder={`Enter dosage here`}
                        control={control}
                        defaultValue={``}
                    />
                    <Controller
                        as={<TextField  />}
                        name="frequency"
                        placeholder={`Enter frequency here`}
                        control={control}
                        defaultValue={``}
                    />
                </GridItem>
                <GridItem style={style.row}>
                    <Typography>Date Started</Typography>
                    <Controller
                        as={<TextField type="date" />}
                        name="date_started"
                        control={control}
                    />
                </GridItem>
                <GridItem style={style.row}>
                    <Typography>Date Stopped</Typography>
                    <Controller
                        as={<TextField type="date" />}
                        name="date_stopped"
                        control={control}
                    />
                </GridItem>
                <GridItem style={style.row}>
                    <Typography>Reason Stopped</Typography>
                    <Controller
                        as={<TextField />}
                        name="reason_stopped"
                        control={control}
                    />
                </GridItem>
                <GridItem style={style.row}>
                    <input type="submit" value={`Add Medication`} />
                </GridItem>
            </GridContainer>
        </form>

    )

}