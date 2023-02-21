export const SET_POST_ID = "SET_POST_ID"

export const setPostId = (url) => {
    const id = parseInt(url.slice(url.lastIndexOf('=')+1))
    return {
        type: SET_POST_ID,
        payload: {
            id
        }
    }
}