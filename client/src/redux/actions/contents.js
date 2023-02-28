import { deleteContent, getAllContents, getSingleContent, addQuestionComment, voteUp, updateContent, getTags } from '../../api/question'
//contents 액션
export const GET_SINGLE_CONTENT = "contents/GET_SINGLE_CONTENT"
export const GET_CONTENT_LIST = "contents/GET_CONTENT_LIST"
export const UPDATE_CONTENT = 'contents/UPDATE_CONTENT'
export const VOTE_UP = "contents/VOTE_UP"
export const DELETE_CONTENT = 'contents/DELETE_CONTENT'
export const SET_CURRENT_CONTENT = 'contents/SET_CURRENT_CONTENT'
export const CLEAR_CURRENT_CONTENT = 'contents/CLEAR_CURRENT_CONTENT'
export const ADD_QUESTION_COMMENT = 'contents/ADD_QUESTION_COMMENT'
export const GET_TAG_LIST = 'contents/GET_TAG_LIST'
export const getSingleQuestion = (questionId) => async (dispatch) =>  {
    const result = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: result
    })
}
export const updateSingleQuestion = (questionId, title, content, tags) => async (dispatch) => {
    const updatedContent = await updateContent(questionId, title, content, tags)
    dispatch({
        type: UPDATE_CONTENT,
        payload: updatedContent
    })
}
export const setCurrentContent = (body) => {
    const { title, content } = body
    return {
        type: SET_CURRENT_CONTENT,
        payload: {
            title,
            content
        }
    }
}
export const getContentList = (page, keyword, sortType, filterType) => async (dispatch) => {
    const { data, pageInfo } = await getAllContents(page, keyword, sortType, filterType)
    dispatch({
        type: GET_CONTENT_LIST,
        payload: {
            contentList: data,
            pageInfo
        }
    })
}
export const voteUpdate = (questionId, memberId) => async (dispatch) => {
    const result =  await voteUp(questionId, memberId)
                         .then(res => getSingleContent(questionId))
    // singleContent 업데이트
    // singleContent api 다시 타서 받아오고
    // 업데이트된 컨텐츠를 store에 singleContent 로 다시 저장.
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: result
    })
}
export const deleteSingleContent = (postId) => async (dispatch) => {
    await deleteContent(postId)
}
export const addComment = (questionId, memberId, content) => async (dispatch) => {
    addQuestionComment(questionId, memberId, content)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: ADD_QUESTION_COMMENT,
        payload: updateContent
    })
}
export const getTagList = () => async (dispatch) => {
    const data = await getTags()
    dispatch({
        type: GET_TAG_LIST,
        payload: data
    })
}











//* axios 수정내용
// import {getAllContents, getSingleContent, createContent, updateContent, deleteContent } from '../../api/question'

// export const GET_CONTENT_LIST = "contents/GET_CONTENT_LIST"
// export const GET_SINGLE_CONTENT = "contents/GET_SINGLE_CONTENT"
// export const CREATE_CONTENT = "contents/CREATE_CONTENT"
// export const UPDATE_CONTENT = "contents/UPDATE_CONTENT"
// export const DELETE_CONTENT = "contents/DELETE_CONTENT"
// export const CURRENT_DEFAULT = "contents/CURRENT_DEFAULT"
// // export const VOTE_UP = "contents/VOTE_UP"

// export const allContents = (page = 1) => {
//     const allContents = getAllContents(page)
//     return {
//         type: GET_CONTENT_LIST,
//         payload: allContents
//     }
// }

// export const singleContents = (postId) => {
//     const singleContent = getSingleContent(postId)
//     return {
//         type: GET_SINGLE_CONTENT,
//         payload: singleContent
//     }
// }

// export const newContent = (postId) => {
//     const newContent = createContent(postId)
//     return {
//         type: CREATE_CONTENT,
//         payload: newContent
//     }
// }

// export const editContent = (postId) => {
//     const editContent = updateContent(postId)
//     return {
//         type: UPDATE_CONTENT,
//         payload: editContent
//     }
// }

// export const removeContent = (postId) => {
//     const allContents = deleteContent(postId)
//     return {
//         type: DELETE_CONTENT,
//         payload: allContents
//     }
// }

