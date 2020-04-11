import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import Modal from "../../../basestyledcomponents/Modal/modal";
import {Button, Typography} from "@material-ui/core";
// import applyNavs from "react-jsonschema-form-pagination";
import Form from "react-jsonschema-form";
import CreateCustomField from "../../../Forms/FormsCenter/createCustomField";
import './createmedicalchartform.css';
import {reviewofsystems} from "../../../../store/reducers/formscenter/MedicalAppointmentForm/medicalappointmentform.reducers";


const log = (type) => console.log.bind(console, type);

export default function Vitals() {
    const dispatch = useDispatch();
    const schema = useSelector(state => state.vitalsform.vitalsformschema);
    const uiSchema = useSelector(state => state.vitalsform.vitalsformuischema);
    return (
        <div style={{padding: 15}}>
            <GridContainer>
                <GridItem xs={10}>
                    <Card>
                        <CardHeader>Customize Vitals Form</CardHeader>
                        <CardBody>
                            <Form schema={schema}
                                  uiSchema={uiSchema}
                                  onChange={log("changed")}
                                  onSubmit={log("submitted")}
                                  onError={log("errors")} />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={2}>
                    <Card>
                        <CardHeader>Add Template Inputs for Vitals Section</CardHeader>
                        <CardBody>
                            <GridContainer flexDirection={`column`} justify={`center`}>
                                <ul className="w3-ul full-width">
                                    <li onClick={() => {
                                        console.log('clicked!');
                                        dispatch({type: 'add_field_to_medical_appointment_section', section: 'vitals',field: 'height', newfield: {type: 'string', title: 'Height'}});
                                        console.log(uiSchema.vitals);
                                    }}>Add Height</li>
                                    <li>Add Temperature</li>
                                    <li>Add Pulse</li>
                                    <li>Add Weight</li>
                                    <li>Add Oxygen</li>
                                </ul>
                            </GridContainer>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Add Custom Form Inputs</CardHeader>
                        <CardBody>
                            <GridContainer flexDirection={`column`}>
                                <Modal buttontext={`Create Custom Field`} form={CreateCustomField}/>
                                <div>
                                    <Modal buttontext={`Create Custom Group`}/>
                                </div>
                                <div>
                                    <Modal buttontext={`Add Image Upload Button`}/>
                                </div>
                                <div>
                                    <Modal buttontext={`Add Document Upload Button`}/>
                                </div>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

/*

 */