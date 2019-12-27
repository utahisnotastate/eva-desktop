import React from "react";
import MoveBackToWaitingRoom from "../../ClinicalQueueActions/MoveBackToWaitingRoom/movebacktowaitingroom";

const InExamRoomSettings = {
    title: 'Waiting In Examination Room',
    actions: [
        {label: 'Move to waiting room', component: (<MoveBackToWaitingRoom />)}
    ],
    columnheaders: [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "company",
            label: "Appointment Time",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "Time Arrived",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
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

    ],
};

export default InExamRoomSettings