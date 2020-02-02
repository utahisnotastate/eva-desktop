import axios from "axios";
import {useDispatch} from "react-redux";


const API_URL = "http://127.0.0.1:8000/api";
const dispatch = useDispatch()

export function getPatientInsuranceInformation(patient) {
    return dispatch => {
        axios.get(`${API_URL}/patients/${patient}/insurance`)
            .then(response => {
                console.log(response.data);

            })
    }
}