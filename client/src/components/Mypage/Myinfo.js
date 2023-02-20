import React from 'react';
import styled from 'styled-components';
import user from '../../datas/userData.json';
import { Link } from 'react-router-dom';
import { TagButton } from '../../styles/styledcomponents';
import Avatar from './Avatar';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 0 30px;
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .user_name {
    font-weight: 700;
    font-size: 50px;
  }
`;

const Myinfor = styled.div`
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

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const Menusub = styled.div`
  text-align: center;
  margin: 0 0 0 30px;
  font-size: 18px;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  padding: 5px;
  color: black;
  background-color: ${(props) =>
    props.background ? props.background : 'white'};
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 20px 100px 0 70px;

  div {
    margin-bottom: 20px;
    color: black;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  div {
    color: black;
    font-size: 30px;
    text-align: left;
    padding: 10px 0 0 20px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  font-size: 17px;
`;
const SectionArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d6d9dc;
  margin: 10px 0 0 25px;
  width: 420px;
  height: 350px;
  text-align: center;
  svg {
    margin-bottom: 10px;
  }

  span {
    font-size: 17px;
    color: 'black';
  }
  div {
    font-size: 14px;
    color: '#88889A';
    text-align: center;
    margin-bottom: 10px;
  }
`;

const SectionArticle2 = styled(SectionArticle)`
  width: 350px;
`;

const SectionArticle3 = styled(SectionArticle)`
  width: 300px;
`;

const Button = styled(TagButton)`
  width: 320px;
  height: 50px;
  color: #fff;
  font-size: 17px;
  background: var(--button__back);
