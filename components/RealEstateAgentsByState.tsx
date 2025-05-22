'use client'

import React, { useState } from 'react'
import { top_real_estate_agent_by_state as agents } from '@/constants'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RealEstateAgentsByState = () => {
   const [showAll, setShowAll] = useState(false);

   const visibleAgents = showAll ? agents : agents.slice(0, 20);
   return (
      <section className="mx-auto px-4 py-8">
         <a href='https://www.homelight.com/find-real-estate-agents' className='text-[#273653] font-bold text-base mb-5 inline-block'>Find top real estate agents by state</a>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5 text-[0.95rem] text-blue-900">
            {visibleAgents.map((city, idx) => (
               <a
                  key={idx}
                  href={city.url}
                  className="hover:underline hover:text-[#18a0f8] whitespace-nowrap overflow-hidden text-ellipsis text-[#273653]"
               >
                  {city.text}
               </a>
            ))}
         </div>
         <div className="mt-4">
            <button
               onClick={() => setShowAll(!showAll)}
               className="text-blue-500 text-sm font-medium hover:underline flex items-center justify-center gap-2 outline-none"
            >
               {showAll ? 'Show less' : 'Show more'}
               <span className={`transform transition-transform font-bold mt-1`}>
                  {
                     showAll ? <IoIosArrowUp /> : <IoIosArrowDown />
                  }
               </span>
            </button>
         </div>
      </section>
   )
}

export default RealEstateAgentsByState
