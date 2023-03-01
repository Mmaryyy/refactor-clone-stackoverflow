import { GET_SINGLE_CONTENT, GET_CONTENT_LIST, VOTE_UP, SET_CURRENT_CONTENT, ADD_QUESTION_COMMENT, UPDATE_CONTENT, GET_TAG_LIST } from "../actions/contents"
const initialState = {
    contentList: [],
    pageInfo: {},
    currentContent: {},
    currentPostContent: {},
    tagList: []
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
        contentList: action.payload.contentList,
        pageInfo: action.payload.pageInfo
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        currentContent: action.payload
      };
    case VOTE_UP:
      return {
        ...state,
        currentVote: action.payload.votes
      };
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentPostContent: action.payload
      };
    case ADD_QUESTION_COMMENT:
      return {
        ...state,
        currentContent: action.payload
      };
    case GET_TAG_LIST:
      return {
        ...state,
        tagList: action.payload
      }
    default:
      return state;
  }
};