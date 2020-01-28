import React from "react";
import MoveToExaminationRoom from "../../ClinicalQueueActions/MoveToExaminationRoom/movetoexaminationroom";


function WaitingRoomActions(props) {
    return (
        <div>
            <MoveToExaminationRoom appointment={props.tableMeta.rowData[0]} />
        </div>
    );
}

const InWaitingRoomSettings = {
    title: 'In Waiting Room',
    /*actions: [
        {label: 'Move', component: (<MoveToExaminationRoom />)},
    ],*/
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
            name: "actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateThis) => WaitingRoomActions({value, tableMeta, updateThis}),

            }
        },
    ],
};

export default InWaitingRoomSettings