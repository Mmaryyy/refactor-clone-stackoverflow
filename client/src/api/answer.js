import axios from "axios"
import { getSingleContent } from "./question"
import contents from '../datas/contents.json'
import answer from '../datas/answers.json'

export const addAnswer = async (questionId, currentUserId, content) => {
    const id = Number(questionId)
    const requestBody = {
        memberId: currentUserId,
        questionId: id,
        content
    }
    const result = await axios.post(`/api/questions/${id}/answers`, requestBody)
                              .then(res => res)
                              .catch(error => console.log(error))
    return result
}
export const patchAnswer = async (questionId, answerId) => {
    const id = Number(answerId)
    const result = await axios.patch(`/api/answers/${id}`)
                              .then(res => res)
                              .catch(error => console.log(error))
    // answer update api 요청
    const { answer } = getSingleContent(questionId)
    // 업데이트된 질문 내용 받아서 answer 구조분해 해서 리턴
    return answer
}
export const deleteAnswer = async (answerId) => {
    const id = Number(answerId)
    await axios.delete(`/api/answers/${id}`)
               .then(res => res)
               .catch(error => console.log(error))
    
}