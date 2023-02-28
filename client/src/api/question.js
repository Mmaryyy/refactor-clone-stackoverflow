import axios from 'axios'


//* 검색했을 때 param 받아오는 api 추가하기
export const getAllContents = async (page = 1, keyword = '', sortType = 'created_At', filterType = 1) => {
    return axios.get(`/api/questions?page=${page}&keyword=${keyword}&sortType=${sortType}&filterType=${filterType}`)
                                          .then(res => res.data)
                                          .catch(error => console.log(error))
}
export const getSingleContent = async (postId) => {
    return axios.get(`/api/questions/${postId}`)
                .then(res => res.data)
                .catch(error => console.log(error))
}
export const createContent = (memberId, title, content) => {
    const newContent = {
        title,
        content
    }
    const createContent = axios.post(`/api/members/${memberId}/questions`, newContent)
                                     .then(res => res.data)
                                     .catch(error => console.log(error))
    return createContent
}
export const updateContent = async (questionId, title, content, tags) => {
    const updateContent = {
        questionId,
        title,
        content,
        tags
    }
    return axios.patch(`/api/questions/${questionId}`, updateContent)
                .then(res => res.data)
                .catch(error => console.log(error))
}
export const deleteContent = (questionId) => {
     axios.delete(`/questions/${questionId}`)
               .then(res => res)
               .catch(error => console.log(error))
}
//TODO: api 다시 확인하기
export const voteUp = async (questionId, memberId) => {
    await axios.post(`/api/questions/${questionId}/vote/${memberId}`)
               .then(res => res)
               .catch(error => console.log(error))
}

//* question comment CUD

export const addQuestionComment = async (questionId, memberId, content) => {
    const comment = {
        memberId,
        questionId,
        content
    }
    return axios.post(`/api/questions/${questionId}/questionComments`, comment)
         .then(res => res.data)
         .catch(error => console.log(error))
}

export const updateQuestionComment = async (commentId, content) => {
    const comment = {
        questionCommentId: commentId,
        content
    }
    return axios.patch(`/api/questionComments/${commentId}`, comment)
        .then(res => res.data)
        .catch(error => console.log(error))
}

export const deleteQuestionComment = async (commentId) => {
    return axios.delete(`/api/questionComments/${commentId}`)
         .catch(error => console.log(error))
}


//* get Tag List

export const getTags = () => {
    return axios.get(`/api/tags`)
                .then(res => res.data)
                .catch(error => console.log(error))
}
