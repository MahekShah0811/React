import React from 'react'
import ProductBar from '../Component/ProductBar'
import Hero from '../Component/Home/Hero'
import DetailsBar from '../Component/Home/DetailsBar'
import CategoryBar from '../Component/Home/CategoryBar'
import Offer from '../Component/Home/Offer'
import DealBar from '../Component/Home/DealBar'

const Home = () => {
  return (
    <>
        <Hero />
        <DetailsBar />
        <CategoryBar />
        <ProductBar />
        <Offer />
        <DealBar />
    </>
  )
}

export default Home