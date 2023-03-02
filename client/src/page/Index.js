import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`
const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 200px;
  }
`
const Index = ({ setShowSidebar, setShowNav, setShowFooter }) => {
  useEffect(() => {
    setShowSidebar(false)
    setShowNav(false)
    setShowFooter(false)
    return () => {
      setShowSidebar(true)
      setShowNav(true)
      setShowFooter(true)
    }
  }, [])
  return (
    <Container>
      <img src="/logo_1024.png" alt="logo"></img>
      <SpinnerWrapper className="spinner_wrapper">
        <img src="/spinner.gif" alt="spinner" />
      </SpinnerWrapper>
    </Container>
  );
}

export default Index