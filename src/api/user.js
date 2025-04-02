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

export function getRoleList(){
    return apiInstance.get('/roles/allList')
}

export function getDeptList(){
    return apiInstance.get('/dept/list')
}

export function createOrUpdateUser(params){
    return apiInstance.post('/users/operate', {
        params:params
    })
}