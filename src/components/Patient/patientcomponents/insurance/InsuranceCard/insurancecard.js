import React, {useState} from "react";
import GridItem from "../../../../basestyledcomponents/Grid/GridItem"
import Button from "../../../../basestyledcomponents/Button"
import {Paper, Typography} from "@material-ui/core";
import Modal from "../../../../basestyledcomponents/Modal/modal";
import AddInsuranceForm from "../../../../Forms/Administrative/addinsuranceform";
import Card from "../../../../basestyledcomponents/Card/Card";

export default function InsuranceCard(props) {
    return (
        <GridItem xs={4}>
            <Card>
                <div style={{padding: 15}}>
                    <div style={{marginBottom: 15}}>
                        <Typography variant={`h5`}>{props.insurance.type}</Typography>
                    </div>
                    <div>
                        <Typography>Insurance Name:{props.insurance.insurance_name}</Typography>
                        <Typography>Member Number: {props.insurance.member_id} </Typography>
                        <Typography>Group Number: {props.insurance.group_ID}</Typography>
                        <Typography>Bin Number: {props.insurance.bin_number}</Typography>
                        <Typography>PCN Number: {props.insurance.pcn}</Typography>
                        <Typography>Relationship to Subscriber: {props.insurance.relationship_code}</Typography>
                        <Typography>Date Coverage Began {props.insurance.date_effective}</Typography>
                        <Typography>Copay Amount: {props.insurance.copay_amount}</Typography>
                    </div>
                    <div>
                        <Modal button form={AddInsuranceForm} buttontext={`Edit`}/>
                    </div>
                </div>
            </Card>
        </GridItem>

    );
}
