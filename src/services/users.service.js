import { request } from './generic.service'

const getUser = (id) => request({url: `users/${id}`, metod: 'get'})

const getUsers = () => request({url: 'users', metod: 'get'})

export {
    getUser, getUsers
}