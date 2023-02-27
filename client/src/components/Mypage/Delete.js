import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

export default function Myinfo({ setShowSidebar }) {
  useEffect(() => {
    setShowSidebar(false);
    return () => {
      setShowSidebar(true);
    };
  }, []);
  const [buttonChecked, setButtonChecked] = useState(false);

  const clickHandler = (e) => {
    setButtonChecked(e.target.checked);
  };

  const deleteButton = () => {
    window.confirm('ㅇ');
  };

  return (
    <div>
      <UserInfoCard />
      <Menu>
        <Link to='/mypage/profile' style={{ textDecoration: 'none' }}>
          <Menusub>Profile</Menusub>
        </Link>
        <Link to='/mypage' style={{ textDecoration: 'none' }}>
          <Menusub>Activity</Menusub>
        </Link>
        <Menusub>Saves</Menusub>
        <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
          <Menusub bg='#F48225' color='#fff'>
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
