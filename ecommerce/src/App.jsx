import React from 'react'
import ProductCard from './ui/ProductCard'
import Home from './Pages/Home'
import Product from "./Pages/Product"
import { Route, Routes } from 'react-router-dom'
import NavBar from './Layout/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>      
    </>
  )
}

export default App