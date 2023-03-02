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

export default function UserInfoCard( { user } ) {
// console.log(user)
  return (
    <div>
      <Header>
        <div className='user_profile'>
          {user ? <Avatar width='100px' height='100px' margin='20px' user={user} /> : null}
          <MyProfile>
            <div className='user_name'>{user.name}</div>
            <Myinfo>
              <span className='join'>
                📧
              </span>
              <div className='joinDate'>{user.email}</div>
            </Myinfo>
          </MyProfile>
        </div>

        <Sub>
          <Link to='/mypage/edit' style={{ textDecoration: 'none' }}>
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
