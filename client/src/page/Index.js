import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
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
        <img src='/logo_1024.png' alt='logo'></img>
    </Container>
  )
}

export default Index