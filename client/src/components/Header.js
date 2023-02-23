import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import Avatar from './Mypage/Avatar';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #f8f9f9;
  border-top: 3px solid #f48225;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10vw;
  //header 위치 고정
  z-index: 999;
`;

const Logo = styled.img`
  width: 200px;
`;

const ProductsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 0 0;
  height: 30px;
  text-decoration: none;
  &:hover {
    background-color: #e3e6e8;
    border-radius: 10px;
  }
`;

const Products = styled.div`
  color: #7c8186;
  font-size: 16px;
  margin: 0 10px 0px 10px;
  @media (max-width: 650px) {
    display: none;
  }
`;

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: 1px solid #d9dddf;
  font-size: 18px;
  border-radius: 3px;
  margin-top: 5px;
  width: 35em;
  height: 2em;
  flex: 1;
  @media (max-width: 650px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 15px;
  width: 80px;
  height: 40px;

  &:hover {
    background-color: var(--button__back--hover);
  }
`;

const Icon = styled.div`
  display: flex;
  padding: 10px;

  &:hover {
    background-color: #e3e6e8;
  }
`;

export default function Header() {
  const [login, setLogin] = useState(false);
  const [search, setSearch] = useState('');

  //
  const loginHandler = () => {
    setLogin(true);
  };

  const logoutHandler = () => {
    setLogin(false);
  };

  //
  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = () => {
    // search data
    setSearch('');
  };

  return (
    <>
      <Wrapper>
        <ProductsLink to='/'>
          <Logo src={logo} alt='stackoverflow logo' />
        </ProductsLink>
        {login ? (
          <ProductsLink to='#'>
            <Products>Products</Products>
          </ProductsLink>
        ) : (
          <>
            <ProductsLink to='#'>
              <Products>About</Products>
            </ProductsLink>
            <ProductsLink to='#'>
              <Products>Products</Products>
            </ProductsLink>
            <ProductsLink to='#'>
              <Products>For Teams</Products>
            </ProductsLink>
          </>
        )}
        <SearchWrapper>
          <SearchInput type='text' />
        </SearchWrapper>
        {login ? (
          <>
            <Link to='/mypage'>
              <Avatar width='28px' height='28px' margin='5px 5px 0 5px' />
            </Link>
            <Icon>
              <svg
                aria-hidden='true'
                class='svg-icon iconInbox'
                width='28'
                height='28'
                viewBox='0 0 20 15'
              >
                <path d='M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z'></path>
              </svg>
            </Icon>
            <Icon>
              <svg
                aria-hidden='true'
                class='svg-icon iconAchievements'
                width='28'
                height='28'
                viewBox='0 0 18 15'
              >
                <path d='M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z'></path>
              </svg>
            </Icon>
            <Icon>
              <svg
                aria-hidden='true'
                class='svg-icon iconHelp'
                width='28'
                height='28'
                viewBox='0 0 18 15'
              >
                <path d='M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z'></path>
              </svg>
            </Icon>
            <Link to='/'>
              <Button
                background='#0A95FF'
                color='#FDFEFF'
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to='login'>
              <Button
                className='login'
                background='#E1ECF4'
                color='#739DBB'
                onClick={loginHandler}
              >
                Log in
              </Button>
            </Link>
            <Link to='/join'>
              <Button className='signup' background='#0A95FF' color='#FDFEFF'>
                Sign up
              </Button>
            </Link>
          </>
        )}
      </Wrapper>
    </>
  );
}
