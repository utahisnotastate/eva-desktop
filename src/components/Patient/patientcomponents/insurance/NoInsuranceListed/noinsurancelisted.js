import React from "react";
import GridItem from "../../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../../basestyledcomponents/Card/Card";
import {Typography} from "@material-ui/core";
import CardBody from "../../../../basestyledcomponents/Card/CardBody";
import CardFooter from "../../../../basestyledcomponents/Card/CardFooter";
import Modal from "../../../../basestyledcomponents/Modal/modal";
import AddInsuranceForm from "../../../../Forms/Administrative/addinsuranceform";


export default function NoInsuranceListed() {
    return (
        <GridItem xs={8}>
            <Card>
                <CardBody>
                    <Typography variant={`h5`}>Insurance Information Not submitted or found. Please add primary , and secondary insurance. If patient is uninsured, please select patient is uninsured</Typography>
                </CardBody>
                <CardFooter>
                    <Modal buttontext={`Add Insurance`} form={AddInsuranceForm} />
                    <Modal buttontext={`Patient is uninsured`} />
                </CardFooter>
            </Card>
        </GridItem>
    );
}