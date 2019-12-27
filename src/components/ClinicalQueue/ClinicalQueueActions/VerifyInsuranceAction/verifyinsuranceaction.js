import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '../../../basestyledcomponents/Button'
import CheckIcon from '@material-ui/icons/Check';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';


function InsuranceVerified(props) {
    return (
        <div>
            <Button type={`button`} color={`success`}>
                <Typography>Insurance Verified <CheckIcon /></Typography>
            </Button>
        </div>
    );
}

function InsuranceVerificationIssue(props) {
    return (
        <div>
            <Button type={`button`} color={`warning`}>
                <Typography>Insurance Verification Issue <AssignmentLateOutlinedIcon /></Typography>
            </Button>
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