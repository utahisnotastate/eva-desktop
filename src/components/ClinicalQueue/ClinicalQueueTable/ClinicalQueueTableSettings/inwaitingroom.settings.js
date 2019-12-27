import React from "react";
import MoveToExaminationRoom from "../../ClinicalQueueActions/MoveToExaminationRoom/movetoexaminationroom";

const InWaitingRoomSettings = {
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
    ],
};

export default InWaitingRoomSettings