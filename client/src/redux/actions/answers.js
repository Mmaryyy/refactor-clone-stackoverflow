import { addAnswer, patchAnswer, deleteAnswer, adoptAnswer } from "../../api/answer"
//answer 액션 생성 함수
export const ADD_ANSWER = 'answer/ADD_ANSWER'
export const PATCH_ANSWER = 'answer/PATCH_ANSWER'
export const DELETE_ANSWER = 'answer/DELETE_ANSWER'

export const addSingleAnswer = (questionId, answerId, content) => async (getSingleQuestion) => {
    await addAnswer(questionId, answerId, content)
    .then(res => res.data)
    .catch(error => console.log(error))
    getSingleQuestion(questionId)
}

export const updateAnswer = (questionId, answerId, content) => async (getSingleQuestion) => {
    await patchAnswer(answerId, content)
    .then(res => res.data)
    .catch(error => console.log(error))
    getSingleQuestion(questionId)
}

export const deleteSingleAnswer = (questionId, answerId) => async (getSingleQuestion) => {
    await deleteAnswer(answerId)
    .then(res => res.data)
    .catch(error => console.log(error))
    getSingleQuestion(questionId)
}

export const adoptSingleAnswer = (memberId, questionId, answerId) => async (getSingleQuestion) => {
    await adoptAnswer(memberId, questionId, answerId)
    .then(res => res.data)
    .catch(error => console.log(error))
    getSingleQuestion(questionId)
}