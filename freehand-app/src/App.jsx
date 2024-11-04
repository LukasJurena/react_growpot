import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
//pages
import Home from './pages/Home'

import NoPage from './pages/NoPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="*" element={<NoPage />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App