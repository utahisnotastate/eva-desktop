import React from "react";
import Button from '../../../basestyledcomponents/Button'
import Typography from "@material-ui/core/Typography";
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import {Input} from "@material-ui/core";
import {useStateValue} from "../../context/ClinicalQueueContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";

const API_URL = "http://127.0.0.1:8000/api";

export default function MoveBackToWaitingRoom(props) {
    const { register, handleSubmit, errors, setValue } = useForm();
    // const [{clinicalqueue}, dispatch] = useStateValue();
    const clinicalqueue = useSelector(state => state.clinicalqueue);
    const dispatch = useDispatch();
    console.log(props.appointment);
    const onSubmit = (data) => {
        async function moveBackPatient() {
            const result = await axios.patch(`http://127.0.0.1:8000/api/appointments/${props.appointment}/`, {status: 'arrived'});
            return result;

        }
        moveBackPatient().then(response => {
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
                    type: 'move_to_waiting_room',
                    newclinicalqueue: modifiedappointments,
                })
            })
        }).catch(error => console.log(error));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Input type="submit" value="Move BAck To Waiting Room" />
        </form>
    );
}