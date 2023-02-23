import './styles/global.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
// import Sidebar2 from './components/Sidebar2';
import Login from './page/Login';
import Join from './page/Join';
import Index from './page/Index';
import Tags from './page/Tags';
import Ask from './page/Ask';
import GlobalStyle from './styles/GlobalStyle';
import { Fragment, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contents from './page/Contents';
import Footer from './components/Footer';
import Mypage from './page/Mypage';
import Post from './page/Post';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isReady, setIsReady] = useState(false);
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  console.log(pathname)
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false);
    }, 5000);
  }, []);
  return (
    <>
      <Header />
      <Fragment>
        <GlobalStyle />
        {isReady ? (
          <Index />
        ) : (
          <div className={pathname.includes("in") ? 'background_box' : null}>
            <div className='app_wrap'>
              {showNav ? <Nav /> : null}
              <Routes>
                <Route path='/' element={<Index setShowSidebar={setShowSidebar} setShowNav={setShowNav} setShowFooter={setShowFooter}/>} />
                <Route path='/questions' element={<Contents />} />
                <Route path='/mypage' element={<Mypage setShowSidebar={setShowSidebar} />} />
                <Route path='/post/:postId' element={<Post />} />
                <Route path='/tags' element={<Tags setShowSidebar={setShowSidebar} />} />
                <Route path='/login' element={<Login setShowNav={setShowNav} setShowFooter={setShowFooter} setShowSidebar={setShowSidebar} />} />
                <Route path='/join' element={<Join setShowNav={setShowNav} setShowFooter={setShowFooter} setShowSidebar={setShowSidebar}/>} />
              </Routes>
              {showSidebar ? (
                <div className='sidebar'>
                  <Sidebar />
                  {/* <Sidebar2 /> */}
                </div>
              ) : null}
              {/* <Login />
              <Join /> */}
              {/* <Login /> */}
            </div>
          </div>
        )}
      </Fragment>
      {showFooter ? <Footer /> : null}
    </>
  );
}

export default App;
