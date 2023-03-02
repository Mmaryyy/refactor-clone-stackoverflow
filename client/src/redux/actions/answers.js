import { addAnswer, patchAnswer, deleteAnswer, adoptAnswer, addAnswerComment, patchAnswerComment, deleteAnswerComment, answerVoteUp } from "../../api/answer"
//answer 액션 생성 함수

export const addSingleAnswer = (questionId, currentUserId, content) => async (dispatch) => {
    await addAnswer(questionId, currentUserId, content)
}

export const updateAnswer = (answerId, content) => async (dispatch) => {
    await patchAnswer(answerId, content)
}

export const deleteSingleAnswer = (answerId) => async (dispatch) => {
    await deleteAnswer(answerId)
}

export const adoptSingleAnswer = (memberId, questionId, answerId) => async (dispatch) => {
    await adoptAnswer(memberId, questionId, answerId)
}

export const addAnswerCommentAction = (memberId, answerId, content) => async (dispatch) => {
    await addAnswerComment(memberId, answerId, content)
}

export const patchComment = (commentId, content) => async (dispatch) => {
    await patchAnswerComment(commentId, content)
}

export const deleteComment = (commentId) => async (dispatch) => {
    await deleteAnswerComment(commentId)
}

export const answerVoteUpAction = (memberId, answerId) => async (dispatch) => {
    await answerVoteUp(memberId, answerId)
}