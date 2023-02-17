import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: #23262a;
  height: 300px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #babfc4;
  grid-column: 1/3;
  /* ----------------------------------------------- */
  .group {
    margin: 30px;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-weight: 700;
    font-size: 13px;
    margin: 3px;
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .word {
    margin: 3px;
    font-size: 12px;
    font-weight: 100;
  }
  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7rem;
    width: 20%;
    margin: 2rem;
  }

  .link {
    width: 250px;
    margin-top: 10px;
  }
`;

const Logo = styled.div`
  width: 15px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const stackoverflow = ['Questions', 'Help'];
const products = ['Teams', 'Advertising', 'Collectives', 'Talent'];
const company = [
  'About',
  'Press',
  'Work Here',
  'Legal',
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Cookie Settings',
  'Cookie Policy',
];
const stackexchangenetwork = [
  'Technology',
  'Culture & recreation',
  'Life & arts',
  'Science',
  'Professional',
  'Business',
  'API',
  'Data',
];

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Logo>
          {/* Logo */}
          <svg
            aria-hidden='true'
            className='native svg-icon iconLogoGlyphMd'
            width='32'
            height='37'
            viewBox='0 0 32 37'
          >
            <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB' />
            <path
              d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
              fill='#F48024'
            />
          </svg>
        </Logo>
        {/* 주석 삭제 ---------------------------- */}
        <div className='group'>
          <span className='title'>STACK OVERFLOW</span>
          {stackoverflow.map((el, idx) => (
            <span className='word' key={idx}>
              {el}
            </span>
          ))}
        </div>
        <div className='group'>
          <span className='title'>PRODUCTS</span>
          <div className='list'>
            {products.map((el, idx) => (
              <span className='word' key={idx}>
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className='group'>
          <span className='title'>COMPANY</span>
          <div className='list'>
            {company.map((el, idx) => (
              <span className='word' key={idx}>
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className='group'>
          <span className='title'>STACK EXCHANGE NETWORK</span>
          <div className='list'></div>
          {stackexchangenetwork.map((el, idx) => (
            <span className='word' key={idx}>
              {el}
            </span>
          ))}
        </div>
        <div className='copyright'>
          <div className='link'>Blog Facebook Twitter LinkedIn Instagram</div>
          <div>@사고뭉치 디저트 먹방</div>
        </div>
      </Container>
    </Wrapper>
  );
}
