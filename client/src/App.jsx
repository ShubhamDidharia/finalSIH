import { useState } from 'react'
import './App.css'
import Message from './Component/Message'
import Signin from './Component/Signin'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Signout from './Component/Signout'
import Sheet from './Component/Sheet';
import Spreadsheet from './Component/sheet/SpreadSheet';
function App() {
  return (
    <>  
      <Spreadsheet/>
      {/* <Message/> */}
        <Router>
          <Routes>
            {/* <Route path="/" element={<U/>} /> */}
            {/* <Route path="/profile" element={<Profile/>}/> */}
            {/* <Route path="/sheet" element={<Spreadsheet/>}/> */}
            {/* <Route path="/login" element={<Signin/>}/> */}
            <Route path="/register" element={<Signout/>}/>
          </Routes>
          {/* <ToastContainer/> */}
        </Router>
    </>
  )
}

export default App
