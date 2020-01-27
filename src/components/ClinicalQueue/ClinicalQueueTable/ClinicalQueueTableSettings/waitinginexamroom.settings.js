import React from "react";
// import MoveBackToWaitingRoom from "../../ClinicalQueueActions/MoveBackToWaitingRoom/movebacktowaitingroom";
import Button from "../../../basestyledcomponents/Button";
import Typography from "@material-ui/core/Typography";
import ReplayOutlinedIcon from "@material-ui/icons/ReplayOutlined";
import axios from "axios";

function MoveBackToWaitingRoom(props) {
    console.log(props.tableMeta.rowData[0]);

    async function ToWaitingRoom() {
        const result = await axios.patch(`http://127.0.0.1:8000/api/appointments/${props.tableMeta.rowData[0]}/`, {status: 'arrived'});
        return result;
    }
    return (
        <div>
                <Typography>Move Back To Waiting Room <ReplayOutlinedIcon onClick={() => {
                    ToWaitingRoom().then(response => {
                        console.log(response);
                    }).catch(error => console.log(error));
                }} /> </Typography>
        </div>
    );
}

const InExamRoomSettings = {
    title: 'Waiting In Examination Room',
    columnheaders: [
        {
            name: "id",
            label: "Appointment ID",
            options: {
                display: false,
            }
        },
        {
            name: "patient",
            label: "Patient ID",
            options: {
                display: false,
            }
        },
        {
            name: "patient_display_name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "start",
            label: "Appointment Time",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "provider_display_name",
            label: "Provider",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "exam_room",
            label: "Exam Room",
            options: {
                filter: true,
                sort: false,
                empty: true,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => MoveBackToWaitingRoom({value, tableMeta, updateValue}),

            }
        },

    ],
};

export default InExamRoomSettings