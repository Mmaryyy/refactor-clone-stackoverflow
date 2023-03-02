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
    const access = localStorage.getItem("access_token")
    const refresh = localStorage.getItem("refresh_token")
    axios.patch(`/api/members/${memberId}/questions/${questionId}/answers/${answerId}`, {}, {headers: {
        "Authorization": access,
        "refresh": refresh
    }})
         .then(res => console.log(res.data))
         .catch(error => console.log(error))
}

export const addAnswerComment = (memberId, answerId, content) => {
    const data = {
        memberId,
        answerId,
        content
    }
    console.log(data)
    axios.post(`/api/answers/${answerId}/answerComments`, data)
         .then(res => res.data)
         .catch(error => console.log(error))
}

export const patchAnswerComment = (commentId, content) => {
    const updateData = {
        answerCommentId: commentId,
        content
    }
    axios.patch(`/api/answerComments/${commentId}`, updateData)
         .then(res => res.data)
         .catch(error => console.log(error))
}

export const deleteAnswerComment = (commentId) => {
    axios.delete(`/api/answerComments/${commentId}`)
         .then(res => res)
         .catch(error => console.log(error))
}

export const answerVoteUp = async (answerId, memberId) => {
    await axios.post(`/api/answers/${answerId}/vote/${memberId}`)
         .then(res => res.data)
         .catch(error => console.log(error))
}