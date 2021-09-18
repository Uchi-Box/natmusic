import axios from "axios";


export const baseUrl = 'http://localhost:3001'

const axiosInstance = axios.create({
    baseURL:baseUrl,
    withCredentials:true
})

axiosInstance.interceptors.response.use(
    res=>res.data,
    err =>{
        console.log(err,'axios拦截器网络错误')
    }
)

export const playMode = {
    sequence:0,
    loop:1,
    random:2
}

export const resultTypes = {
    songs:'1',
    albums:'1000',
    singers:'100',
    MVs:'1006',
    complex:'1018',
}

export {
    axiosInstance
}