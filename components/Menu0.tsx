import { menu0IMG } from '@/public'
import Image from 'next/image'
import React from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'

const Menu0 = ({ popoverLeft }: { popoverLeft: number }) => {
   return (
      <>
         <div
            style={{
               left: `${popoverLeft}px`
            }}
            className="absolute top-full mt-4 animate-slide-up transition-all bg-transparentg p-0 rounded shadow z-50"
         >
            <div className="relative w-[1120px] shadow-2xl min-h-[300px] bg-white rounded-lg flex">
               {/* Triangle */}
               <div className="absolute -top-3 left-[16rem] z-[999]">
                  <BsFillTriangleFill className="#eff6ff" size={24} color='#eff6ff' />
               </div>

               {/* Main content */}
               <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                  {/* Left Section */}
                  <div className="bg-blue-50 p-6 flex flex-col items-center justify-center w-[35%] border-r border-gray-200">
                     <Image
                        src={menu0IMG}
                        alt="Buying Home"
                        className="mb-4"
                        // className="w-full h-full mb-4"
                     />
                     <h3 className="text-lg font-semibold text-[#273653] text-center">
                        Buying a house?
                     </h3>
                     <p className="text-sm text-center text-gray-600 mt-2">
                        Find a top real estate agent to help you navigate the market and negotiate the best price.
                     </p>
                     <button className="mt-4 text-blue-600 font-semibold hover:underline flex items-center gap-1">
                        Get started <span>→</span>
                     </button>
                  </div>

                  {/* Right Section (3 columns) */}
                  <div className="p-6 w-[65%] grid grid-cols-3 divide-x divide-gray-200">
                     {/* Column 1 */}
                     <div className="pr-6">
                        <h4 className="font-bold mb-5 text-[#273653]">Buying with an agent</h4>
                        <ul className="space-y-9 text-blue-600 font-semibold text-[0.88rem]">
                           <li><a href="#">Find a buyer's agent</a></li>
                           <li><a href="#">What is a buyer's agent?</a></li>
                           <li><a href="#">How to choose a buyer's agent?</a></li>
                           <li><a href="#">Questions to ask your buyer's agent</a></li>
                        </ul>
                     </div>

                     {/* Column 2 */}
                     <div className="px-6">
                        <h4 className="font-bold mb-5 text-[#273653]">First-time buyers</h4>
                        <ul className="space-y-9 text-blue-600 font-semibold text-[0.88rem]">
                           <li><a href="#">First-time homebuyer tips</a></li>
                           <li><a href="#">First-time homebuyer programs</a></li>
                           <li><a href="#">How much home can I afford?</a></li>
                           <li><a href="#">Homes for sale in San Jose, CA</a></li>
                        </ul>
                     </div>

                     {/* Column 3 */}
                     <div className="pl-6">
                        <h4 className="font-bold mb-5 text-[#273653]">Buyer resources</h4>
                        <ul className="space-y-9 text-blue-600 font-semibold text-[0.88rem]">
                           <li><a href="#">Down payment calculator</a></li>
                           <li><a href="#">Closing costs calculator</a></li>
                           <li><a href="#">Buy before you sell</a></li>
                           <li><a href="#">Documents needed to buy a house</a></li>
                           <li><a href="#">Buyer Resource Center</a></li>
                           <li><a href="#">Rent to own center</a></li>
                           <li><a href="#">Foreclosure resources</a></li>
                        </ul>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}

export default Menu0
