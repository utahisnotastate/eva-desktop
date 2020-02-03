import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Autosuggest from 'react-autosuggest';

const API_URL = 'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?sf=primary_name,consumer_name,icd10cm_codes,word_synonyms,synonyms&df=primary_name,consumer_name,icd10cm_codes&terms=';

function getICD10SuggestionValue(suggestion) {
    return suggestion[2];
}
function getComplaintNameSuggestionValue(suggestion) {
    return suggestion[1];
}
function renderSuggestion(suggestion) {
    return (
        <span>
      {suggestion[2]}


            -
            {suggestion[1]}
    </span>
    );
}

export default class ICD10Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assessmentsuggestions: [],
            icd10assessmentcode: '',
            assessment_description: '',
            other_assessment: '',
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            icd10assessmentcode: newValue,
        });
    };

    onComplaintNameChange = (event, { newValue, method }) => {
        this.setState({
            assessment_description: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        fetch(`${API_URL}${value}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ assessmentsuggestions: data[3] });
            });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            assessmentsuggestions: [],
        });
    };

    handleChoice = (event, { suggestion }) => {
        this.setState({ icd10assessmentcode: suggestion[2] });
        this.setState({ assessment_description: suggestion[1] });

        this.props.dispatch({type: 'updated_icd10', icd10value: {
                icd10assessmentcode: suggestion[2],
                assessment_description: suggestion[1]

            } });
    }

    render() {
        const {
            assessmentsuggestions, icd10assessmentcode, assessment_description, other_assessment,
        } = this.state;
        const { register } = this.props;
        const inputProps = {
            placeholder: 'Search ICD10',
            value: icd10assessmentcode,
            name: 'icd10code',
            ref: register,
            onChange: this.onChange,
        };
        const inputComplaintNameDescriptionProps = {
            placeholder: 'Search ICD10 Descriptions',
            value: assessment_description,
            name: 'icd10description',
            ref: register,
            onChange: this.onComplaintNameChange,
        };
        return (
            <div className="">
                <Grid container>
                    <Grid>
                        <Autosuggest
                            id="icd10assessmentcode"
                            suggestions={assessmentsuggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getICD10SuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={this.handleChoice}
                            inputProps={inputProps}
                        />
                    </Grid>
                    <Grid>
                        <Autosuggest
                            id="assessment_description"
                            suggestions={assessmentsuggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getComplaintNameSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            onSuggestionSelected={this.handleChoice}
                            inputProps={inputComplaintNameDescriptionProps}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
