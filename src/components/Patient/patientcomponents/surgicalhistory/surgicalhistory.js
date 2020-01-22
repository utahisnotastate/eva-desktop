import React, { Component } from 'react';
// import { Input } from 'react-formik-ui';
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Card from "../../../basestyledcomponents/Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Autosuggest from 'react-autosuggest';
import './surgicalhistory.css';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const API_URL = 'https://clinicaltables.nlm.nih.gov/api/procedures/v3/search?terms=';

function getSuggestionValue(suggestion) {
    return suggestion[0];
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion}</span>
    );
}
const classes = {
    root: {
        margin: 20,
    },
    banner: {
        marginBottom: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0232B2',
        color: '#ffffff',
    },
    headeritem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #888',
        width: '100%',
        height: 60,
    },
    listitem: {
        marginTop: 15,
    },
    listitemheader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    }
}
export default class SurgicalHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selected: undefined,
            history: [],
            suggestions: [],
        };
    }

    async componentDidMount() {
        const result = await axios(`http://127.0.0.1:8000/api/patients/${this.props.match.params.id}/surgicalhistory/`);
        console.log(result);
        this.setState({history: result.data});
        console.log(this.state.history);
    }

    handleClick(item) {
        // add new surgery to database
        axios.post(`http://127.0.0.1:8000/api/patients/${this.props.match.params.id}/surgicalhistory/`, {
            patient: this.props.match.params.id,
            procedure: item,
            date: null,
            performed_by: '',

        })
            .then(response => {
                // fetch updated surgical history list from database
                console.log('Response: ' + response);
                const fetchData = async () => {
                    const result = await axios(`http://127.0.0.1:8000/api/patients/${this.props.match.params.id}/surgicalhistory/`);
                    console.log(result);
                    this.setState({history: result.data});
                    console.log(this.state.history);

                };
                fetchData();
            })
            .catch(error => {
                console.log(error);
            })
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        fetch(`${API_URL}${value}`)
            .then(response => response.json())
            .then(data => this.setState({ suggestions: data[3] }));
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    deleteItem = (item) => {
        this.setState({ history: this.state.history.slice(0, item).concat(this.state.history.slice(item + 1, this.state.history.length)) });
    }



    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Search Medical Procedures',
            value,
            onChange: this.onChange,
        };
        return (
            <div style={{margin: 20}}>
                <GridContainer direction="column" justify="flex-start">
                    <GridItem style={{marginBottom: 10,}}>
                        <Typography>Surgical History</Typography>
                    </GridItem>
                    <GridItem xs={12} sm={10}>
                        <Card style={classes.header} square>
                            <GridItem style={classes.headeritem}>
                                <Typography>Type of Surgery or Procedure</Typography>
                            </GridItem>
                            <GridItem style={classes.headeritem} border={1}>
                                <Typography>Year Performed</Typography>
                            </GridItem>
                            <GridItem style={classes.headeritem}>
                                <Typography>Doctor or Facility</Typography>
                            </GridItem>
                            <GridItem style={classes.headeritem}>
                                <Typography>Action</Typography>
                            </GridItem>
                        </Card>
                    </GridItem>
                    <div>
                        {this.state.history.map((surgery, index) => (
                            <GridItem key={index} xs={12} sm={10}>
                                <Card style={classes.listitemheader} square="true">
                                    <GridItem style={classes.headeritem}>
                                        <input name={`history.${index}.procedure`} value={this.state.history[index].procedure}/>
                                    </GridItem>
                                    <GridItem style={classes.headeritem} border={1}>
                                        <input name={`history.${index}.date`} value={this.state.history[index].date} />
                                    </GridItem>
                                    <GridItem style={classes.headeritem}>
                                        <input name={`history.${index}.performed_by`}/>
                                    </GridItem>
                                    <GridItem style={classes.headeritem}>
                                        <Button onClick={() => this.deleteItem(index)}>X</Button>
                                    </GridItem>
                                </Card>
                            </GridItem>
                        ))}
                    </div>
                </GridContainer>
                <div className="w3-row w3-section basic-row">
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                    <button onClick={() => {
                        this.handleClick(this.state.value);
                        this.setState({ value: '' });
                    }}
                    >


                        Add
                    </button>
                </div>
                <div>
                    <button type="submit" onClick={() => console.log(this.state.history)}>Save</button>
                </div>
            </div>
        );
    }
}

/*
<input name={`history.${index}.type`} value={this.state.history[index].type}/>
onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_URL}${value}`)
        .then(response => response.json())
        .then(data => this.setState({ suggestions: data.results }))
  }
 */


/*
import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useParams} from 'react-router-dom';
import { useFormik, FieldArray } from 'formik';
import { Form, Input } from 'react-formik-ui'
import useForm from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import {Paper, Typography, Card} from "@material-ui/core";
import GridContainer from "../../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../../basestyledcomponents/Grid/GridItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 20,
    },
    banner: {
        marginBottom: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0232B2',
        color: '#ffffff',
    },
    headeritem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #888',
        width: '100%',
        height: 60,
    },
    listitem: {
      marginTop: 15,
    },
    listitemheader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    }
}));
export default function SurgicalHistory() {
    let { id } = useParams();
    const classes = useStyles();
    const [surgicalhistory, setSurgicalHistory] = useState([]);
    const formik = useFormik({
        initialValues: {
            surgicalhistory: surgicalhistory,
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
    });

    return (
        <div className={classes.root}>
            <GridContainer direction="column" justify="flex-start">
                <GridItem className={classes.banner}>
                        <Typography>Surgical History</Typography>
                </GridItem>
                <GridItem xs={12} sm={10}>
                    <Card className={classes.header} square>
                        <GridItem className={classes.headeritem}>
                        <Typography>Type of Surgery or Procedure</Typography>
                    </GridItem>
                        <GridItem className={classes.headeritem} border={1}>
                            <Typography>Year Performed</Typography>
                        </GridItem>
                        <GridItem className={classes.headeritem}>
                            <Typography>Doctor or Facility</Typography>
                        </GridItem>
                        <GridItem className={classes.headeritem}>
                            <Typography>Action</Typography>
                        </GridItem>
                    </Card>
                </GridItem>
                <Form mode="themed" onSubmit={formik.handleSubmit}>
                    <FieldArray
                        name="surgicalhistory"
                        render={({formik, arrayHelpers}) => (
                            <div>
                                {formik.values.surgicalhistory.map((surgery, index) => (
                                <GridItem key={index} xs={12} sm={10}>
                                    <Card className={classes.header} square>
                                        <GridItem className={classes.headeritem}>
                                            <Input name={`surgicalhistory.${index}.type`}/>
                                        </GridItem>
                                        <GridItem className={classes.headeritem} border={1}>
                                            <Input name={`surgicalhistory.${index}.year`}/>
                                        </GridItem>
                                        <GridItem className={classes.headeritem}>
                                            <Input name={`surgicalhistory.${index}.performed_by`}/>
                                        </GridItem>
                                        <GridItem className={classes.headeritem}>
                                            <Button onClick={() => arrayHelpers.remove(index)}>X</Button>
                                        </GridItem>
                                    </Card>
                                </GridItem>
                            ))}
                            </div>
                        )}
                    >
                    </FieldArray>

                </Form>

            </GridContainer>
        </div>
    )
}
 */