import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Message from './Component/Message'
import Signin from './Component/Signin'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Signout from './Component/Signout'
import Spreadsheet from './Component/SpreadSheet'
function App() {
  return (
    <>  
        {/* <Signout/> */}
        {/* <Spreadsheet/> */}
        <Router>
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Signin/>} />
            {/* <Route path="/profile" element={<Profile/>}/> */}
            <Route path="/sheet" element={<Spreadsheet/>}/>
            {/* <Route path="/login" element={<Signin/>}/> */}
            {/* <Route path="/register" element={<Register/>}/> */}
          </Routes>
          {/* <ToastContainer/> */}
        </Router>
    </>
  )
}

export default App
