import React from 'react'
import { BadgePercent, ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <>
        <section className='bg-[#cebdb5] h-136 overflow-hidden flex items-center justify-between px-6 w-full'>
            <div className='w-1/2 pl-10'>
                {/* Sale */}
                <div className='inline-block bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 text-xl'>
                    <div className='flex items-center justify-center gap-x-2'>
                        <BadgePercent fill="#7f5539" className='text-white w-8 h-8' /> 
                        <span className="font-semibold">50% OFF</span> Summer Super Sale
                    </div>
                </div>

                {/* Title */}
                <h1 className='text-4xl font-medium leading-relaxed'> 
                    Step into style : Your<br /> 
                    Ultimate Fashion Destination
                </h1>
                
                {/* Description */}
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br />Exercitationem, atque vitae a minus libero nulla sed facilis eaque quod enim.
                </p>

                {/* Button */}
                <button>
                    Shop Now <ArrowRight />
                </button>
            </div>

            <img src='/girl.png' alt='girl' className='object-cover -mt-12 scale-x[-1] rotate-y-180'/>
        </section>
    </>
  )
}

export default Hero