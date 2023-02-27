import axios from 'axios'


//* 검색했을 때 param 받아오는 api 추가하기
export const getAllContents = async (page) => {
    const getAllContents = 
    await axios.get(`/questions${page}page=1&keyword=&sortType=created_At&filterType=1`)
        .then(res => res.data.data)
        .catch(error => console.log(error))
    return getAllContents
}


export const getSingleContent = async (postId) => {
    const getSingleContent = await axios.get(`/questions/${postId}`)
    .then(res => res.data)
    .catch(error => console.log(error))
    return getSingleContent
}


export const createContent = async (postId) => {
    const CreateContent = await axios.post(`/members/${postId}/questions`)
    .then(res => res.data)
    .catch(error => console.log(error))
    return CreateContent
}


export const updateContent = async (postId) => {
    const result = await axios.patch(`/questions/${postId}`)
    .then(res => res.data)
    .catch(error => console.log(error))
    getSingleContent(postId)
    return result
}


export const deleteContent = async (postId) => {
    await axios.delete(`/questions/${postId}`)
    return getAllContents()
}

