import { useState, useEffect } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
