import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #f8f9f9;
  border-top: 3px solid #f48225;
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
`;

const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const SearchBar = styled.input`
  border: 1px solid #d9dddf;
  font-size: 18px;
  border-radius: 3px;
  margin-left: -10px;
  margin-top: 5px;
  width: 850px;
  height: 40px;
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
    console.log(search);
  };

  const searchHandler = () => {
    // search data
    setSearch('');
  };

  return (
    <>
      <Wrapper>
        <ProductsLink to='#'>
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
        <SearchWrapper onSubmit={searchHandler}>
          <SearchBar
            type='text'
            value={search}
            onChange={searchInputHandler}
            placeholder='Search...'
          />
        </SearchWrapper>
        {login ? (
          <>
            <div>User Profile</div>
            <Link to='#'>
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
            <Link to='#'>
              <Button
                className='login'
                background='#E1ECF4'
                color='#739DBB'
                onClick={loginHandler}
              >
                Log in
              </Button>
            </Link>
            <Link to='#'>
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
