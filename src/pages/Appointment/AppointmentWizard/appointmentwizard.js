import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FormikWizard } from "formik-wizard-form";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import JobDetails from "./JobDetails";

export default function App() {
    const [finalValues, setFinalValues] = React.useState({});
    const [finished, setFinished] = React.useState(false);
    return (
        <div className="App">
            <FormikWizard
                initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    email: "",
                    phone: "",
                    addressLine1: "",
                    addressLine2: "",
                    employerName: "",
                    designation: "",
                    totalExperience: "",
                    city: ""
                }}
                onSubmit={(values) => {
                    setFinalValues(values);
                    setFinished(true);
                }}
                validateOnNext
                activeStepIndex={0}
                steps={[
                    {
                        component: PersonalDetails,
                        validationSchema: Yup.object().shape({
                            firstName: Yup.string().required("First name is required"),
                            username: Yup.string().required("Username is required"),
                            password: Yup.string().required("Password is required")
                        })
                    },
                    {
                        component: ContactDetails,
                        validationSchema: Yup.object().shape({
                            email: Yup.string()
                                .email("Please enter valid email")
                                .required("Email is required"),
                            phone: Yup.string().required("Phone number is required")
                        })
                    },
                    {
                        component: JobDetails,
                        validationSchema: Yup.object().shape({
                            designation: Yup.string().required("Designation is required")
                        })
                    }
                ]}
            >
                {({
                      currentStepIndex,
                      renderComponent,
                      handlePrev,
                      handleNext,
                      isNextDisabled,
                      isPrevDisabled
                  }) => {
                    return (
                        <>
                            <Box sx={{ width: "100%", my: "1rem" }}>
                                <Stepper activeStep={currentStepIndex}>
                                    <Step completed={currentStepIndex > 0}>
                                        <StepLabel>Personal Details</StepLabel>
                                    </Step>
                                    <Step completed={currentStepIndex > 1}>
                                        <StepLabel>Contact Details</StepLabel>
                                    </Step>
                                    <Step completed={finished}>
                                        <StepLabel>Job Details</StepLabel>
                                    </Step>
                                </Stepper>
                            </Box>
                            <Box my="2rem">{renderComponent()}</Box>
                            <Box display="flex" justifyContent="space-between">
                                <Button
                                    variant="contained"
                                    disabled={isPrevDisabled}
                                    type="primary"
                                    onClick={handlePrev}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="contained"
                                    disabled={isNextDisabled}
                                    type="primary"
                                    onClick={handleNext}
                                >
                                    {currentStepIndex === 2 ? "Finish" : "Next"}
                                </Button>
                            </Box>
                            <Box>
                                <pre>{JSON.stringify(finalValues, null, 2)}</pre>
                            </Box>
                        </>
                    );
                }}
            </FormikWizard>
        </div>
    );
}
