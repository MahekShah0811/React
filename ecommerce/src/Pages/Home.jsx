import React from 'react'
import ProductBar from '../Component/ProductBar'
import Hero from '../Component/Home/Hero'
import DetailsBar from '../Component/Home/DetailsBar'
import CategoryBar from '../Component/Home/CategoryBar'
import Offer from '../Component/Home/Offer'
import DealBar from '../Component/Home/DealBar'
import DiscountBar from '../Component/Home/DiscountBar'
import Newsletter from '../Component/Home/Newsletter'

const Home = () => {
  return (
    <>
        <Hero />
        <DetailsBar />
        <CategoryBar />
        <ProductBar />
        <Offer />
        <DealBar />
        <DiscountBar />
        <Newsletter />
    </>
  )
}

export default Home