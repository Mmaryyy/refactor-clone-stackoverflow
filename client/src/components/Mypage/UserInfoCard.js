import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
// import user from '../../datas/userData.json';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 20px;
  /* margin-left: 165px; */
  .user_profile {
    display: flex;
    flex-direction: row;
  }
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .user_name {
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 10px;
  }
  svg {
    fill: rgb(144,153,160);
  }
  .joinDate {
    font-size: 15px;
    color: rgb(106,115,124);
    padding-top: 2px;
  }
`;

const Myinfo = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 20px;

  .join {
    margin-right: 10px;
  }
`;

const Sub = styled.div`
  display: flex;
  margin-left: 500px;

  .edit.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a9b0b6;
    color: #c3c6cb;
    border-radius: 5px;
    margin: 30px 15px 0 0;
    height: 40px;
    width: 120px;
  }
  .network.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a9b0b6;
    color: #c3c6cb;
    margin: 30px 15px 0 0;
    border-radius: 5px;
    height: 40px;
    width: 150px;
  }
`;

export default function UserInfoCard() {
  const user = useSelector(state => state.userDataReducer.currentUser)
  console.log(user)
  return (
    <div>
      <Header>
        <div className='user_profile'>
          <Avatar width='100px' height='100px' margin='20px' />
          <MyProfile>
            <div className='user_name'>{user.name}</div>
            <Myinfo>
              <div className='join'>
                <svg
                  aria-hidden='true'
                  className='svg-icon iconCake'
                  width='22'
                  height='22'
                  viewBox='0 0 18 18'
                >
                  <path d='M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z'></path>
                </svg>
              </div>
              <div className='joinDate'>{user.email}</div>
            </Myinfo>
          </MyProfile>
        </div>

        <Sub>
          <Link to='/mypage/edit' style={{ textDecoration: 'none' }}>
            <div className='edit profile'>
              <svg
                aria-hidden='true'
                className='svg-icon iconPencil'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z'></path>
              </svg>
              <div>Edit Profile</div>
            </div>
          </Link>
          <Link to='#' style={{ height: '30px', textDecoration: 'none' }}>
            {/* <div className='network profile'>
              <svg
                aria-hidden='true'
                className='native mln2 mr2 svg-icon iconLogoSEXxs'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path
                  d='M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z'
                  fill='#8FD8F7'
                ></path>
                <path
                  d='M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z'
                  fill='#155397'
                ></path>
                <path fill='#46A2D9' d='M3 5h12v2H3z'></path>
                <path fill='#2D6DB5' d='M3 8h12v2H3z'></path>
              </svg>
              <div>Network profile</div>
            </div> */}
          </Link>
        </Sub>
      </Header>
    </div>
  );
}
