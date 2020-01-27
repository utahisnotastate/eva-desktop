import React from "react"
import { useForm } from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import axios from "axios";

export default function MoveToExaminationRoom(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        async function moveToExaminationRoom() {
            const result = await axios.patch(`http://127.0.0.1:8000/api/appointments/${props.appointment}/`, {status: 'in_exam_room'});
            return result;
        }
        moveToExaminationRoom().then(response => console.log(response)).catch(error => console.log(error));

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