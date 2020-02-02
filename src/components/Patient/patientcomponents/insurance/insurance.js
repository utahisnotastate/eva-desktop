import React, {useState, useEffect} from "react";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import Table from '../../../basestyledcomponents/Table/Table'
import style from '../../../basestyledcomponents/Table/contentAreas';
import InsuranceCard from "./InsuranceCard/insurancecard";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Typography} from "@material-ui/core";
import Card from "../../../basestyledcomponents/Card/Card";
import NoInsuranceListed from "./NoInsuranceListed/noinsurancelisted";

const useStyles = makeStyles(style);
const API_URL = "http://127.0.0.1:8000/api";


export default function Insurance(props) {
    const classes = useStyles();
    const hasinsurance = useSelector(state => state.patient.hasinsurance);
    const primary_insurance = useSelector(state => state.patient.primaryinsurance);
    const secondary_insurance = useSelector(state => state.patient.secondaryinsurance);

    const dispatch = useDispatch();
    let { id } = useParams();

    function findPrimaryInsurance(insurance) {
        return insurance.type === "primary" && insurance.date_effective && insurance.date_terminated === null;
    }

    function findSecondaryInsurance(insurance) {
        return insurance.type === "secondary" && insurance.date_effective && insurance.date_terminated === null;
    }


    useEffect(() => {
        async function getPatientInsurances() {
            const result = await axios.get(`${API_URL}/patients/${id}/insurance/`)
            const insurances = result.data;
            return insurances;

        }
        getPatientInsurances().then(response => {
            console.log(response);
            if(response.length === 0) {
                dispatch({type: 'patient_has_no_insurance'});
            } else {
                dispatch({type: 'patient_has_insurance'});
                console.log(response.find(findPrimaryInsurance));
                dispatch({type: 'set_primary_insurance', primary_insurance: response.find(findPrimaryInsurance) });
                console.log(response.find(findSecondaryInsurance));
                if(response.find(findSecondaryInsurance) === false) {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: null})
                } else {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: response.find(findSecondaryInsurance) })
                }
            }

        }).catch(error => console.log(error));
    }, []);

    return (
        <GridContainer style={{paddingTop: 50}} direction="column"  alignItems="center">
            {hasinsurance? (
                <GridContainer justify="center">
                    <InsuranceCard insurance_type="primaryinsurance" insurance={primary_insurance}/>
                    <InsuranceCard insurance_type="secondaryinsurance" insurance={secondary_insurance}/>
                </GridContainer>
            ): (
                <NoInsuranceListed/>
            )}

        </GridContainer>
    );
}