import React, { useState} from "react"
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {useStateValue} from "../../context/ClinicalQueueContext";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";

const API_URL = "http://127.0.0.1:8000/api";

export default function MoveToExaminationRoom(props) {
    // const [{clinicalqueue}, dispatch] = useStateValue();
    const clinicalqueue = useSelector(state => state.clinicalqueue);
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        async function moveToExaminationRoom() {
            const result = await axios.patch(`http://127.0.0.1:8000/api/appointments/${props.appointment}/`, {status: 'in_exam_room'});
            return result;
        }
        moveToExaminationRoom().then(response => {
            console.log(response)
            async function getUpdatedClinicalQueue() {
                const result = await axios(`${API_URL}/appointmentstoday`);
                let appointments = result.data;
                return appointments;
            }
            getUpdatedClinicalQueue().then(response => {
                console.log(response);
                let modifiedappointments = [];
                response.forEach(appointment => {
                    let formattedstart = moment(appointment.start).format('h:mm')
                    let formattedend = moment(appointment.end).format('h:mm')
                    modifiedappointments.push({...appointment, ...{start: formattedstart}})
                })
                dispatch({
                    type: 'move_to_exam_room',
                    newclinicalqueue: modifiedappointments,
                })
            }).catch(error => console.log(error))
        }).catch(error => console.log(error));

    };
    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'row'}} onSubmit={handleSubmit(onSubmit)}>
            <Typography>Move to Examination Room</Typography>
                <select name="examination_room" ref={register}>
                    <option value="Room 1">Room 1</option>
                    <option value="Room 2">Room 2</option>
                    <option value="Room 3">Room 3</option>
                </select>
                <input type="submit" value="Move" />
            </form>
        </div>
    )

}