import { ADD_ANSWER } from "../actions/answers"
const initialState = {
  answerList: [],
  currentAnswer: {
    content: {},
    author: {}
  }
}

export const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER : 
            return {
              ...action.payload
            }
            default : 
            return state
    }
}