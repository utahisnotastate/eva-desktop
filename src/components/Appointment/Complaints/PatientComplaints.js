import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { Formik } from 'formik';
import { Form } from 'react-formik-ui';
import { FieldArray } from 'formik';
import { Input } from 'react-formik-ui';
import NewComplaint from './NewComplaint/NewComplaint.FunComp';
// import PatientComplaint from './PatientComplaint/PatientComplaint';

const editorStyle = {
    minWidth: '100px',
    minHeight: '100px',
    'touch-action': 'none',
};

export default function PatientComplaints(props) {
        const { complaints, values } = props;
        return (
            <Grid container>
                <Grid item xs={2}>
                    <div className="w3-ul">
                        <li>Complaints</li>
                        <li>Review of Systems</li>
                        <li>Physical Exam</li>
                        <li>Assessment</li>
                        <li>Plan</li>
                        <li>Follow Up</li>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="w3-padding w3-bottombar w3-leftbar w3-rightbar w3-topbar">
                        <h3>Reason for Visit /Chief Complaint</h3>
                        <NewComplaint />
                    </div>
                </Grid>

            </Grid>
        );

}

/*
<NewComplaint />
<FieldArray
                            name="current_concerns"
                            render={arrayHelpers => (
                                <div>
                                    <div>
                                        {complaints.map((complaint, index) => (
                                            <PatientComplaint index={index} complaint={complaint} arrayHelpers={arrayHelpers} values={values} />
                                        ))}
                                    </div>
                                    <div>
                                        <NewComplaint />
                                    </div>
                                </div>
                            )}
                        />
 */
