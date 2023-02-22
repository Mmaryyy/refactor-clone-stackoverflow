import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Delete from '../components/Mypage/Delete';
import Edit from '../components/Mypage/Edit';
import Myinfo from '../components/Mypage/Myinfo';
import Profile from '../components/Mypage/Profile';

export default function Mypage() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Myinfo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>
  );
}
