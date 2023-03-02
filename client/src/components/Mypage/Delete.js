import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../api/user';
const Wrap = styled.div`
  max-width: 1100;
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-left: 160px; */
`;

const Menusub = styled.div`
  text-align: center;
  margin: 0 0 0 30px;
  font-size: 15px;
  border-radius: 50px;
  width: 80px;
  height: 30px;
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
  margin: 10px 30px 0 30px;

  div {
    width: 120px;
    height: 30px;
    margin: 10px 0 10px 0;
    /* color: var(--black__500); */
    font-size: 15px;

    &:hover {
      border-radius: 50px;
      /* background-color: var(--tab__focus); */
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  div {
    color: black;
    font-size: var(--fs--title);
    text-align: left;
    padding: 10px 0 0 0px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;

  .delete_contents {
    font-size: 15px;
  }
  input {
    margin-right: 10px;
  }
`;

const Hr = styled.hr`
  width: 1000px;
  margin: 10px 0px;
  border: 1px solid var(#e1e3e5);
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  /* margin-right: 10px; */
  background-color: ${(props) => (props.disabled ? '#E89C9F' : '#D0393E')};
  color: #fff;
  font-size: var(--fs--lg);
  cursor: pointer;
`;

export default function Myinfo({ setShowSidebar }) {
  const navigate = useNavigate()
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

  const currentUser = useSelector(state => state.userDataReducer.currentUser)
  const deleteButton = () => {
    deleteUser(localStorage.getItem("access_token"), localStorage.getItem("refresh_token"), currentUser.memberId)
    navigate('/')
  };

  return (
    <Wrap>
      <UserInfoCard />
      <Menu>
        <Link to='/mypage/' style={{ textDecoration: 'none' }}>
          <Menusub>Profile</Menusub>
        </Link>

        <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
          <Menusub bg='#F48225' color='#fff'>
            Settings
          </Menusub>
        </Link>
      </Menu>
      <Main>
        <List>
          <Link to='/mypage/edit' style={{ textDecoration: 'none' }}>
          <Menusub>
          Edit Profile
          </Menusub>
            {/* <div></div> */}
          </Link>
          <Link to='/mypage/delete' style={{ textDecoration: 'none' }}>
          <Menusub bg='#F48225' color='#fff'>
            Delete Profile
          </Menusub>
            {/* <div></div> */}
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
    </Wrap>
  );
}
