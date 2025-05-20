import { testimonials } from '@/constants'
import React from 'react'
import Image from 'next/image'

const CarouselTestimonialItem = () => {
   return (
      <>
         {testimonials.map((item, index) => (
            <div
               key={index}
               className="flex-[0_0_100%] sm:flex-[0_0_33.333%] sm:p-4 m-1 mt-4 select-none"
            >
               <div className="bg-white rounded-2xl shadow-md p-6 pt-10 text-center h-full flex flex-col items-center justify-between">
                  <Image
                     src={item.image}
                     alt={item.name}
                     className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <div>
                     <h3 className="text-3xl font-bold text-[#72757d]">{item.name}</h3>
                     <p className="text-[#72757d] text-base font-bold mt-3">{item.location}</p>
                  </div>
                  <hr className="w-1/2 my-4 border-gray-300" />
                  <p className="text-gray-600 text-sm italic">"{item.quote}"</p>
               </div>
            </div>
         ))}
      </>
   )
}

export default CarouselTestimonialItem
