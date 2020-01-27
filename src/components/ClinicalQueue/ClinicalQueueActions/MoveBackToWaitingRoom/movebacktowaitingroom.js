import React from "react";
import Button from '../../../basestyledcomponents/Button'
import Typography from "@material-ui/core/Typography";
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import {useStateValue} from "../../context/ClinicalQueueContext";
import {useForm} from "react-hook-form";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export default function MoveBackToWaitingRoom(props) {
    const { register, handleSubmit, errors, setValue } = useForm();
    const [{clinicalqueue}, dispatch] = useStateValue();
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
                dispatch({
                    type: 'move_to_waiting_room',
                    newclinicalqueue: response,
                })
            })
        }).catch(error => console.log(error));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <input type="submit" value="Move BAck To Waiting Room" />
        </form>
    );
}