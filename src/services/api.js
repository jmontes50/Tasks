import axios from 'axios'

const baseURL = 'https://webinar-task-codigo.herokuapp.com/api/v1';

const api = axios.create({
    baseURL
})

export default api;