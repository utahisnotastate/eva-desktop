import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import GridItem from "../../../../basestyledcomponents/Grid/GridItem"
import Button from "../../../../basestyledcomponents/Button"
import {Paper, Typography} from "@material-ui/core";
import Modal from "../../../../basestyledcomponents/Modal/modal";
import AddInsuranceForm from "../../../../Forms/Administrative/addinsuranceform";
import Card from "../../../../basestyledcomponents/Card/Card";
import Editinsuranceform from "../../../../Forms/Administrative/editinsuranceform";

export default function InsuranceCard(props) {
    const insurance = useSelector(state => state.patient[`${props.insurance_type}`]);
    console.log(insurance);



    return (
        <GridItem xs={4}>
            <Card>
                <div style={{padding: 15}}>
                    <div style={{marginBottom: 15}}>
                        <Typography variant={`h5`}>{insurance.type}</Typography>
                    </div>
                    <div>
                        <Typography>Insurance Name:{insurance.insurance_name}</Typography>
                        <Typography>Member Number: {insurance.member_id} </Typography>
                        <Typography>Group Number: {insurance.group_ID}</Typography>
                        <Typography>Bin Number: {props.insurance.bin_number}</Typography>
                        <Typography>PCN Number: {insurance.pcn}</Typography>
                        <Typography>Relationship to Subscriber: {insurance.relationship_code}</Typography>
                        <Typography>Date Coverage Began {insurance.date_effective}</Typography>
                        <Typography>Copay Amount: {insurance.copay_amount}</Typography>
                    </div>
                    <div>
                        <Modal button form={Editinsuranceform} formprops={insurance}  buttontext={`Edit`}/>
                    </div>
                </div>
            </Card>
        </GridItem>

    );
}
