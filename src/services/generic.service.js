import axios from 'axios'

const API_URL = "http://localhost:3000/api/v1/"

export const request = async ({url, metod, data = {}}) => {
    const response = await axios[metod](`${API_URL}/${url}`, data)

    return response;
}