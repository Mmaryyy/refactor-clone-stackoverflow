import { GET_LOGIN_USER, GET_ALL_USER } from "../actions/userData";
const initialState = {
  userList: [],
  currentPage: {},
  loginUser: {}
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case GET_ALL_USER:
      return {
        ...state,
        userList: action.payload.data,
        currentPage: action.payload.pageInfo
      }
    default:
      return state;
  }
};
