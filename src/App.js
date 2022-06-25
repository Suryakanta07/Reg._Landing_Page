import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error.js';
import RegisterSuccess from './components/RegisterSuccess';
import LoginSuccess from './components/LoginSuccess';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        
        <Route exact path='/' element={<Showcase />} />
        
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/registerSuccess' element={<RegisterSuccess />} />
        <Route exact path='/loginSuccess' element={<LoginSuccess />} />
        <Route path='*'element={<Error />} />
          
         
      </Routes>
       {window.location.pathname === '/' || window.location.pathname === 'login' || window.location.pathname === '/signup' ?   <Destinations /> : null}
   
      <Footer />
    </BrowserRouter>
  )
}

export default App
