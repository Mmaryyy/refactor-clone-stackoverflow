import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  width: 100%;
  height: 47px;
  /* 고정 */
  position: fixed;
  top: 0;
  background-color: #f8f9f9;
  border-top: 3px solid #f48225;
`;

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 150px;
`;

export default function Header() {
  return (
    <>
      <Wrapper>
        <Container>
          <Link to='#'>
            <Logo src={logo} alt='stackoverflow logo' />
          </Link>
        </Container>
      </Wrapper>
    </>
  );
}
