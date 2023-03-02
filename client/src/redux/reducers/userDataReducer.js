import { GET_ALL_USER, SET_CURRENT_USER, LOGOUT_USER, REMOVE_USER } from "../actions/userData";
const initialState = {
  userList: [],
  pageInfo: {},
  currentUser: {}
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser : action.payload
      };
    case GET_ALL_USER:
      return {
        ...state,
        userList: action.payload.data,
        pageInfo: action.payload.pageInfo,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: {}
      };
    case REMOVE_USER:
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};
