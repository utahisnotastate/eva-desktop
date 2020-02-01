import React from "react";
import {AsyncTypeahead, Menu, MenuItem} from 'react-bootstrap-typeahead';
import axios from "axios";
import {Typography} from "@material-ui/core";
import 'react-bootstrap-typeahead/css/Typeahead.css';

function PatientSearchItem(props) {
    // console.log(props);
    return (
        <div key={props.option.id} style={{display: "flex", width: '100%'}} id={props.option.id}>
            <Typography>{props.option.first_name}</Typography>
            <Typography>{props.option.last_name}</Typography>
            <Typography>{props.option.date_of_birth}</Typography>
        </div>
    );
}

export default class PatientSearch extends React.Component {
    state = {
        isLoading: false,
        options: [],
    };

    _handleSearch = (query) => {
        this.setState({isLoading: true});
        async function searchPatients() {
            const result = await axios.get(`http://127.0.0.1:8000/api/patients?search=${query}`)
            console.log(result.data);
            return result.data;
        }
        searchPatients().then((response) => {
            this.setState({
                isloading: false,
                options: response,
            });
            console.log(this.state.options);
        }).catch(error => console.log(error));

    }

    render() {
        return (
            <div style={{ marginTop: 50, marginBottom: 50}}>
                <AsyncTypeahead
                    {...this.state}
                    id="utah"
                    bsSize="large"
                    minLength={3}
                    filterBy={['first_name', 'last_name', 'date_of_birth']}
                    inputProps={{className: 'w3-input w3-ul'}}
                    labelKey={(option) => `${option.first_name}${option.last_name}${option.date_of_birth}`}
                    onSearch={this._handleSearch}
                    renderMenuItemChildren={(option, props) => (
                        <PatientSearchItem option={option}/>

                    )}
                    placeholder="Search for a patient..."
                />
            </div>
        );
    }


    /*_handleSearch = (query) => {
        this.setState({isLoading: true});
        makeAndHandleRequest(query)
            .then(({options}) => {
                this.setState({
                    isLoading: false,
                    options,
                });
            });
            style: { width: '100%', height: 50, marginTop: 20, borderRadius: '89px 81px 81px 80px'}
    }*/

}

