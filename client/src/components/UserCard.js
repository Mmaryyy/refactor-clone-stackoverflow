import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  padding: 10px;

  img {
    width: 120px;
    height: 120px;
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
  text-decoration: none;
`;

const UserLink = styled(Link)`
  text-decoration: none;
`;

export default function UserCard({ el }) {
const user = useSelector(state => state.userDataReducer.currentUser)

  return (
    <>
      <Wrapper>
        <UserLink to={el.memberId === user.memberId ? '/mypage' : `/users/${el.memberId}`}>
          {/* <img src={process.env.PUBLIC_URL + './../images/Avatar1.png'} /> */}
          <img src={el.img} alt='user' />
        </UserLink>
        <UserLink to={`/users/${el.memberId}`}>
        <Container>
          <div className='user_name'> {el.name}</div>
          <p className='user_location'>{el.location ? el.location : null} </p>
          {/* <p className='user_tags'> {el.tags ? el.tags : null}</p> */}
        </Container>
        </UserLink>
      </Wrapper>
    </>
  );
}
