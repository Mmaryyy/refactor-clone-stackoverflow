import './styles/global.css';
import { useState } from 'react';
import Nav from './components/Nav'
import Index from './page/Index'
import GlobalStyle from './styles/GlobalStyle'
import { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <div className="container">
            <Nav />
            <Routes>
              {/* <Route path='/' element={<Index/>}></Route> */}
              {/* <Route path='/questions' element={}></Route>
          <Route path='/tags' element={}></Route>
          <Route path='/users' element={}></Route> */}
            </Routes>
          </div>
        )}
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
