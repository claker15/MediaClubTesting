import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState, useCallback, useRef } from 'react';
import Index from './components/main/Index';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Group from './components/group/group';

function App() {


    return (
      <div className='container'>
        <Nav></Nav>
        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/group' element={<Group/>}/>
          </Routes>`
        </div>
      </div>
    );
}

export default App;
