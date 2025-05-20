'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { MdStar } from "react-icons/md";
import { testimonials } from '@/constants';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';
import CarouselTestimonialItem from './CarouselTestimonialItem';

const Testimonials = () => {
   return (
      <section className={`p-16 my-5 bg-[#f2f8fe]`}>
         <h2 className='mb-14 text-center text-4xl font-semibold'>What our clients say</h2>
         <div className={`text-center`}>
            <span className='text-5xl font-thin text-[#18a0f8]' style={{ verticalAlign: 'middle' }}>4.8</span>

            <span className={`inline-flex justify-center items-center mx-1`} >
               {
                  [1, 2, 3, 4].map((item, index) => {
                     return (
                        <span key={index} className=''>
                           <MdStar color='#ffa53b' />
                        </span>
                     )
                  })
               }
            </span>

            <span>Google rating based on over 240+ reviews</span>
         </div>
         <div className="w-full">
            <TestimonialCarousel> 
               <CarouselTestimonialItem />
            </TestimonialCarousel>            
         </div>
         {/* <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
               {items.map((item) => (
                  <div
                     key={item}
                     className="embla__slide flex-[0_0_80%] sm:flex-[0_0_33.333%] p-4"
                  >
                     <div className="bg-blue-500 rounded-2xl h-40 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                        Box {item}
                     </div>
                  </div>
               ))}
            </div>
         </div> */}
      </section>
   )
}

export default Testimonials