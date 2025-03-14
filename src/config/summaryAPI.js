import axios from "axios"
const baseURL = 'http://localhost:4000'
// const baseURL = 'https://dash-connect-backend.vercel.app/'

export const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true
})
Axios.interceptors.request.use(async (config) => {
    const Token = localStorage.getItem('token')
    if (Token) {
        config.headers.Authorization = `Bearer ${Token}`
    }
    return config
},
    (error) => {
        return Promise.reject(error)
    })



export const summary = {
    register: {
        url: '/api/user/v1/register',
        method: 'post'
    },
    login: {
        url: '/api/user/v1/login',
        method: 'post'
    },
    testConnect: {
        url: '/api/integration/v1/testConnectionIntegration',
        method: 'post'
    },
    fetchTables: {
        url: '/api/integration/v1/fetchTables',
        method: 'post'
    },
    metaIntegrations: {
        url: '/api/integration/v1/metaIntegrationDetails',
        method: 'post'
    },
    generateSuggestions:{
        url: '/api/integration/v1/sugestionQuestion',
        method: 'post'
    },
    generateGraph:{
        url:'/api/integration/v1/genrateGraphQuery',
        method: 'post'
    },
    saveStory:{
        url:'/api/integration/v1/saveStory',
        method: 'post'
    },
    reRunQuery:{
        url:'/api/integration/v1/reRunQuery',
        method: 'post'
    },
    fetchStories:{
        url:'/api/integration/v1/getAllStories',
        method: 'get'
    }
}