import React from "react";
import {Formik, Form, Field} from 'formik';
import moment from "moment";


export default function ScheduleAppointmentModal(props) {
console.log(props.slottoschedule);
console.log('Start: ' + moment(props.slottoschedule.start).toISOString())
    return (
        <div>
            <p>Test</p>
        </div>

    );
}


/*<div>
            <h1>Test!!!</h1>
                <select name="type" ref={props.register}>
                    <option value="first_appointment">first_appointment</option>
                    <option value="medication_management">medication_management</option>
                    <option value="follow_up">follow_up</option>
                    <option value="appointment">appointment</option>
                </select>
            <Controller
                as={<TextField disabled />}
                name="patient"
                control={props.control}
                defaultValue={props.patient}
            />
                <Controller
                    as={<TextField disabled />}
                    name="start"
                    control={props.control}
                    defaultValue={moment(props.slottoschedule.start).format('MMM DD YYYY @ h:mm a')}
                />
                <Controller
                    as={<TextField disabled />}
                    name="end"
                    control={props.control}
                    defaultValue={moment(props.slottoschedule.end).format('MMM DD YYYY @ h:mm a')}
                />
            <Controller
                as={<TextField disabled />}
                name="provider"
                control={props.control}
                defaultValue={moment(props.slottoschedule.end).format('MMM DD YYYY @ h:mm a')}
            />
        </div>
*
*
* */
