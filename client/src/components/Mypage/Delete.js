import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../../datas/userData.json';
import { Link } from 'react-router-dom';
import { TagButton } from '../../styles/styledcomponents';
import Avatar from './Avatar';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-left: 165px;
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
  margin-left: 150px;
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
  background-color: ${(props) =>
    props.background ? props.background : 'white'};

  &:hover {
    background-color: ${(props) =>
      props.background ? props.background : 'var(--tab__focus)'};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 50px 0 200px;

  div {
    width: 100px;
    height: 30px;
    margin: 10px 0 10px 0;
    color: var(--black__500);
    font-size: var(--fs--lg);

    &:hover {
      border-radius: 50px;
      background-color: var(--tab__focus);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  div {
    color: black;
    font-size: var(--fs--title);
    text-align: left;
    padding: 10px 0 0 20px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;

  .delete_contents {
    font-size: var(--fs--lg);
  }
`;

const Hr = styled.hr`
  width: 1000px;
  margin: 10px 20px;
  border: 1px solid var(#e1e3e5);
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.disabled ? '#E89C9F' : '#D0393E')};
  color: #fff;
  font-size: var(--fs--lg);
`;

export default function Myinfo() {
  const [buttonChecked, setButtonChecked] = useState(false);

  const clickHandler = (e) => {
    setButtonChecked(e.target.checked);
  };

  const deleteButton = () => {
    window.confirm('ㅇ');
  };

  return (
    <div>
      <Header>
        <div className='user_profile'></div>
        <Avatar width='180px' height='180px' margin='30px' />
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
          <Link
            to='/mypage/edit'
            style={{ height: '30px', textDecoration: 'none' }}
          >
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
        <Link to='/mypage/profile' style={{ textDecoration: 'none' }}>
          <Menusub>Profile</Menusub>
        </Link>
        <Link to='/mypage' style={{ textDecoration: 'none' }}>
          <Menusub>Activity</Menusub>
        </Link>
        <Menusub>Saves</Menusub>
        <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
          <Menusub background='#F48225' color='#fff'>
            Settings
          </Menusub>
        </Link>
      </Menu>
      <Main>
        <List>
          <Link to='/mypage/edit' style={{ textDecoration: 'none' }}>
            <div>Edit Profile</div>
          </Link>
          <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
            <div>Delete Profile</div>
          </Link>
        </List>
        <Content>
          <div>Delete Profile</div>
          <Hr />
          <Section>
            <div className='delete_contents'>
              {' '}
              Before confirming that you would like your profile deleted,
              we&apos;d like to take a moment to explain the implications of
              deletion: <br />
              <br />
              1. Deletion is irreversible, and you will have no way to regain
              any of your original content, should this deletion be carried out
              and you change your mind later on. <br />
              <br />
              2. Your questions and answers will remain on the site, but will be
              disassociated and anonymized (the author will be listed as
              "user21216569") <br />
              and will not indicate your authorship even if you later return to
              the site. <br />
              <br />
              Confirming deletion will only delete your profile on Stack
              Overflow - it will not affect any of your other profiles on the
              Stack Exchange network.
              <br />
              If you want to delete multiple profiles, you'll need to visit each
              site separately and request deletion of those individual profiles.
              <br />
              <br />
              <input type='checkbox' onClick={clickHandler} />I have read the
              information stated above and understand the implications of having
              my profile deleted. I wish to proceed with the deletion of my
              profile.
              <div>
                <Button
                  disabled={buttonChecked ? false : true}
                  onClick={deleteButton}
                >
                  Delete profile
                </Button>
              </div>
            </div>
          </Section>
        </Content>
      </Main>
    </div>
  );
}
