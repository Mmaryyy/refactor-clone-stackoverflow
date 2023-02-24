import { GET_SINGLE_CONTENT, GET_CONTENT_LIST, VOTE_UP } from "../actions/contents"
const initialState = {
    contentList: [],
    currentContent: {
        content: {},
        author: {},
        answer: []
    },
    currentVote: 0
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
    case VOTE_UP:
      return {
        ...state,
        currentVote: action.payload.votes
      };
    default:
      return state;
  }
};