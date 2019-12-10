import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import useForm from 'react-hook-form';
import './waitingareaitemform.css'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 150,
    },
    selectField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const options = [
    {value: 1, label: 'Exam Room 1'},
    {value: 2, label: 'Exam Room 2'},
    {value: 3, label: 'Exam Room 3'},
    {value: 4, label: 'Exam Room 4'},
    {value: 5, label: 'Exam Room 5'},
];

export default function WaitingAreaItemForm() {
    const classes = useStyles();
    const { register, handleSubmit, setValue, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className={classes.container}>
                <TextField
                    id="patient_name"
                    label="Patient Name"
                    defaultValue="John Smith"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="scheduled_start"
                    label="Scheduled Start"
                    defaultValue="1:45"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <RHFInput setValue={setValue} register={register} name="examination_room" as={<Select defaultInputValue="Choose Examination Room" className="full" options={options} />} />
                <br/>
                <input type="submit"/>
            </div>
        </form>
    );

}