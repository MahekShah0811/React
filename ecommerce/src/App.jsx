import React from 'react'
import Home from './Pages/Home'
import Product from "./Pages/Product"
import { Route, Routes } from 'react-router-dom'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>    
      <Footer />  
    </>
  )
}

export default App