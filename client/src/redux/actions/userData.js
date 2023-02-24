import contents from '../../datas/contents.json'
import userData from '../../datas/userData.json'
import answers from '../../datas/answers.json'
import { getAllUser } from '../../api/user'

export const GET_LOGIN_USER = "GET_LOGIN_USER"
export const GET_ALL_USER = "userData/GET_ALL_USER"
export const getLoginUser = (userId) => {
    const loginUser = userData.filter(el => el.shortId === userId)[0]
    //토큰으로 로그인한 유저 정보 받는 api 요청 보내기
    //api 요청 생기면 userId 값 바꾸기
    return {
        type: GET_LOGIN_USER,
        payload: {
            ...loginUser
        }
    }
}

export const getUserList = (page = 1) => {
    const userList = getAllUser(page)
    return {
        type: GET_ALL_USER,
        payload: userList
    }
}
