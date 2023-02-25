import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import user from '../datas/userData.json';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserList } from '../redux/actions/userData';

const Container = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  margin-top: 60px;
  margin-left: 165px;
  /* min-height: 100vh; */
`;

const Wrapper = styled.div`
  .users {
    font-size: var(--fs--title);
    font-weight: 500;
    margin-bottom: 20px;
  }

  .filter_field {
    display: flex;
    flex-direction: row;

    .tag_search {
      margin-bottom: 20px;
      position: relative;
    }

    #search {
      padding: 10px 10px 10px 32px;
      border: 1px solid var(--black__100);
      border-radius: 3px;
      ::placeholder {
        color: var(--black__100);
        font-size: 14px;
      }
      :focus {
        outline: 4px solid rgb(221, 234, 247);
        border: 1px solid var(--button__back);
      }
    }

    .icon_search {
      position: absolute;
      top: 10px;
      left: 10px;
      fill: var(--black__200);
    }

    .filter {
      display: flex;
      margin-bottom: 20px;
      margin-left: auto;
    }

    .filtered {
      text-decoration: none;
      padding: 7px;
      border: 1px solid var(--black__200);
      background-color: white;
      border-radius: 5px;
      font-size: var(--fs--mid);
      font-weight: 500;
      color: var(--black__300);
      &:hover {
        background-color: rgb(227, 230, 232);
      }
    }
  }
`;

const User = styled.div`
  .users {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 20px;
    display: grid;
    gap: 12px;
  }
`;

export default function Users({ setShowSidebar }) {
  useEffect(() => {
    setShowSidebar(false);
  }, []);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserList());
  // });
  // // const user = useSelector(state => state.userDataReducer.userList)
  // const currentPage = useSelector((state) => state.userDataReducer.currentPage);
  return (
    <>
      <Container>
        <Wrapper>
          <h1 className='users'>Users</h1>
          <div className='filter_field'>
            <div className='tag_search'>
              <input
                id='search'
                type='text'
                placeholder='Filter by user'
              ></input>
              <svg
                aria-hidden='true'
                class='icon_search'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z'></path>
              </svg>
            </div>
            <div className='filter'>
              <Link to='#' className='filtered'>
                Reputation
              </Link>
              <Link to='#' className='filtered'>
                New users
              </Link>
              <Link to='#' className='filtered'>
                Voters
              </Link>
              <Link to='#' className='filtered'>
                Editors
              </Link>
              <Link to='#' className='filtered'>
                Moderators
              </Link>
            </div>
          </div>
        </Wrapper>
        <User>
          <div className='users'>
            {user.map((el) => (
              <UserCard key={el.shortId} el={el} />
            ))}
          </div>
        </User>
      </Container>
    </>
  );
}
