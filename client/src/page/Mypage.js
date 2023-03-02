import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Delete from '../components/Mypage/Delete';
import Edit from '../components/Mypage/Edit';
import Myinfo from '../components/Mypage/Myinfo';
import Profile from '../components/Mypage/Profile';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// const Container = styled.div`
//   max-width: 1100;
// `

export default function Mypage({ setShowSidebar }) {
  const data = useSelector(state => state.userDataReducer.currentUser)

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={<Profile setShowSidebar={setShowSidebar} data={data}/>}
        />
        <Route
          path='/delete'
          element={<Delete setShowSidebar={setShowSidebar} data={data}/>}
        />
        <Route
          path='/edit'
          element={<Edit setShowSidebar={setShowSidebar}data={data} />}
        />
      </Routes>
    </>
  );
}
