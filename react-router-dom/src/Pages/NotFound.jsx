import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='flex items-center justify-center flex-col h-screen w-full'>
        <h1 className='text-8xl font-bold'>
          404
        </h1>

        <h2 className='text-5xl font-bold mt-3'>
          Page Not Found
        </h2>
        
        <Link to="/">
          <button className='bg-black rounded-3xl px-10 py-5 text-white text-xl font-semibold my-10'>
            Go To Home Page
          </button>
        </Link>
      </section>
    </>
  )
}

export default NotFound