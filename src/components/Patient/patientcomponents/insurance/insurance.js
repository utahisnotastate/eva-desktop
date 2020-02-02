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
const insurance = {
    type: "Primary",
    insurance_name: "TEst Insurance",
    member_id: '123456788',
    group_ID: '1234',
    bin_number: '123123',
    pcn: 'zxcd',
    relationship_code: '18',
    date_effective: '1/1/2020'
}
const secondinsurance = {
    type: "secondary",
    insurance_name: "TEst Insurance",
    member_id: '123456788',
    group_ID: '1234',
    bin_number: '123123',
    pcn: 'zxcd',
    relationship_code: '18',
    date_effective: '1/1/2020'
}
const API_URL = "http://127.0.0.1:8000/api";


export default function Insurance(props) {
    const classes = useStyles();
    const hasinsurance = useSelector(state => state.patient.hasinsurance);
    const dispatch = useDispatch();
    let { id } = useParams();

    function findPrimaryInsurance(insurance) {
        return insurance.type === "primary" && insurance.date_terminated === null;
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
            }

        })
    }, []);


    return (
        <GridContainer style={{paddingTop: 50}} direction="column"  alignItems="center">
            {hasinsurance? (
                <GridContainer justify="center">
                    <InsuranceCard insurance={insurance}/>
                    <InsuranceCard insurance={secondinsurance}/>
                </GridContainer>
            ): (
                <NoInsuranceListed/>
            )}

        </GridContainer>
    );
}