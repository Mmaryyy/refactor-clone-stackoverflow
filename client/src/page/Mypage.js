import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Delete from '../components/Mypage/Delete';
import Edit from '../components/Mypage/Edit';
import Myinfo from '../components/Mypage/Myinfo';
import Profile from '../components/Mypage/Profile';

export default function Mypage({ setShowSidebar }) {
  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={<Myinfo setShowSidebar={setShowSidebar} />}
        />
        <Route
          path='/profile'
          element={<Profile setShowSidebar={setShowSidebar} />}
        />
        <Route
          path='/delete'
          element={<Delete setShowSidebar={setShowSidebar} />}
        />
        <Route
          path='/edit'
          element={<Edit setShowSidebar={setShowSidebar} />}
        />
      </Routes>
    </>
  );
}
