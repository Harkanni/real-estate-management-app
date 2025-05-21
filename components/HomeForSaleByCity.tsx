'use client'

import React, { useState } from 'react'
import { home_for_sale_by_city as agents } from '@/constants'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const HomeForSaleByCity = () => {
   const [showAll, setShowAll] = useState(false);

   const visibleAgents = showAll ? agents : agents.slice(0, 12);

   return (
      <section className="mx-auto px-4 py-8">
         <a href='https://www.homelight.com/homes' className='text-[#273653] font-bold text-base mb-5 inline-block'>Search homes for sale by city</a>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5 text-sm text-blue-900">
            {visibleAgents.map((city, idx) => (
               <a
                  key={idx}
                  href={city.url}
                  className="hover:underline text-[color: #273653] whitespace-nowrap overflow-hidden text-ellipsis"
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

export default HomeForSaleByCity
