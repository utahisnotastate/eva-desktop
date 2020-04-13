import React, {useEffect, useState} from 'react';
import Autosuggest from 'react-autosuggest';
import { useForm, Controller } from 'react-hook-form';
import './newcomplaint.css';
import RHFTextInput from "../../../Forms/components/RHFComponents/RHFTextInput/rhftextinput";

const API_URL = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms=';

function getComplaintNameSuggestionValue(suggestion) {
    return suggestion[0];
}
function renderSuggestion(suggestion) {
    return (
        <span>
            {suggestion}
    </span>
    );
}

export default function NewComplaint() {
    const {register, setValue, handleSubmit, control, reset } = useForm();
    const [suggestions, setSuggestions] = useState([]);
    const [complaint_name, setComplaintName] = useState('');
    const onComplaintNameChange = (event, { newValue, method }) => {
        console.log('New Value:' + newValue);
        setComplaintName(newValue);
    };
    const onSuggestionsFetchRequested = ({ value }) => {
        fetch(`${API_URL}${value}`)
            .then(response => response.json())
            .then((data) => {
                setSuggestions([...suggestions, ...data[3]])
            });
    }
    const onComplaintNameSuggestionSelected = (event, {suggestionValue}) => {
        setValue('complaint_name', suggestionValue);

    }
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };
    const inputComplaintNameDescriptionProps = {
        placeholder: 'Search Medical Conditions',
        value: complaint_name,
        onChange: onComplaintNameChange,
    };
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w3-border">
                <h3>Search Common Clinical Complaints</h3>
                <div>
                    <div className="form-row">
                        <Controller as={<Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={onComplaintNameSuggestionSelected}
                            inputProps={inputComplaintNameDescriptionProps}
                        />} name="complaint_name" control={control} />
                    </div>
                </div>
                <div><h1>OR:</h1></div>
                <div>
                    <h3>Describe Complaint Below</h3>
                    <textarea className={`w3-input`} name="other_complaint" ref={register} />
                </div>
                <input type={`submit`} value={`Add Complaint`} />
            </div>
        </form>
    )
}

/*
<button onClick={handleSubmit(onSubmit)}>
                            Add Complaint
                        </button>
<button onClick={() => {
                            console.log(complaint_name);
                            handleSubmit(data => console.log(data));
                            // addNewComplaint(icd10code, complaint_name);
                        }
                        }
                        >Add Complaint
                        </button>
<Autosuggest
                            id="complaint_name"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputComplaintNameDescriptionProps}
                        />
 */