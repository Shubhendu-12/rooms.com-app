import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route
}   
from 'react-router-dom';  
import Signup from './components/Signup';

function App() {
  

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
     <Route path ="login" element={<Login/>}/>
     <Route path='signup' element={<Signup/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
