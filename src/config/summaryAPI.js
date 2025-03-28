import axios from "axios"
export const baseURL = 'http://localhost:4000'
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
    getIntegrations: {
        url: '/api/integration/v1/getIntegration',
        method: 'get'
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
    refreshQuery:{
        url:'/api/integration/v1/refreshQuery',
        method: 'post'
    },
    reRunQuery:{
        url:'/api/integration/v1/reRunQuery',
        method: 'post'
    },
    fetchStories:{
        url:'/api/integration/v1/getAllStories',
        method: 'get'
    },
    fetchEmployees:{
        url:'/api/employee/v1/getEmployee',
        method: 'get'
    },
    changePriority:{
        url:'/api/story/v1/changePriority',
        method: 'post'
    },
    addStoryBoard:{
        url:'/api/story/v1/addStoryBoard',
        method: 'post'
    },
    editStoryBoard:{
        url:'/api/story/v1/updateStoryBoard',
        method: 'put'
    },
    getStoryBoard:{
        url:'/api/story/v1/getStoryBoard',
        method: 'get'
    },
    fetchSingleStoryBoard:{
        url:'/api/story/v1/getStoryBoard',
        method: 'get'
    },
    fetchSingleEmployee:{
        url:'/api/employee/v1/getEmployee',
        method: 'get'
    },
    addStoryBoardForUser:{
        url:'/api/story/v1/addStoryForEmployee',
        method: 'post'
    },
    deleteStoryBoardForUser:{
        url:'/api/story/v1/deleteStoryForEmployee',
        method: 'delete'
    },
    editEmployee:{
        url:'/api/employee/v1/updateEmployee',
        method: 'put'
    },
    addEmployee:{
        url:'/api/employee/v1/addEmployee',
        method: 'post'
    },
    getLevels:{
        url:'/api/level/v1/getLevel',
        method: 'get'
    },
    addStoryBoardLevel:{
        url:'/api/level/v1/addStoryBoardLevel',
        method: 'post'
    },
    deleteLevelForStory:{
        url:'/api/level/v1/deleteLevelForStory',
        method: 'delete'
    },
    editFetchTable:{
        url:'/api/integration/v1/filterFetchTables',
        method: 'get'
    },
    editMetaTable:{
        url:'/api/integration/v1/updateMetaIntegrationDetails',
        method: 'post'
    },
    getMetaIntegration:{
        url:'/api/integration/v1/getMetaIntegration',
        method: 'get'
    },
    deleteMetaIntegration:{
        url:'/api/integration/v1/deleteMetaIntegration',
        method: 'delete'
    },
    uploadImage:{
        url:'/api/user/v1/uploadImage',
        method: 'post'
    },
    updateUser:{
        url:'/api/user/v1/updateUser',
        method: 'put'
    },
    changePassword:{
        url:'/api/user/v1/changePassword',
        method:'put'
    }
}