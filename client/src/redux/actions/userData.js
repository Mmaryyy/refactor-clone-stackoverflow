import contents from '../../datas/contents.json';
import userData from '../../datas/userData.json';
import answers from '../../datas/answers.json';
import { getAllUser } from '../../api/user';

export const GET_LOGIN_USER = 'GET_LOGIN_USER';
export const GET_ALL_USER = 'userData/GET_ALL_USER';
export const getLoginUser = (userId) => {
  const loginUser = userData.filter((el) => el.shortId === userId)[0];
  return {
    type: GET_LOGIN_USER,
    payload: {
      ...loginUser,
    },
  };
};

export const getUserList = (page = 1) => {
  const userList = getAllUser(page);
  return {
    type: GET_ALL_USER,
    payload: userList,
  };
};
