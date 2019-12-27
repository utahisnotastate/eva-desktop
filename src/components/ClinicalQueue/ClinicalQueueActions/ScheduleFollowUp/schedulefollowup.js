import React from "react";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function ScheduleFollowUp(props) {
    const {patientId, requires_follow_up} = props;
    if (requires_follow_up) {
        return (
            <div>
                <NavLink to={`/schedule/${patientId}`}>
                    <Typography>Schedule Follow Up</Typography>
                </NavLink>
            </div>
        );
    }

}