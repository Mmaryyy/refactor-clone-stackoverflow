import { addAnswer, patchAnswer, deleteAnswer } from "../../api/answer"
//answer 액션 생성 함수
export const ADD_ANSWER = 'answer/ADD_ANSWER'
export const PATCH_ANSWER = 'answer/PATCH_ANSWER'
export const DELETE_ANSWER = 'answer/DELETE_ANSWER'

export const addSingleAnswer = (questionId, answerId, content) => {
    return {
        type: ADD_ANSWER,
        payload: {
            questionId,
            answerId,
            content
        }
    }
}