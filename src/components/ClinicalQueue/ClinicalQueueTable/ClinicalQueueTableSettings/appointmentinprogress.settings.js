import React from "react";

const AppointmentInProgressSettings = {
    title: 'Appointments In Progress',
    actions: [
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
            label: "Appointment Start Time",
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
        {
            name: "appointment_length",
            label: "Appointment Duration",
            options: {
                filter: true,
                sort: false,
                empty: true,
            }
        },

    ],
};

export default AppointmentInProgressSettings