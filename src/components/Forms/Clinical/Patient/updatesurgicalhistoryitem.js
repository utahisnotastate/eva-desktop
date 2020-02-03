import React from 'react';
import axios from "axios";
import moment from "moment"
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import Button from "../../../basestyledcomponents/Button";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
var toDate = require('@fav/type.to-date');

const API_URL = "http://127.0.0.1:8000/api";

const classes = {
    root: {
        margin: 20,
    },
    banner: {
        marginBottom: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0232B2',
        color: '#ffffff',
    },
    headeritem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #888',
        width: '100%',
        height: 60,
    },
    listitem: {
        marginTop: 15,
    },
    listitemheader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    }
}

export default function UpdateSurgicalHistoryItem(props) {
    let { id } = useParams();
    // console.log(id);
    const { register, control, handleSubmit, setValue, reset, formState, errors } = useForm();
    const dispatch = useDispatch();

    async function getUpdatedSurgicalHistory() {
        const result = await axios(`${API_URL}/patients/${id}/surgicalhistory/`);
        console.log(result);
        return result.data;
    }

    const saveUpdates = data => {
        console.log(data);
        axios.patch(`${API_URL}/patients/${id}/surgicalhistory/${props.surgery.id}/`, {
            patient: id,
            procedure: data.procedure[0],
            date: data.date,
            performed_by: data.performed_by,
            additional_information: data.additional_information,

        }).then(response => {
            getUpdatedSurgicalHistory().then(response => {
                console.log(response);
                dispatch({type: 'update_surgical_history', surgicalhistory: response})

            })
        })
        console.log(data.procedure[0]);
    }


    const deleteItem = data => {
        console.log('delete ' + props.surgery.procedure)
        axios.delete(`${API_URL}/patients/${id}/surgicalhistory/${props.surgery.id}/`)
            .then(response => {
                getUpdatedSurgicalHistory().then(response => {
                    console.log(response);
                    dispatch({type: 'update_surgical_history', surgicalhistory: response})
                })

            })
    }
    const onSubmit = data => {
        console.log('wrong submit');
        // axios.patch(`${API_URL}/patients/`)
    }
    setValue(`procedure.${props.surgery.id}`, `${props.surgery.procedure}`)

    return (
        <form>
            <GridItem key={props.surgery.id} xs={12} sm={10}>
                <Card style={classes.listitemheader}>
                    <GridItem style={classes.headeritem}>
                        <Controller
                            as={<TextField style={{width: '100%'}} />}
                            name={`procedure.${props.surgery.id}`}
                            control={control}
                            defaultValue={props.surgery.procedure}
                        />
                    </GridItem>
                    <GridItem style={classes.headeritem} border={1}>
                        <Controller
                            as={<TextField type="date" />}
                            name="date"
                            control={control}
                            defaultValue={props.surgery.date}
                        />
                    </GridItem>
                    <GridItem style={classes.headeritem}>
                        <Controller
                            as={<TextField />}
                            name="performed_by"
                            control={control}
                            defaultValue={props.surgery.performed_by}
                        />
                    </GridItem>
                    <GridItem style={classes.headeritem}>
                        {formState.dirty? (

                            <div>
                                <Button onClick={handleSubmit(saveUpdates)}>Save</Button>

                            </div>

                        ): null}
                        <Button onClick={handleSubmit(deleteItem)}>Delete Item</Button>
                    </GridItem>
            </Card>
        </GridItem>
        </form>
    );

}