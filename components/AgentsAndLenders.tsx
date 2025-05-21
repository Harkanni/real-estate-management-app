'use client'

import React, { useState } from 'react'
import { for_agents_And_lenders as agents } from '@/constants'

const AgentsAndLenders = () => {
   return (
      <section className="mx-auto px-4 py-8 w-full">
         <a href='https://www.homelight.com/homes' className='text-[#273653] font-bold text-base mb-5 inline-block'>For Agents & Lenders</a>

         <div className="grid grid-cols-1 text-blue-900">
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

export default AgentsAndLenders
