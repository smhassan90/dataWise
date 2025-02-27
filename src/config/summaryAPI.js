import axios from "axios"
const baseURL = 'http://localhost:4000'

export const Axios = axios.create({
    baseURL : baseURL,
    withCredentials : true
})

export const summary = {
    register:{
        url: '/api/user/v1/register',
        method:'post'
    },
    login:{
        url: '/api/user/v1/login',
        method:'post'
    }
}