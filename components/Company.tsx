'use client'

import React, { useState } from 'react'
import { about_company as agents } from '@/constants'

const Company = () => {
   return (
      <section className="mx-auto px-4 py-8 w-full">
         <a href='https://www.homelight.com/homes' className='text-[#273653] font-bold text-base mb-5 inline-block'>Company</a>

         <div className="flex flex-col">
            {agents.map((city, idx) => (
               <a
                  key={idx}
                  href={city.url}
                  className="mb-4 inline-block hover:underline text-[color: #273653] whitespace-nowrap overflow-hidden text-ellipsis"
               >
                  {city.text}
               </a>
            ))}
         </div>
      </section>
   )
}

export default Company
