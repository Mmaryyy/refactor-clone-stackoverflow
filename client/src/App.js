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
import { Routes, Route, useLocation } from 'react-router-dom';
import Contents from './page/Contents';
import Footer from './components/Footer';
import Mypage from './page/Mypage';
import Post from './page/Post'
import { useDispatch, useSelector } from 'react-redux'
import { setPostId } from './redux/actions/content';

function App() {
  const dispatch = useDispatch()
  const [ isReady, setIsReady ] = useState(false);
  const { pathname } = useLocation()
  useEffect(() => {
    dispatch(setPostId(window.location.href))
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false);
    }, 5000);
  }, [])
  const postId = useSelector(state => state.contentReducer.postId)
  console.log(postId)
  return (
    <>
      <Header />
      <Fragment>
        <GlobalStyle />
        {isReady ? (
          <Index />
        ) : ( 
          <div className='app_wrap'>
            <Nav hide={pathname.slice(-2) === "in" ? "hide" : null}/>
            <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/questions' element={<Contents />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path={`/post/id=${1}`} element={<Post postId={postId}/>} />
              <Route path='/login' element={<Login />}/>
              <Route path='/join' element={<Join />}/>
            </Routes>
            <div className={`sidebar${pathname.slice(-2) === "in" ? " hide" : null}`}>
              <Sidebar />
              {/* <Sidebar2 /> */}
            </div>
            {/* <Login />
            <Join /> */}
            {/* <Login /> */}
          </div>
        )}
      </Fragment>
      <Footer hide={pathname.slice(-2) === "in" ? "hide" : null}/>
    </>
  );
}

export default App;
