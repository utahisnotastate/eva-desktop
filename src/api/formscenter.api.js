import axios from 'axios'
import API_URL from './api_url'


export const createNewForm = async(form) => {
    const baseform = {
        "type": form.type,
        "active": true,
        "details": form
}
    const response = await axios.post(`${API_URL}/forms/`, baseform)
    return response
}

export const updateForm = async(form) => {
    const baseform = {
        "type": form.type,
        "active": form.active,
        "details": form
}
    const response = await axios.put(`${API_URL}/forms/${form.id}/`, baseform)
    return response
}
