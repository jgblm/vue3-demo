import apiInstance from '../utils/request'

export function login(data) {
    return apiInstance.post('/users/login', data)
} 