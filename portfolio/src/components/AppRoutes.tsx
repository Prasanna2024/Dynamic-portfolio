import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes