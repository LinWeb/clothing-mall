
import axios from 'axios'
import { REGISTER_URL, LOGIN_URL, LOGOUT_URL, UPDATE_FOLLOW_URL, USER_INFO_URL, UPDATE_USER_INFO_URL } from '../../config/api'

let REGISTER = async (data) => {
    return await axios.post(REGISTER_URL, data)
}

let LOGIN = async (data) => {
    return await axios.post(LOGIN_URL, data)
}
let LOGOUT = async () => {
    return await axios.post(LOGOUT_URL)
}
let UPDATE_FOLLOW = async (data) => {
    return await axios.post(UPDATE_FOLLOW_URL, data)
}

let USER_INFO = async (data) => {
    return await axios.get(USER_INFO_URL, { params: data })
}
let UPDATE_USER_INFO = async (data) => {
    return await axios.post(UPDATE_USER_INFO_URL, data)
}
export {
    REGISTER, LOGIN, LOGOUT, UPDATE_FOLLOW, USER_INFO, UPDATE_USER_INFO
}