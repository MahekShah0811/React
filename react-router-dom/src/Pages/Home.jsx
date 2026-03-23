import React from 'react'

const Home = () => {
  return (
    <>
      <section className='flex items-center justify-center h-screen w-full flex-col gap-y-2'>
        <h1 className='text-9xl font-bold'>
          Home Page
        </h1>

        <h1 className='mt-10 mb-5 text-6xl font-bold'>
          Steps :
        </h1>

        <p className='text-4xl font-bold'>1 : Install React Router Dom</p>
        <p className='text-4xl font-bold'>2 : main.jsx == wrap App with BrowerRouter</p>
        <p className='text-4xl font-bold'>3 : App.jsx == wrap all Route with Routes</p>
        <p className='text-4xl font-bold'>4 : App.jsx == create a Route for all Pages</p>
        <p className='text-4xl font-bold'>5 : Convert all a == link</p>
        <p className='text-4xl font-bold'>5 : Convert all h1 == to</p>

      </section>
    </>
  );
};
export default Home
