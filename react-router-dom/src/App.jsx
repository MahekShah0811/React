import React from 'react'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import About from './Pages/About'
import Collection from './Pages/Collection'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Product from './Pages/Product'
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/collection' element={<Collection />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />  
    </>
  )
}

export default App
