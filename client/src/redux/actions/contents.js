import contents from '../../datas/contents.json'
import userData from '../../datas/userData.json'
import answers from '../../datas/answers.json'
import { deleteContent } from '../../api/question'
import axios from 'axios'
//contents 액션
export const GET_SINGLE_CONTENT = "contents/GET_SINGLE_CONTENT"
export const GET_CONTENT_LIST = "contents/GET_CONTENT_LIST"
export const VOTE_UP = "contents/VOTE_UP"
export const DELETE_CONTENT = 'contents/DELETE_CONTENT'

export const getSingleContent = (postId) => {
    const id = Number(postId)
    const content = contents.filter(el => el.shortId === id)[0]
    const author = userData.filter(el => el.contents.includes(id))[0]
    const answer = answers.filter(el => el.contentNumber === id)
    return {
        type: GET_SINGLE_CONTENT,
        payload: {
            content,
            author,
            answer,
        }
    }
}
export const getContentList = () => {
    return {
        type: GET_CONTENT_LIST,
        payload: {
            contents
        }
        
    }
}
export const voteUp = async (postId, memberId) => {
    const content = await getSingleContent(postId)
    const result = await axios.post(`questions/${postId}/vote/${memberId}`)
                    .then(res => res.data)
                    .catch(error => console.log(error))
    return {
        type: VOTE_UP,
        payload: {
            ...content,
            votes: content.votes++
        }
    }
}
export const deleteSingleContent = (postId) => {
    const result = deleteContent(postId)
    return {
        type: DELETE_CONTENT,
        payload: {
            ...result
        }
    }
}