import React from "react";
import ScheduleFollowUp from "../../ClinicalQueueActions/ScheduleFollowUp/schedulefollowup";

const RecentlyCompletedAppointmentSettings = {
    title: 'Recently Completed',
    actions: [
        {label: 'Schedule Follow Up', component: (<ScheduleFollowUp requires_follow_up={true} patentId={1}/>)}
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
            name: "appointment_end",
            label: "Appointment End Time",
            options: {
                filter: true,
                sort: false,
                empty: true,
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

export default RecentlyCompletedAppointmentSettings