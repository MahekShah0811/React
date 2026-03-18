import React from 'react'
import SideBar from '../Layout/SideBar'
import NavBar from '../Layout/NavBar'

const HomePage = () => {
  return (
    <>
      <section className='w-full h-screen flex'>
        <div className='w-16 h-screen border-r border-r-gray-300'>
            <SideBar />
        </div>

        <div className='w-full h-screen px-4 py-2'>
            <NavBar />
        </div>
      </section>
    </>
  )
}

export default HomePage
