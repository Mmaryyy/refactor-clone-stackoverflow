import contents from '../../datas/contents.json'
import userData from '../../datas/userData.json'
import answers from '../../datas/answers.json'

export const GET_SINGLE_CONTENT = "GET_SINGLE_CONTENT"
export const GET_CONTENT_LIST = "GET_CONTENT_LIST"

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