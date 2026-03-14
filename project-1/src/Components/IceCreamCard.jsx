import React from 'react'

const IceCreamCard = ({data}) => {
  return (
    <>
      <div className="card bg-white rounded-4xl border-3 border-rose-400/90  w-full max-w-sm overflow-hidden shadow-2xl relative transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          <img src= {data.image}
          alt="img"
          className="w-full h-100 object-cover rounded-t-4xl border-2 border-gray-300"/>

          <div className='content px-4 py-3'>
                <h1 className='font-extrabold text-2xl mb-2 group-hover:text-yellow-900 transition-colors'>
                     {data.name}
                </h1>
                <div className="more flex gap-2 items-center">
                    <span className="text-[14px] bg-rose-400/90 text-green-50 rounded-full px-2 py-1">{data.ingredients[0]}</span>
                    <span className="text-[14px] bg-rose-400/90 text-green-50 rounded-full px-2 py-1">{data.ingredients[1]}</span>
                    <span className="text-[14px] bg-rose-400/90 text-green-50 rounded-full px-2 py-1">{data.ingredients[2]}</span>
                </div>
                <p className='text-xl text-black mb-2 mt-4'>{data.detail}</p>

                <div className="more flex gap-2 items-center">
                    <span className="text-[14px] bg-white text-gray-600 rounded-full px-2 py-1">Toppings</span>
                    <span className="text-[14px] border border-gray-500 bg-white text-gray-600 rounded-full px-2 py-1">{data.toppings[0]}</span>
                    <span className="text-[14px] border border-gray-500 bg-white text-gray-600 rounded-full px-2 py-1">{data.toppings[1]}</span>
                </div>  
          </div>

          <div className="flex justify-between items-end px-6 pb-4">
   <div className="price">
      <h2 className="text-3xl font-bold text-rose-500">${data.price}</h2>
      <p className="flex gap-1 items-center text-[14px] text-gray-600">+${data.delivery_charge} Delivery</p>
   </div>

   <button className="text-[16px] bg-rose-500 text-white rounded-full px-18 py-2 mb-2 active:bg-rose-400/90 active:scale-95 text-2xl font-bold">
      Add to Cart
   </button>
</div>
           
            



    </div>
    </>
      
    
  )
}

export default IceCreamCard
