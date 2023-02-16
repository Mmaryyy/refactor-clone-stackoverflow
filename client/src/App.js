import './styles/global.css';
import { useState } from 'react';
import Nav from './components/Nav'
import Index from './page/Index'
import GlobalStyle from './styles/GlobalStyle'
import { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import Sidebar2 from './components/Sidebar2';


const Container = styled.div`
display:flex;
flex-direction: row;
`;



function App() {
  const [isReady, setIsReady] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false)
    }, 5000)
  }, [])
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        {isReady ? (
          <Index />
        ) : (
          <Container>
            <Nav />
            <Routes>
              {/* <Route path='/' element={<Index/>}></Route> */}
              {/* <Route path='/questions' element={}></Route>
          <Route path='/tags' element={}></Route>
          <Route path='/users' element={}></Route> */}
            </Routes>
            <Sidebar />
            <Sidebar2 />
          </Container>
        )}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
