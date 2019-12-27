import React from "react";
import Button from '../../../basestyledcomponents/Button'
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';

import Typography from "@material-ui/core/Typography";
import AssignmentLateOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";

export default function MarkNoShow(props) {
    return (
        <div>
            <Button type={`button`} color={`danger`}>
                <Typography>Mark No Show <ReportProblemRoundedIcon /></Typography>
            </Button>
        </div>
    );
}