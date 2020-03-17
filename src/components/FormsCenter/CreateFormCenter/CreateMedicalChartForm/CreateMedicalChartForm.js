import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
import CardHeader from "../../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../../basestyledcomponents/Card/CardBody";
import Modal from "../../../basestyledcomponents/Modal/modal";
import {Button, Typography} from "@material-ui/core";
import Form from "react-jsonschema-form";
import CreateCustomField from "../../../Forms/FormsCenter/createCustomField";
import './createmedicalchartform.css';


const log = (type) => console.log.bind(console, type);

export default function CreateMedicalChartForm() {
    const schema = useSelector(state => state.formscenter.createmedicalchartformschema)
    const uiSchema = {
        complaints: {
            patient_description: {
                "ui:widget": "textarea"
            }
        }
    }
    return (
        <div style={{padding: 15}}>
            <GridContainer>
                <GridItem xs={10}>
                    <Card>
                        <CardHeader>Form Preview</CardHeader>
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
                        <CardHeader>Form Inputs</CardHeader>
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