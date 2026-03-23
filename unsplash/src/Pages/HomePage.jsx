import React from 'react'
import SideBar from '../Layout/SideBar'
import NavBar from '../Layout/NavBar'
import HeroSection from '../Component/HeroSection'
import Gallery from '../Component/Gallery'

const HomePage = () => {
  return (
    <>
      <section className='w-full h-screen flex'>
        <div className='w-16 h-screen'>
            <SideBar />
        </div>

        <div className='w-full h-screen py-3'>
            <NavBar />
            <section className='px-10 flex flex-col items-center justify-center mt-12 mx-auto'>
              <HeroSection />
              <Gallery />
            </section>
        </div>

        
      </section>
    </>
  )
}

export default HomePage
