import React from "react";
import Button from '../../../basestyledcomponents/Button'
import Typography from "@material-ui/core/Typography";
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';

export default function MoveBackToWaitingRoom(props) {
    return (
        <div>
            <Button type={`button`} color={`info`}>
                <Typography>Move Back To Waiting Room <ReplayOutlinedIcon /> </Typography>
            </Button>
        </div>
    );
}