


const BASE_URL = "http://localhost:3000"
const REGISTER_URL = '/user/register'
const LOGIN_URL = '/user/login'
const LOGOUT_URL = '/user/logout'
const USER_INFO_URL = '/user/info'
const UPDATE_USER_INFO_URL = '/user/update_info'
const CATEGORY_URL = '/category'
const PUBLISH_URL = '/dynamic/add'
const UPLOAD_URL = '/upload'
const DYNAMIC_SEARCH_URL = '/dynamic/search'
const DYNAMIC_UPDATE_LIKE_URL = '/dynamic/update_like'
const DYNAMIC_DETAIL_URL = '/dynamic/id'
const UPDATE_FOLLOW_URL = '/user/update_follow'
const GET_COMMENT_URL = '/comment'
const ADD_COMMENT_URL = '/comment/add'
const COMMENT_UPDATE_LIKE_URL = '/comment/update_like'


const PRIVATE_URLS = [DYNAMIC_UPDATE_LIKE_URL, UPDATE_FOLLOW_URL,]

export {
    BASE_URL,
    PRIVATE_URLS,
    REGISTER_URL, LOGIN_URL, CATEGORY_URL, USER_INFO_URL, UPDATE_USER_INFO_URL,
    PUBLISH_URL, UPLOAD_URL, LOGOUT_URL,
    DYNAMIC_SEARCH_URL, DYNAMIC_UPDATE_LIKE_URL, UPDATE_FOLLOW_URL, DYNAMIC_DETAIL_URL,
    GET_COMMENT_URL, ADD_COMMENT_URL, COMMENT_UPDATE_LIKE_URL
}