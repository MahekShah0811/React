import React from 'react'
import Home from './Pages/Home'
import Product from "./Pages/Product"
import { Route, Routes } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Shop from './Pages/Shop'
import Collection from './Pages/Collection'
import ContactUs from './Pages/ContactUs'
import AboutUsPage from './Pages/AboutUsPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:collection' element={<Shop />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Routes>    
      <Footer />  
    </>
  )
}

export default App