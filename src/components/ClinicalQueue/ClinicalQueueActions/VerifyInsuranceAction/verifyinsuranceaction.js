import React from "react";
import Card from "../../../basestyledcomponents/Card/Card";
import Typography from "@material-ui/core/Typography";
import {Button, Paper} from "@material-ui/core";

function InsuranceVerified(props) {
    return (
        <div>
            <Paper style={{height: '100%'}} color={`success`}>
                <Typography>Insurance Verified</Typography>
            </Paper>
        </div>
    );
}

function InsuranceVerificationIssue(props) {
    return (
        <div>
            <Card color={`warning`}>
                <Typography>Insurance Issue</Typography>
            </Card>
        </div>
    );

}


export default function VerifyInsuranceAction(props) {
     const {verification} = props;
     return (
         <div>
             {verification.status === "verified" ? <InsuranceVerified/> : <InsuranceVerificationIssue />}
         </div>
     );
}