import axios from 'axios';

export const getAllUser = async (page = 1) => {
  return axios.get(`/api/members?page=${page}`)
            .then((res) => res.data)
            .catch((error) => console.log('error: ', error));

};

export const joinUser = (email, name, password, memberImage) => {
  axios({
    url: `api/members`,
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    data: {
        email,
        name,
        password,
        memberImage
      },
    })
    .then((res) => res)
    .catch((error) => console.log('error: ', error));
};

//* 유저 로그인 -> 토큰 -> 정보
export const getLoginToken = (email, password) => {
  return axios({
    url: `/api/login`,
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    data: {
        email,
        password
      },
    })
    .then((res) => {
      console.log(res)
      localStorage.setItem("access_token", res.headers.authorization)
      localStorage.setItem("refresh_token", res.headers.refresh)
      return res.headers
    })
    .catch((error) => console.log('error: ', error));
};

export const getLoginUserInfo = (access, refresh, memberId) => {
  return axios({
    url: `/api/members/${memberId}`,
    headers: { authorization: access, refresh, memberId, 'Content-Type': 'application/json' },
    method: 'get'
    })
    .then((res) => {
      return res
    })
    .catch((error) => console.log('error: ', error));
};


// 유저 정보수정
export const patchUser = (memberId, name, about, location) => {
  return axios({
      url: `/api/members/${memberId}`,
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
        //! 토큰!
      },
      data: {
        name,
        about,
        location,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// 회원 탈퇴
export const deleteUser = (memberId) => {
  axios({
      url: `/api/members/${memberId}`,
      method: 'delete',
      // headers: {
        //! 토큰 날리기!
        
      //   'Content-Type': 'application/json',
      // },
      // localStorage.removeItem("access_token", res)
      // localStorage.removeItem("refresh_token", res)
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
