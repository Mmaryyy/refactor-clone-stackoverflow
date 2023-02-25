import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../../datas/userData.json';
import { Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 160px;
`;

const Menusub = styled.div`
  text-align: center;
  margin: 0 0 0 30px;
  font-size: var(--fs--big);
  border-radius: 10px;
  width: 90px;
  height: 35px;
  padding: 5px;
  color: ${(props) => (props.color ? props.color : 'var(--black__300)')};
  background-color: ${(props) => (props.bg ? props.bg : 'white')};

  &:hover {
    background-color: ${(props) => (props.bg ? props.bg : 'var(--tab__focus)')};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 200px;

  .stats {
    font-size: 28px;
  }
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 130px;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
`;
export const StatsBoxs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StatsTitle = styled.p`
  font-size: var(--fs--big);
  color: #626a73;
`;

export const StatsCount = styled.p`
  font-size: 22px;
  margin-right: 5px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 20px 10px;
`;
export const Sections = styled.article`
  display: flex;
  flex-direction: column;
  > .title {
    font-size: 28px;
  }

  > .contents_post {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 300px;
    border: 1px solid #d6d9dc;
    background-color: #f8f9f9;
  }
  > .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 920px;
    height: 130px;
    border: 1px solid #d6d9dc;
    border-radius: 5px;
    background-color: #f8f9f9;
    > .contents_about {
      font-size: 15px;
      text-align: center;
      color: #6a737c;
      > .link {
        color: #0074cc;
        padding-left: 0.3em;
        &:hover {
          color: #0e95ff;
        }
      }
    }
  }
`;

export default function Profile() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <UserInfoCard />
      <Menu>
        <Link to='/mypage/profile' style={{ textDecoration: 'none' }}>
          <Menusub bg='#F48225' color='#fff'>
            Profile
          </Menusub>
        </Link>
        <Link to='/mypage' style={{ textDecoration: 'none' }}>
          <Menusub>Activity</Menusub>
        </Link>
        <Menusub>Saves</Menusub>
        <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
          <Menusub>Settings</Menusub>
        </Link>
      </Menu>
      <Main>
        <Stats>
          <div className='stats'>Stats</div>
          <StatsBox>
            <StatsBoxs>
              <StatsCount>answers</StatsCount>
              <StatsCount>{user[0].contents.length}</StatsCount>
              <StatsCount>questions</StatsCount>
              <StatsCount>0</StatsCount>
            </StatsBoxs>
          </StatsBox>
        </Stats>
        <Section>
          <Sections>
            <div className='title'>About</div>
            <div className='contents'>
              {login ? (
                <div>데이터 넣어주기</div>
              ) : (
                <div className='contents_about'>
                  Your about me section is currently blank. Would you
                  <br /> like to add one?
                  <Link
                    className='link'
                    to='#'
                    style={{ textDecoration: 'none' }}
                  >
                    Edit profile
                  </Link>
                </div>
              )}
            </div>
          </Sections>
          <Sections>
            <div className='title'>Badges</div>
            <div className='contents'>
              {login ? (
                <div>데이터 넣어주기</div>
              ) : (
                <div className='contents_about'>
                  You have not earned any
                  <Link
                    className='link'
                    to='#'
                    style={{ height: '30px', textDecoration: 'none' }}
                  >
                    badges.
                  </Link>
                </div>
              )}
            </div>
          </Sections>
          <Sections>
            <div className='title'>Posts</div>
            <div className='contents_post'>
              <svg
                aria-hidden='true'
                class='mb24 svg-spot spotEmptyXL'
                width='150'
                height='150'
                viewBox='0 0 196 196'
              >
                <path
                  d='M35 177.5c-19.5-9-29.35-26.54-26-82 3.35-55.46 14.8-66.9 32.5-73 17.7-6.1 86.22-21.95 120 5.5s37.46 52.67 23 96.5c-14.46 43.84-22.26 63.24-60 61-11.4-.68-22.3-.85-32.5-1.02-23.56-.38-43.4-.7-57-6.98ZM33 42v26a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V42a7 7 0 0 0-7-7H40a7 7 0 0 0-7 7Zm7 39a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Z'
                  opacity='.07'
                ></path>
                <path
                  d='M42 48a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v23a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V48Zm0 47a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V95Zm-1 36h3.19a2 2 0 1 1 0 4H40a3 3 0 0 0-3 3v4.44a2 2 0 1 1-4 0V138a7 7 0 0 1 7-7h1Zm11.65 2c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2H153a7 7 0 0 1 7 7v4.44a2 2 0 1 1-4 0v-4.58a3 3 0 0 0-3-2.86h-4.19a2 2 0 0 1-2-2ZM35 151.56a2 2 0 0 1 2 2v4.51a3 3 0 0 0 3 2.93h4.19a2 2 0 1 1 0 4h-4.35a7 7 0 0 1-6.84-7v-4.44c0-1.1.9-2 2-2Zm123 0a2 2 0 0 1 2 2v4.74a7 7 0 0 1-7 6.69h-4.19a2 2 0 1 1 0-4h4.33a3 3 0 0 0 2.86-3v-4.43c0-1.1.9-2 2-2ZM52.65 163c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Z'
                  opacity='.2'
                ></path>
                <path d='M124.48 14.24 120.25 10 116 14.24l4.24 4.25 4.25-4.25ZM52 58a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-4c0-1.1.9-2 2-2h80a2 2 0 1 1 0 4H66a2 2 0 0 1-2-2ZM33 42a7 7 0 0 1 7-7h113a7 7 0 0 1 7 7v26a7 7 0 0 1-7 7H40a7 7 0 0 1-7-7V42Zm7-3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h113a3 3 0 0 0 3-3V42a3 3 0 0 0-3-3H40Zm16 62a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm10-2a2 2 0 1 0 0 4h80a2 2 0 1 0 0-4H66ZM40 81a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Zm-3 7a3 3 0 0 1 3-3h113a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V88Zm150.97 54.49L179.5 134l-8.49 8.49 8.49 8.48 8.48-8.48Zm-8.48 2.82-2.83-2.82 2.83-2.83 2.82 2.83-2.82 2.82ZM8 97a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H2a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z'></path>
              </svg>
              {login ? (
                <div>데이터 넣어주기</div>
              ) : (
                <div className='contents_about'>
                  Just getting started? Try answering a question! <br />
                  <br />
                  Your most helpful questions, answers and tags will appear
                  here. <br /> Start by
                  <Link
                    className='link'
                    to='#'
                    style={{ textDecoration: 'none' }}
                  >
                    answering a question
                  </Link>
                  or
                  <Link
                    className='link'
                    to='#'
                    style={{ textDecoration: 'none' }}
                  >
                    selecting tags
                  </Link>
                  that match topics you’re <br /> interested in.
                </div>
              )}
            </div>
          </Sections>
        </Section>
      </Main>
    </div>
  );
}
