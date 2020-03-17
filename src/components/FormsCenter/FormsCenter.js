import React, {useState} from "react";
import GridContainer from "../basestyledcomponents/Grid/GridContainer";
import GridItem from "../basestyledcomponents/Grid/GridItem";
import Card from "../basestyledcomponents/Card/Card";
import CardHeader from "../basestyledcomponents/Card/CardHeader";
import CardBody from "../basestyledcomponents/Card/CardBody";
import {Button, Typography} from "@material-ui/core";
import './formscenter.css';
import Form from "react-jsonschema-form";


const log = (type) => console.log.bind(console, type);

export default function FormsCenter() {
    const [schema, setSchema] = useState({
        title: "Appointment Form",
        type: "object",
        required: ["title"],
        properties: {
            "firstName": {
                "type": "string",
                "title": "First name"
            },
            "lastName": {
                "type": "string",
                "title": "Last name"
            },
            "age": {
                "type": "integer",
                "title": "Age"
            },
            "bio": {
                "type": "string",
                "title": "Bio"
            },
            "password": {
                "type": "string",
                "title": "Password",
                "minLength": 3
            },
            "telephone": {
                "type": "string",
                "title": "Telephone",
                "minLength": 10
            }
        }});


    return (
        <div style={{padding: 15}}>
            <GridContainer>
                    <GridItem xs={10}>
                        <Card>
                            <CardHeader>Form Preview</CardHeader>
                            <CardBody>
                                <Form schema={schema}
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
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
            </GridContainer>
        </div>
    )
}