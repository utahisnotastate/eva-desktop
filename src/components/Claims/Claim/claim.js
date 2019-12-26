import React from 'react';
import { useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function Claim(props) {
    let { claimId } = useParams();
    return (
        <div>
            <Paper>
                <Typography>This is a claim # {claimId}</Typography>
            </Paper>

        </div>
    );
}