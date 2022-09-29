import axios from 'axios'
import { Message } from 'element-ui'
const instance = axios.create({
    baseURL: 'http://119.45.133.128:8089/api',
    timeout: 5000,
});
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.status < 400) {
        return response.data.data
    }
    if (response.status === 401) {
        return
    }

    //出现错误
    _showError(response.data.code, response.message)
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

const _showError = (errorCode, message) => {
    let title
    title = exceptionMessage[errorCode] || message || '发生未知错误'
    Message.error(title)
}
const services = (options) => {
    console.log(options);
    // console.log(options);
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data || options.params
    }
    return instance(options)
}

export default services