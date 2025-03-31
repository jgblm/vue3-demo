import apiInstance from '../utils/request'

export function login(data) {
    return apiInstance.post('/users/login', data)
}

export function noticeCount() {
    return apiInstance.get('/leave/count')
}

export function getMenuList() {
    return apiInstance.post('/menu/list')
}

export function getUserList(params){
    return apiInstance.get('/users/list', {
        params:params
    })
}

export function deleteUsers(params){
    return apiInstance.post('/users/delete', {
        params:params
    })
}