import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
border-right: 1px solid var(--tab__focus);
width: 165px;
flex-shrink: 0;
`;

const NavContainer = styled.ul`
  /* border-right: 1px solid var(--tab__focus); */
  width: 165px;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  color: var(--black__300);
  font-weight: 400;
  position: fixed;
  top: 60px;
  /* left: 10vw; */
`;
const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BlankBox = styled.div`
  width: 25px;
`;
const TapLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--black__300);
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    background: var(--menu__active);
    border-right: 0.5rem solid var(--point__color);
    font-weight: bold;
    color: black;
  }
  &.home {
    padding: 30px 20px 25px 20px;
  }
  &.menu {
    padding-left: 35px;
  }
`;
const TabTitle = styled.p`
  margin-left: 10px;
  font-size: var(--fs--caption);
`;
const Nav = () => {
  return (
    <Container>
      <NavContainer>
        <TapLink className='home' to='/'>
          Home
        </TapLink>
        <TabTitle>PUBLIC</TabTitle>
        <TapContainer>
          <TapLink to='/questions'>
            <BlankBox>🌏</BlankBox>
            Questions
          </TapLink>
          <TapLink className='menu' to='/tags'>
            Tags
          </TapLink>
          <TapLink className='menu' to='/users'>
            Users
          </TapLink>
        </TapContainer>
      </NavContainer>
    </Container>
  );
};

export default Nav;
