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

   const items = Array.from({ length: 9 }, (_, i) => i + 1);
   const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: false, delay: 3000 })]);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


   const scrollTo = useCallback(
      (index: number) => embla && embla.scrollTo(index),
      [embla]
   );

   const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
   }, [embla]);

   useEffect(() => {
      if (!embla) return;

      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on('select', onSelect);
   }, [embla, onSelect]);

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
            <div className="overflow-hidden" ref={emblaRef}>
               <div className="flex">
                  {testimonials.map((item, index) => (
                     <div
                        key={index}
                        className="flex-[0_0_80%] sm:flex-[0_0_33.333%] p-4 select-none"
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
               </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
               {scrollSnaps.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => scrollTo(index)}
                     className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                        }`}
                  />
               ))}
            </div>
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