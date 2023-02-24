import axios from 'axios'

export const getAllUser = async (page) => {
    const allUser = await axios.get(`members?page=${page}&size=10`)
    return allUser
}

export const getLoginUser = async () => {
    const loginUser = await axios({
        url: ``,
        method: 'post',
        headers: 'token',
        data: {
            id: '',
            password: ''
        }
    }).then(res => console.log(res))
    .catch(error => console.log('error: ', error))
    return loginUser
}