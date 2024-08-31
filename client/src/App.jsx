import { useState } from 'react'
import './App.css'
import Message from './Component/Message'
import Register from './Component/Register'
import Login from './Component/Login'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Spreadsheet from './Component/SpreadSheet';
import Home from './Component/Home'
import Profile from './Component/Profile'
import RecentUser from './Component/RecentUser'
import VedioCall from './Component/VedioCall'
function App() {
  return (
    <>  
      {/* <Message/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Login/>} />
            <Route path="/sheet" element={<Spreadsheet/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/recent' element={<RecentUser/>}/>
            <Route path='/call' element={<VedioCall/>}/>
          </Routes>
          {/* <ToastContainer/> */}
        </Router>
    </>
  )
}

export default App
