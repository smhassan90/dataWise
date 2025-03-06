import axios from "axios"
const baseURL = 'https://dash-connect-backend2.vercel.app'

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