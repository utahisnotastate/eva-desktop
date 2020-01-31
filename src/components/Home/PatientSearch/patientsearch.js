import React from "react";
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import axios from "axios";
import {Typography} from "@material-ui/core";
import 'react-bootstrap-typeahead/css/Typeahead.css';

function PatientSearchItem(props) {
    console.log(props);
    return (
        <div id={props.id}>
            <Typography>{props.first_name}</Typography>
        </div>
    );
}

export default class PatientSearch extends React.Component {
    state = {
        isLoading: false,
        options: [],
    };
    handleRenderItem(item) {
        return (
            <div>
                <Typography>{item.first_name}</Typography>
            </div>
        );

    }
    _handleSearch = (query) => {
        this.setState({isLoading: true});
        async function searchPatients() {
            const result = await axios(`http://127.0.0.1:8000/api/patients?search=${query}`)
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
            <div>
                <AsyncTypeahead
                    {...this.state}
                    id="utah"
                    bsSize="large"
                    minLength={3}
                    inputProps = {{style: { width: '100%', height: 50, marginTop: 20, borderRadius: '89px 81px 81px 80px'}}}
                    onSearch={this._handleSearch}
                    placeholder="Search for a patient..."
                    renderMenuItemChildren={this.handleRenderItem}
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
    }*/

}

