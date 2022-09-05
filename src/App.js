import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Group from './components/group/group';
import GroupAlbumView from './components/album/groupAlbumView';

function App() {


    return (
      <div className='container'>
        <Nav></Nav>
        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/group' element={<Group/>}/>
            <Route path='/group/:groupid/album/:albumid' element={<GroupAlbumView/>}/>
          </Routes>
        </div>
      </div>
    );
}

export default App;
