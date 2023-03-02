import contents from '../../datas/contents.json';
import userData from '../../datas/userData.json';
import answers from '../../datas/answers.json';
import { getAllUser, getLoginToken, getLoginUserInfo, patchUser, deleteUser } from '../../api/user';


export const GET_ALL_USER = 'userData/GET_ALL_USER';
export const SET_CURRENT_USER = 'userData/SET_CURRENT_USER';
export const LOGOUT_USER = 'userData/LOGOUT_USER';
export const REMOVE_USER = 'userData/REMOVE_USER';

// export const getLoginUser = (userId) => {
//   const loginUser = userData.filter((el) => el.shortId === userId)[0];
//   return {
//     type: GET_LOGIN_USER,
//     payload: {
//       ...loginUser,
//     },
//   };
// };

//* 전체회원 조회
export const getUserList = (page = 1) => async (dispatch) => {
  const userList = await getAllUser(page);
  dispatch({
    type: GET_ALL_USER,
    payload: userList,
  })
};

//* 로그인
export const setCurrentUser = (loginUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: loginUser,
  }
};
// export const setCurrentUser = (email, password) => async (dispatch) => {
//   const loginUser = await getLoginToken(email, password)
//     .then(res => {
//       const access = localStorage.getItem("access_token")
//       const refresh = localStorage.getItem("refresh_token")
//     return getLoginUserInfo(access, refresh, res.memberid)
//   })
//   dispatch({
//     type: SET_CURRENT_USER,
//     payload: loginUser,
//   })
// };

//* 회원정보 수정
export const updateUser = (memberId, name, about, location) => async (dispatch) => {
  const updateInfo = await patchUser(memberId, name, about, location)
  // console.log(updateInfo)
  .then(res => console.log(res))
  dispatch({
    type: SET_CURRENT_USER,
    payload: updateInfo,
  })
};

//* 로그아웃
export const logoutUser = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("memberId")
  return {
    type: LOGOUT_USER
  };
};

//* 회원탈퇴
export const removeUser = (memberId) => async (dispatch) => {
  await deleteUser(memberId)
    .then(res => res.data)
    .catch((err) => console.log(err));
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("memberId")
  dispatch({
    type: REMOVE_USER
  });
};

