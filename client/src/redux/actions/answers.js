import { addAnswer, patchAnswer, deleteAnswer, adoptAnswer, addAnswerComment, patchAnswerComment, deleteAnswerComment, answerVoteUp } from "../../api/answer"
//answer 액션 생성 함수
import { getSingleContent } from "../../api/question"
import { GET_SINGLE_CONTENT } from "./contents"
export const addSingleAnswer = (questionId, currentUserId, content) => async (dispatch) => {
    await addAnswer(questionId, currentUserId, content)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const updateAnswer = (answerId, content, questionId) => async (dispatch) => {
    await patchAnswer(answerId, content)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const deleteSingleAnswer = (answerId, questionId) => async (dispatch) => {
    await deleteAnswer(answerId)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const adoptSingleAnswer = (memberId, questionId, answerId) => async (dispatch) => {
    await adoptAnswer(memberId, questionId, answerId)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const addAnswerCommentAction = (memberId, answerId, content, questionId) => async (dispatch) => {
    await addAnswerComment(memberId, answerId, content)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}
export const patchComment = (commentId, content, questionId) => async (dispatch) => {
    await patchAnswerComment(commentId, content)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const deleteAnswerCommentAction = (commentId, questionId) => async (dispatch) => {
    await deleteAnswerComment(commentId)
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}

export const answerVoteUpAction = (memberId, answerId, questionId) => async (dispatch) => {
    await answerVoteUp(memberId, answerId)    
    const updateContent = await getSingleContent(questionId)
    dispatch({
        type: GET_SINGLE_CONTENT,
        payload: updateContent
    })
}