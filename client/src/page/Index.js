import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Index = () => {
  return (
    <Container>
        <img src='/logo_1024.png' alt='logo'></img>
    </Container>
  )
}

export default Index