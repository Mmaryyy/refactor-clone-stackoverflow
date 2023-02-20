import './styles/global.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
// import Sidebar2 from './components/Sidebar2';
import Login from './components/Login';
import Join from './components/Join';
import Index from './page/Index';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contents from './page/Contents';
import Footer from './components/Footer';

function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Fragment>
        <GlobalStyle />
        {isReady ? (
          <Index />
        ) : (
          <div className='app_wrap'>
            <Nav />
            <Routes>
              <Route path='/questions' element={<Contents />}></Route>
              {/* <Route path='/questions' element={}></Route>
          <Route path='/tags' element={}></Route>
          <Route path='/users' element={}></Route> */}
            </Routes>
            <div className="sidebar">
              <Sidebar />
              {/* <Sidebar2 /> */}
            </div>
            {/* <Login />
            <Join /> */}
            {/* <Login /> */}
          </div>
        )}
      </Fragment>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
