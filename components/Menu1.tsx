import React from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'

const Menu1 = ({ popoverLeft }: { popoverLeft: number }) => {
   return (
      <>
         <div
            style={{
               left: `${popoverLeft}px`
            }}
            className="absolute top-full mt-2 animate-slide-up transition-all bg-transparentg p-0 rounded shadow z-50"
         >
            <div className="relative w-[990px] shadow-2xl min-h-[300px] bg-white rounded-lg flex overflow-hidden">
               {/* Triangle */}
               <div className="absolute -top-3 left-10 drop-shadow-sm z-[999]">
                  <BsFillTriangleFill className="text-white" size={24} />
               </div>

               {/* Main content */}
               <div className="flex w-full divide-x divide-gray-200">
                  {/* Left Section */}
                  <div className="bg-blue-50 p-6 flex flex-col items-center justify-center w-[35%]">
                     <img
                        src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
                        alt="Buying Home"
                        className="w-[100%] h-full mb-4"
                     />
                     <h3 className="text-lg font-semibold text-[#273653] text-center">
                        Selling a house
                     </h3>
                     <p className="text-sm text-center text-gray-600 mt-2">
                        Find a top real estate agent to help you sell faster and for more money.
                     </p>
                     <button className="mt-4 text-blue-600 font-semibold hover:underline flex items-center gap-1">
                        Get started <span>→</span>
                     </button>
                  </div>

                  {/* Right Section (3 columns) */}
                  <div className="p-6 w-[65%] grid grid-cols-3 gap-6">
                     {/* Column 1 */}
                     <div>
                        <h4 className="font-bold mb-5 text-[#273653]">Selling with an agent</h4>
                        <ul className="space-y-10 text-blue-600 font-bold text-sm">
                           <li><a href="#">Find a listing agent</a></li>
                           <li><a href="#">How to choose a listing agent</a></li>
                           <li><a href="#">Steps to selling a house with an agent</a></li>
                           <li><a href="#">Why hire a listing agent?</a></li>
                        </ul>
                     </div>

                     {/* Column 2 */}
                     <div>
                        <h4 className="font-bold mb-5 text-[#273653]">Seller resources</h4>
                        <ul className="space-y-10 text-blue-600 font-bold text-sm">
                           <li><a href="#">How much is my home worth?</a></li>
                           <li><a href="#">Best time to sell calculator</a></li>
                           <li><a href="#">Checklist for selling your home</a></li>
                           <li><a href="#">Net proceeds calculator</a></li>
                           <li><a href="#">Explore the Seller Resource Center</a></li>
                        </ul>
                     </div>

                     {/* Column 3 */}
                     <div>
                        <h4 className="font-bold mb-5 text-[#273653]">Selling a house for cash</h4>
                        <ul className="space-y-10 text-blue-600 font-bold text-sm">
                           <li><a href="#">Get a offer with simple sale</a></li>
                           <li><a href="#">How to sell a house as-is</a></li>
                           <li><a href="#">How to sell your house for cash</a></li>
                           <li><a href="#">Steps to selling a house for cash</a></li>
                           <li><a href="#">Companies that buy houses for cash</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Menu1