`;

export default function Myinfo() {
  return (
    <div>
      <Header>
        <div className='user_profile'></div>
        <Avatar width='180px' height='180px' />
        <MyProfile>
          <div className='user_name'>{user[0].nickname}</div>
          <Myinfor>
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
            <div>{user[0].joinDate}</div>
          </Myinfor>
        </MyProfile>

        <Sub>
          <Link to='#' style={{ height: '30px', textDecoration: 'none' }}>
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
          <Link to='' style={{ height: '30px', textDecoration: 'none' }}>
            <div className='network profile'>
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
            </div>
          </Link>
        </Sub>
      </Header>
      <Menu>
        <Menusub>Profile</Menusub>
        <Menusub background='#F48225'>Activity</Menusub>
        <Menusub>Saves</Menusub>
        <Menusub>Settings</Menusub>
      </Menu>
      <Main>
        <List>
          <div>Summary</div>
          <div>Answer</div>
          <div>Question</div>
          <div>Tags</div>
          <div>Articles</div>
          <div>Badges</div>
          <div>Votes</div>
        </List>
        <Content>
          <div>Summary</div>
          <Section>
            <SectionArticle>
              <svg
                aria-hidden='true'
                className='svg-spot spotReputation'
                width='48'
                height='48'
                viewBox='0 0 48 48'
              >
                <path
                  d='M32 9a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h25a1 1 0 0 1 1 1Zm4.25 1.6a1 1 0 0 1 .92-.6H41a1 1 0 1 1 0 2h-3.18l-4.9 11.4a1 1 0 0 1-.92.6h-7.38l-2.73 5.45A1 1 0 0 1 21 30h-6.51l-4.07 9.4a1 1 0 0 1-1.84-.8l4.34-10a1 1 0 0 1 .91-.6h6.55l2.73-5.45A1 1 0 0 1 24 22h7.34l4.9-11.4ZM42 16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2Zm-24 5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1Zm24 1a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2h4Zm1 11a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h25a1 1 0 0 1 1 1ZM8 28a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h2Z'
                  opacity='.2'
                ></path>
                <path d='M36.17 8a1 1 0 0 0-.92.6L30.35 20H23a1 1 0 0 0-.9.55L19.39 26h-6.55a1 1 0 0 0-.9.58L6.1 39.08a1 1 0 0 0 1.82.84L13.47 28H20a1 1 0 0 0 .9-.55L23.61 22H31a1 1 0 0 0 .92-.6l4.9-11.4H42a1 1 0 1 0 0-2h-5.83ZM27 16a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h21Zm16 11a1 1 0 0 1-1 1H28a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm-1 13a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2h28Z'></path>
              </svg>
              <span>Reputation is how the community thanks you</span>
              <div>
                When users upvote your helpful posts, you'll earn reputation and
                unlock new privileges.
              </div>
              <p>Learn more about reputation and privileges</p>
            </SectionArticle>
            <SectionArticle2>
              <svg
                aria-hidden='true'
                className='svg-spot spotBadge'
                width='48'
                height='48'
                viewBox='0 0 48 10'
              >
                <path
                  d='M14 6a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1ZM7 21c0-1.1.9-2 2-2h35a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V21Zm27 23a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2h20Z'
                  opacity='.2'
                ></path>
                <path d='M8 11a1 1 0 0 1 1-1h31a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V18Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h36a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1H6Zm34 22a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h31Z'></path>
              </svg>{' '}
              <span>Earn badges for helpful actions</span>
              <div>
                Badges are bits of digital flair that you get when you
                participate in especially helpful ways.
              </div>
              <Button>Take the Tour and earn your first badge</Button>
            </SectionArticle2>
            <SectionArticle3>
              <svg
                aria-hidden='true'
                className='svg-spot spotAstronaut'
                width='60'
                height='60'
                viewBox='0 0 48 48'
              >
                <path
                  opacity='.2'
                  d='M39.5 12a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-6.1c-.77 0-1.4.63-1.4 1.4v6.2c0 .77.63 1.4 1.4 1.4H38a1 1 0 0 1 1 1 1 1 0 0 0 1 1h3.6c.77 0 1.4-.63 1.4-1.4v-7.2c0-.77-.63-1.4-1.4-1.4h-4.1Z'
                ></path>
                <path d='M15.03 5.84c-2.17 0-3.66.42-4.44 1.59-.37.55-.5 1.17-.55 1.73-.05.44-.04.93-.04 1.39v1.8c0 .4.2.7.38.89.18.17.38.29.54.37.34.15.75.25 1.15.32.83.15 1.9.22 2.93.22 1.03 0 2.1-.07 2.93-.22.4-.07.81-.17 1.15-.32.16-.08.36-.2.54-.37.18-.19.38-.49.38-.9V10.5c0-.44 0-.9-.03-1.32a3.68 3.68 0 0 0-.52-1.73c-.76-1.18-2.25-1.6-4.42-1.6ZM12 10.5c0-.45 0-.82.03-1.15.04-.4.12-.65.22-.81.18-.26.7-.7 2.78-.7s2.58.44 2.74.69c.1.15.18.4.21.8.03.32.02.66.02 1.07v1.47l-.43.1c-.67.12-1.6.18-2.57.18a15.59 15.59 0 0 1-3-.28V10.5ZM11 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm4.03-19c-3.82 0-6.2 1.12-7.57 3-1.31 1.8-1.51 4.08-1.51 6v3.94A4.45 4.45 0 0 0 2 19.5v11C2 32.02 3.13 34 5.47 34c.58 0 1.09-.12 1.53-.33V44a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V32h2v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V23.3l2.87 2.74 1.97 1.86.16.14V44a1 1 0 1 0 2 0V28.79h.1c.8 0 1.65-.28 2.27-.9.62-.64.88-1.52.88-2.32 0-.79-.26-1.66-.87-2.3L30 20.78V19h6c0 1.1.9 2 2 2h3a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-3.09c-.2-.58-.76-1-1.41-1H30v-.17a3 3 0 1 0-2 0v10.83l-1.24-1.32h-.01l-.34-.36c-.48-.49-.93-.95-1.36-1.3-.3-.25-.64-.47-1.02-.63V11c0-1.9-.18-4.2-1.47-6-1.35-1.88-3.71-3-7.53-3Zm-7.08 9c0-1.86.21-3.57 1.13-4.83C9.94 5 11.6 4 15.03 4s5.06.99 5.9 2.17c.9 1.25 1.1 2.96 1.1 4.83v4.41c-.35.11-.9.22-1.64.32a46.7 46.7 0 0 1-5.4.28c-1.99 0-3.95-.1-5.4-.28a9.4 9.4 0 0 1-1.64-.32V11ZM12 39.34a3.4 3.4 0 0 0-3 0V36h3v3.34Zm-3 3.31c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43H9v-.35Zm9 .35v-.35c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43h-3Zm1.5-4a3.4 3.4 0 0 0-1.5.34V36h3v3.34a3.4 3.4 0 0 0-1.5-.34ZM9 34v-8h12v8h-3v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9Zm-2-3.5c0 .69-.56 1.5-1.53 1.5C4.53 32 4 31.23 4 30.5V29h3v1.5ZM7 27H4v-7.5c0-.88.32-1.51.8-1.93a3 3 0 0 1 1.67-.69l.08.06c.24.17.52.29.78.37.53.17 1.23.3 2 .4 1.57.2 3.62.3 5.66.3 2.03 0 4.09-.1 5.65-.3.78-.1 1.48-.23 2.01-.4.25-.08.52-.19.75-.35l.4.27c.32.27.66.62 1.13 1.1v.01l.38.39L28 21.56v.92l-1.45 1.44-3.64-3.46c-.25-.24-.55-.46-.91-.46a1 1 0 0 0-1 1v3H9v-3a1 1 0 1 0-2 0v6Zm23-.22v-3.1l.93.98h.01c.17.18.31.51.31.91s-.14.73-.3.91a1.19 1.19 0 0 1-.95.3ZM29 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1 13v-7h6v7h-6Zm8 2v-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3Z'></path>
              </svg>
              <span>Measure your impact</span>
              <div>
                Your posts and helpful actions here help hundreds or thousands
                of people searching for help.
              </div>
            </SectionArticle3>
          </Section>
          <div>Answer</div>
        </Content>
      </Main>
    </div>
  );
}
