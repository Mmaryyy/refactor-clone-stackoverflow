import axios from "axios"

export const addAnswer = (questionId, currentUserId, content) => {
    const id = Number(questionId)
    const requestBody = {
        memberId: currentUserId,
        questionId: id,
        content
    }
    // answer create API 요청 보내기
    axios.post(`/api/questions/${id}/answers`, requestBody)
         .then(res => res)
         .catch(error => console.log(error))
}
export const patchAnswer = (answerId, content) => {
    const id = Number(answerId)
    const requestBody = {
        answerId: id,
        content
    }
    axios.patch(`/api/answers/${answerId}`, requestBody)
         .then(res => res)
         .catch(error => console.log(error))
}
export const deleteAnswer = (answerId) => {
    axios.delete(`/api/answers/${answerId}`)
         .then(res => res)
         .catch(error => console.log(error))
    
}
export const adoptAnswer = (memberId, questionId, answerId) => {
    axios.patch(`/api/members/${memberId}/questions/${questionId}/answers/${answerId}`)
         .then(res => res.data)
         .catch(error => console.log(error))
}