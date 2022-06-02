import React, { Component } from 'react';
import { Input } from 'react-formik-ui';
import Autosuggest from 'react-autosuggest';
import './newcomplaint.css';

const API_URL = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm&terms=';

function getICD10SuggestionValue(suggestion) {
    return suggestion[2];
}
function getComplaintNameSuggestionValue(suggestion) {
    return suggestion[1];
}
function renderSuggestion(suggestion) {
    return (
        <span>
            {suggestion}
    </span>
    );
}
export default class NewComplaint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            icd10code: '',
            complaint_name: '',
        };
    }

    onComplaintNameChange = (event, { newValue, method }) => {
        this.setState({
            complaint_name: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        fetch(`${API_URL}${value}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({ suggestions: [...this.state.suggestions, ...data[3]] });
            });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChoice = (event, { suggestion }) => {
        // this.setState({ icd10code: suggestion[2] });
        this.setState({ complaint_name: suggestion[1] });
    }

    render() {
        const { suggestions, icd10code, complaint_name } = this.state;
        const {
            new_complaint, addNewComplaint, updateICD10Code, values,
        } = this.props;

        const inputComplaintNameDescriptionProps = {
            placeholder: 'Search Medical Conditions',
            value: complaint_name,
            onChange: this.onComplaintNameChange,
        };
        return (
            <div className="w3-border">
                <h3>Add Complaint</h3>
                <div>
                    <div className="form-row">
                        <Autosuggest
                            id="complaint_name"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={this.handleChoice}
                            inputProps={inputComplaintNameDescriptionProps}
                        />
                        <button onClick={() => {
                            console.log(icd10code, complaint_name);
                            addNewComplaint(icd10code, complaint_name);
                        }
                        }
                        >Add Complaint</button>
                    </div>


                </div>
            </div>
        );
    }
}


/*
onChange = (event, { newValue, method }) => {
    this.setState({
        icd10code: newValue,
    });
};

const inputProps = {
            placeholder: 'Search ICD10',
            value: icd10code,
            onChange: this.onChange,
        };
<Autosuggest
                            id="icd10code"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getICD10SuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={this.handleChoice}
                            inputProps={inputProps}
                        />
const API_URL = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm_codes,word_synonyms,synonyms&df=primary_name,consumer_name,icd10cm_codes&terms=';
function renderSuggestion(suggestion) {
    console.log('suggestion: ' + suggestion);
    return (
        <span>
      {suggestion[2]}


            -
            {suggestion[1]}
    </span>
    );
}
 */
