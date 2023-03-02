import axios from "axios"

export const addAnswer = (questionId, currentUserId, content) => {
    const id = Number(questionId)
    const requestBody = {
        memberId: currentUserId,
        questionId: id,
        content
    }
    // answer create API 요청 보내기
    axios.post(`${process.env.REACT_APP_API_URL}/api/questions/${id}/answers`, requestBody )
         .then(res => res)
         .catch(error => console.log(error))
}
export const patchAnswer = (answerId, content) => {
    const id = Number(answerId)
    const requestBody = {
        answerId: id,
        content
    }
    axios.patch(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}`, requestBody)
         .then(res => res)
         .catch(error => console.log(error))
}
export const deleteAnswer = (answerId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}`)
         .then(res => res)
         .catch(error => {
            if(error) {
                window.alert('You cannot delete a post for the following reasons:\n1. You do not have permission to delete this post.\n2. If the post has an answer, it cannot delete it.')
            }
        })
}
export const adoptAnswer = (memberId, questionId, answerId) => {
    const access = localStorage.getItem("access_token")
    const refresh = localStorage.getItem("refresh_token")
    axios.patch(`${process.env.REACT_APP_API_URL}/api/members/${memberId}/questions/${questionId}/answers/${answerId}`, {}, {headers: {
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
    axios.post(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}/answerComments`, data)
         .then(res => res.data)
         .catch(error => console.log(error))
}

export const patchAnswerComment = (commentId, content) => {
    const updateData = {
        answerCommentId: commentId,
        content
    }
    axios.patch(`${process.env.REACT_APP_API_URL}/api/answerComments/${commentId}`, updateData)
         .then(res => res.data)
         .catch(error => console.log(error))
}

export const deleteAnswerComment = (commentId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/answerComments/${commentId}`)
         .then(res => res)
         .catch(error => console.log(error))
}

export const answerVoteUp = async (answerId, memberId) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/answers/${answerId}/vote/${memberId}`)
         .then(res => res.data)
         .catch(error => {
            if(error) {
                window.alert(`You can't vote it`)
            }
        })
}