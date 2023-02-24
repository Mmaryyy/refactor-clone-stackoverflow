import axios from 'axios'

export const getAllContents = async (page) => {
    const allUser = await axios.get(`/members?page=${page}&size=10`)
    return allUser
}

export const deleteContent = async (postId) => {
    
    const result = await axios.delete(`/questions/${postId}`)
                    .then(res => result = res)
                    .catch(error => console.log(error))
    
    return result
}