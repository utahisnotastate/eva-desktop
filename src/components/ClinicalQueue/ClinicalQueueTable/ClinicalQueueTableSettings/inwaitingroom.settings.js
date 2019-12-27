import React from "react";
import MoveToExaminationRoom from "../../ClinicalQueueActions/MoveToExaminationRoom/movetoexaminationroom";

const InWaitingRoomSettings = {
    title: 'In Waiting Room',
    actions: [
        {label: 'Move', component: (<MoveToExaminationRoom />)},
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
                filter: false,
                sort: true,
            }
        },
        {
            name: "city",
            label: "Time Arrived",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "state",
            label: "Provider",
            options: {
                filter: true,
                filterType: 'multiselect',
                sort: true,
            }
        },
    ],
};

export default InWaitingRoomSettings