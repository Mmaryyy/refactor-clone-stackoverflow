import axios from 'axios';

export const getAllUser = async (page) => {
  const allUser = await axios.get(`members?page=${page}&size=10`);
  return allUser;
};

export const getLoginUser = async () => {
  await axios
    .post(`members/`)
    .then((res) => console.log(res))
    // 로그인 성공하면 로컬스토리지에 담아줌
    // localStorage.setItem("key", value)
    .catch((error) => console.log('error: ', error));
};

// 유저 정보
export const getUser = async (memberId) => {
  axios
    .get({
      url: `members/${memberId}`,
    })
    .then(() => {})
    .catch((err) => console.log(err));
  return getUser;
};

// 유저 정보수정
export const patchUser = async (memberId) => {
  axios
    .patch({
      url: `members/${memberId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name: '',
        about: '',
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// 회원 탈퇴
export const deleteUser = async (memberId) => {
  axios
    .delete({
      url: `members/${memberId}`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
