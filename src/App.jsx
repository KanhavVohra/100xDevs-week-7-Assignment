import { useState } from 'react'

import './App.css'

import {Routes, Route } from 'react-router-dom'


// Components 
import Profile from './pages/profile-component'
import Backchanger from './pages/background'
import Para from './pages/text-generator'

import Birthday from './pages/birthday'
import Home from './components/home'
import LoginPage from './pages/loginpage'




function App() {
 

  return (

   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/background-changer' element={<Backchanger />}/>
    <Route path='/Text-generator' element={<Para />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/birthday' element={<Birthday />}/>
   </Routes>

  )
}


export default App
