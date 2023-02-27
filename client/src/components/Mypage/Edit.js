import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserInfoCard from './UserInfoCard';
import { Editor } from '../../components/Editor';

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
  margin-top: 10px;

  div {
    color: black;
    font-size: var(--fs--title);
    text-align: left;
    padding: 15px 0 0 -10px;
  }
  .sub {
    font-size: var(--fs--big);
  }
`;

const Hr = styled.hr`
  width: 1000px;
  margin: 10px 0px;
  border: 1px solid var(#e1e3e5);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  .delete_contents {
    font-size: var(--fs--lg);
  }

  label {
    display: flex;
    flex-direction: column;
    margin: 10px 5px 0 0;
  }

  input {
    margin-top: 5px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #e0e3e5;
    margin: 10px 5px 10px 0;
    width: 400px;
    height: 30px;

    &:focus {
      border: 3px solid #8fd8f7;
    }
  }
`;

const SectionArticle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #d6d9dc;
  margin: 10px 0 0 0px;
  width: 1100px;
  height: 800px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin: 15px 5px 15px 0;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: var(--fs--mid);
`;

export default function Edit({ setShowSidebar }) {
  useEffect(() => {
    setShowSidebar(false);
    return () => {
      setShowSidebar(true);
    };
  }, []);

  const [display, setDisplay] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');

  const DisplayHandler = (e) => {
    setDisplay(e.target.value);
  };

  const LocationHandler = (e) => {
    setLocation(e.target.value);
  };

  const aboutHandler = (e) => {
    setAbout(e.target.value);
  };

  const editHandler = () => {
    window.confirm('변경');
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
          <div>Edit your profile</div>
          <Hr />
          <div className='sub'>Public information</div>
          <Section>
            {/* form onSubmit */}
            <form>
              <label htmlFor='display'>Display name</label>
              <input onChange={DisplayHandler} id='display' type='text' />
              <label htmlFor='location'>Location</label>
              <input onChange={LocationHandler} id='location' type='text' />
              <p>About</p>
              <Editor value={about} setter={setAbout} />
            </form>
          </Section>

          <div>
            <Button
              className='save'
              background='var(--button__back)'
              color='#fff'
              onClick={editHandler}
            >
              Save profile
            </Button>
            <Button background='#fff' color='#73B3E2'>
              Cancel
            </Button>
          </div>
        </Content>
      </Main>
    </div>
  );
}
