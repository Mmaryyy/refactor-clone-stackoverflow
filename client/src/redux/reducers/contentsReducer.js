import { GET_SINGLE_CONTENT, GET_CONTENT_LIST } from "../actions/contents"
const initialState = {
    contentList: [],
    currentContent: {
        content: {},
        author: {},
        answer: []
    }
}

export const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_CONTENT:
      return {
        ...state,
        currentContent: action.payload,
      };
    case GET_CONTENT_LIST:
      return {
        ...state,
        contentList: action.payload.contents,
      };
    default:
      return state;
  }
};