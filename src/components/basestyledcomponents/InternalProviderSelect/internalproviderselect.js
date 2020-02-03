import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import {Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import GridContainer from "../../basestyledcomponents/Grid/GridContainer";
import GridItem from "../../basestyledcomponents/Grid/GridItem";
import {register} from "../../../serviceWorker";

const API_URL = "http://127.0.0.1:8000/api";

export default function InternalProviderSelect({register}) {
    let { id } = useParams();
    const [practiceproviders, setPracticeProvders] = useState([]);
    useEffect(() => {
        async function getInternalProvidersFromAPI() {
            const result = await axios(`${API_URL}/providers/`);
            console.log(result.data)
            return result.data;
        }
        getInternalProvidersFromAPI().then(response => {
            let provider;
            for (provider of response) {
                practiceproviders.push(provider)
            }
            console.log(practiceproviders);

        })
    }, []);
    return(
        <select ref={register} placeholder={`Select Internal Provider`} name="provider">
            {practiceproviders.map(provider => (
                <option key={provider.id} value={provider.id}>{provider.display_name}</option>
            ))}
        </select>
    );
}