import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const ProductCard = ({data}) => {
  return (
    <>
      <div className='group card bg-white border-3 border-yellow-900 rounded-4xl p-2 w-full max-w-sm overflow-hidden shadow-2xl relative transition-all duration-300 hover:scale-105 hover:shadow-3xl'>
        
        <div className='absolute z-10 top-4 left-5'>
          <div className="flex items-center justify-between gap-53">
            <div className='bg-white/60 px-3 py-1 text-sm font-medium text-black rounded-full'>
              Best Seller
            </div>
            <img src={data.logo} alt="logo" className='rounded-full w-10 bg-white'/>
          </div>
        </div>

        {/* Image */}
        <div className='overflow-hidden rounded-4xl'>
          <img 
            src={data.productPhoto} 
            alt='img' 
            className='w-full h-84 object-cover rounded-4xl transition-transform duration-500 group-hover:scale-110'
          />
        </div>

        <div className='content px-4 py-3'>
          <h1 className='font-extrabold text-2xl mb-2 group-hover:text-yellow-900 transition-colors'>
            {data.productName}
          </h1>

          <p className='font-bold text-xl text-gray-400 mb-2'>
            {data.tagline}
          </p>

          <p className='font-medium text-md text-gray-400 mb-2'>
            {data.details}
          </p>
          
          <div className="price flex items-center justify-between mt-2">
            <h1 className='rounded-full bg-gray-200 px-3 py-1 text-black font-bold'>
              $ {data.price}
            </h1>
            
            <div className='flex items-center bg-black text-white rounded-full px-3 py-1 gap-2 transition-all duration-300 group-hover:bg-yellow-900'>
              <button>Buy Now</button>
              <ArrowUpRight className='inline-block w-5 h-5 bg-white text-black rounded-full p-0.5 group-hover:rotate-45 transition-transform duration-300'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductCard