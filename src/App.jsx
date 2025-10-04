import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Cuisines from './components/Cuisines'
import '@tailwindplus/elements';
import Navbar from './components/Navbar'
import Receipes from './components/Receipes'
import FullReceipe from './components/FullReceipe'
import Meals from './components/Meals'
function App() {
 
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Cuisines></Cuisines>}></Route>
      <Route path='/Cuisines' element={<Cuisines></Cuisines>}></Route>
      <Route path="/Receipes/:cuisine" element={<Receipes></Receipes>}></Route>
      <Route path="/Receipes" element={<Receipes></Receipes>}></Route>
      <Route path='/Fullreceipe/:id' element={<FullReceipe></FullReceipe>}></Route>
      <Route path='/Meals/:meal' element={<Meals></Meals>}></Route>
    </Routes>
    </>
  )
}

export default App
