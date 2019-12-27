import React from "react";
import Typography from "@material-ui/core/Typography";

function InsuranceVerified(props) {
    return (
        <div>
            <Typography>Insurance Verified</Typography>
        </div>
    );
}

function InsuranceVerificationIssue(props) {
    return (
        <div>
            <Typography>Insurance Issue</Typography>
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