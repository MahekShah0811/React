import { ArrowRight } from 'lucide-react'
import React from 'react'

const Offer = () => {
  return (
    <>
        <section className='w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100'>
            {/* image */}
            <div>
                <img src="/Images/home.png" alt="offer image" />
            </div>
            
            {/* text */}
            <div className='px-6 py-2 flex flex-col justify-center items-start'>
                <p className='text-lg font-bold py-3'>Limited Time Offers</p>
                
                <h1 className='text-4xl font-bold leading-normal py-1'>
                    25% Off All Fashion<br />Favorites - Limited Time !
                </h1>
            
                <p className='pt-1 text-xl text-gray-700 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    <br />
                    Explicabo et alias tenetur facilis.
                </p>
                
                <button className="bg-[#583101] flex items-center justify-center text-white px-6 py-3 my-4 gap-x-3 rounded-3xl active:scale-95  active:rounded-md">
                    Show Now <ArrowRight />
                </button>
            </div>
        </section>
    </>
  )
}

export default Offer
