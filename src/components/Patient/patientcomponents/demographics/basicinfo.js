import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import Typography from "@material-ui/core/Typography";
import {useParams} from 'react-router-dom';
import { RHFInput } from 'react-hook-form-input';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
    },
    labeltext: {
        color: '#000000',
    },
    inputfield: {
        padding: 20,
    },
    options: {
        width: 200,
        padding: 20,
    }
});

const genderoptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const raceoptions = [
    { value: 'black-non-hispanic', label: 'Black - Non Hispanic' },
    { value: 'caucasian', label: 'Caucasian' },
    { value: 'other', label: 'Other' },
];
const maritaloptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widow', label: 'Widow' },
];

export default function BasicInfoForm(props) {
    const classes = useStyles();
    let { id } = useParams();
    const [gender, setGender] = useState();
    const { register, handleSubmit, setValue, reset, control } = useFormContext();
    const onSubmit = data => console.log(data);
    // console.log(errors);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}`);
            console.log(result);
            reset({
                    first_name: result.data.first_name,
                    middle_name: result.data.middle_name,
                    date_of_birth: result.data.date_of_birth,
                    last_name: result.data.last_name,
                    preferred_name: result.data.preferred_name,
                }
            );
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/patients/${id}/demographics/`);
            console.log(result);
            // console.log(result.data);
            return result.data;
        };
        fetchData().then(response => {
                reset({
                    gender: response[0].gender,
                    race: response[0].race,
                    marital_status: response[0].marital_status,
                    employment_status: response[0].employment_status,
                    email: response[0].email
                });
        }).catch(error => console.log(error));
    }, []);
    return (
            <div>
                <div className={classes.root}>
                    <div>
                        <label><Typography className={classes.labeltext} variant="body1">First
                            Name:</Typography></label>
                        <RHFInput setValue={setValue} register={register} name="first_name"
                                  as={<TextField className={classes.inputfield}/>}/>
                    </div>
                    <div>
                        <label><Typography className={classes.labeltext} variant="body1">Middle
                            Name:</Typography></label>
                        <RHFInput setValue={setValue} register={register} name="middle_name"
                                  as={<TextField className={classes.inputfield}/>}/>
                    </div>
                    <div>
                        <label><Typography className={classes.labeltext} variant="body1">Last Name:</Typography></label>
                        <RHFInput setValue={setValue} register={register} name="last_name"
                                  as={<TextField className={classes.inputfield}/>}/>
                    </div>
                    <div>
                        <label><Typography className={classes.labeltext} variant="body1">Preferred
                            Name:</Typography></label>
                        <RHFInput setValue={setValue} register={register} name="preferred_name"
                                  as={<TextField className={classes.inputfield}/>}/>
                    </div>
                </div>
                <div className={classes.root}>
                    <div>
                        <Controller name={`date_of_birth`}
                                    as={<TextField type="date" label={`Date of Birth`} className={classes.inputfield}/>}
                                    control={control} placeholder={`mm/dd/yyyy`}
                        />
                    </div>
                    <div>
                        <Controller name={`gender`}
                                    as={<Select value={`gender`}  options={genderoptions} className={classes.options} />}
                                    control={control}
                        />
                    </div>
                    <div>
                    <Controller name={`race`}
                                as={<Select options={raceoptions} className={classes.options} />}
                                control={control} placeholder={`Please choose Race`}
                    />
                </div>
                    <div>
                        <Controller name={`marital_status`}
                                    as={<Select options={maritaloptions} className={classes.options} />}
                                    control={control} placeholder={`Please choose Marital status`}
                        />
                    </div>
                </div>
            </div>
    )

}

/*
reset({
                    first_name: result.data.first_name,
                    middle_name: result.data.middle_name,
                    date_of_birth: result.data.date_of_birth,
                    last_name: result.data.last_name,
                    preferred_name: result.data.preferred_name,
                }
            );
 */

/*
if(result.data[0] === undefined) {
                console.log('new patient so settings arent there');
            }
            else {
                reset({
                    gender: result.data[0].gender,
                    race: result.data[0].race,
                    marital_status: result.data[0].marital_status,
                    employment_status: result.data[0].employment_status,
                    email: result.data[0].email
                });
            }
 */
/*
fetchData().then(response => {
            if(response === undefined) {
                console.log('new patient so settings arent there');
            }
            else {
                reset({
                    gender: response[0].gender,
                    race: response[0].race,
                    marital_status: response[0].marital_status,
                    employment_status: response[0].employment_status,
                    email: response[0].email
                });
            }

        }).catch(error => console.log(error));
 */