import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;

  img {
    width: 100px;
    height: 100px;
  }

  .user_name {
    text-decoration-line: none;
    color: #2788d3;
  }

  .user_location {
    color: var(--black__300);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export default function UserCard({ el }) {
  console.log(el);
  return (
    <>
      <Wrapper>
        <Link to='/mypage/profile'>
          {/* <img src={process.env.PUBLIC_URL + './../images/Avatar1.png'} /> */}
          <img src={el.avatarUrl} alt='user' />
        </Link>
        <Container>
          <div className='user_name'> {el.nickname}</div>
          <p className='user_location'>{el.location ? el.location : null} </p>
          <p className='user_tags'> {el.tags ? el.tags : null}</p>
        </Container>
      </Wrapper>
    </>
  );
}
