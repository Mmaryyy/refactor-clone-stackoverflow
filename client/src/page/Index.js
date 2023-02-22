import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100%-465px);
`
const Index = ({ setShowSidebar, setShowNav }) => {
  useEffect(() => {
    setShowSidebar(false)
    setShowNav(false)
    return () => {
      setShowSidebar(true)
      setShowNav(true)
    }
  }, [])
  return (
    <Container>
        <img src='/logo_1024.png' alt='logo'></img>
    </Container>
  )
}

export default Index