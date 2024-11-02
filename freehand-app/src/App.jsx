import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
