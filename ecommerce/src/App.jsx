import React from 'react'
import ProductCard from './ui/ProductCard'
import Home from './Pages/Home'
import Product from "./Pages/Product"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />}/>
      </Routes>      
    </>
  )
}

export default App