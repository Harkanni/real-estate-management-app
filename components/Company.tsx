'use client'

import React, { useState } from 'react'
import { about_company as agents } from '@/constants'

const Company = () => {
   return (
      <section className="mx-auto px-4 py-8 w-full">
         <a href='https://www.homelight.com/homes' className='text-[#273653] font-bold text-base mb-5 inline-block'>Company</a>

         <div className="grid grid-cols-1 md:grid-cols-1 text-blue-900 text-[0.95rem]">
            {agents.map((city, idx) => {
               const isLink = city.url && city.url.length > 1;

               return isLink ? (
                  <a
                     key={idx}
                     href={city.url}
                     className="mb-4 hover:underline hover:text-[#18a0f8] whitespace-nowrap overflow-hidden text-ellipsis text-[#273653]"
                  >
                     {city.text}
                  </a>
               ) : (
                  <p
                     key={idx}
                     className="text-[#8e929c] mb-4"
                  >
                     {city.text}
                  </p>
               );
            })}
         </div>

      </section>
   )
}

export default Company
