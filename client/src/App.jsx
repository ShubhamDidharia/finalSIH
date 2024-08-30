import { useState } from 'react'
import './App.css'
import Message from './Component/Message'
import Signin from './Component/Signin'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Signout from './Component/Signout'
import Spreadsheet from './Component/SpreadSheet';
import Home from './Component/Home'
function App() {
  return (
    <>  
      {/* <Message/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Signin/>} />
            {/* <Route path="/profile" element={<Profile/>}/> */}
            <Route path="/sheet" element={<Spreadsheet/>}/>
            {/* <Route path="/login" element={<Signin/>}/> */}
            <Route path="/register" element={<Signout/>}/>
          </Routes>
          {/* <ToastContainer/> */}
        </Router>
    </>
  )
}

export default App
