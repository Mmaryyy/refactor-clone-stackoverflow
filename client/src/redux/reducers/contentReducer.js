const initialState = {
    id: 0
}

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POST_ID' :
            return {
                ...state,
                postId: action.payload
            }
            default : 
            return state
    }
}