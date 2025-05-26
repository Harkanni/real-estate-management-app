import React from 'react'

const Menu4 = ({ popoverLeft }: { popoverLeft: number }) => {
   return (
      <>
         <div
            style={{
               left: `${popoverLeft}px`
            }}
            className="absolute top-full mt-2 animate-slide-up transition-all bg-transparentg p-0 rounded shadow z-50"
         >
            <div className="relative w-[990px] shadow-2xl min-h-[300px] bg-white rounded-lg flex overflow-hidden">
               {/* Top arrow */}
               {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2  drop-shadow-sm z-[999]">
                        <BsFillTriangleFill size={24} />
                     </div> */}

               {/* Content */}
               <div className="flex w-full">
                  {/* Left Side */}
                  <div className="bg-blue-50 p-6 flex flex-col items-center justify-center w-1/2">
                     <img
                        src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
                        alt="House"
                        className="w-24 h-24 mb-4"
                     />
                     <h3 className="text-lg font-semibold text-[#273653] text-center">
                        Learn More about Buy Before You Sell
                     </h3>
                     <p className="text-sm text-center text-gray-600 mt-2">
                        Help your clients buy their next home before selling their current one.
                     </p>
                     <button className="mt-4 text-blue-600 font-semibold hover:underline flex items-center gap-1">
                        Get started <span>→</span>
                     </button>
                  </div>

                  {/* Right Side */}
                  <div className="p-6 w-1/2 space-y-4">
                     {[
                        {
                           title: "Buy Before You Sell for Lenders",
                           desc: "Eliminate the home sale contingency with a 0% bridge loan",
                           icon: "🏦",
                        },
                        {
                           title: "Buy Before You Sell for Builders",
                           desc: "Close more deals with contingent buyers",
                           icon: "🏗️",
                        },
                        {
                           title: "Buy Before You Sell for Agents",
                           desc: "Unlock equity for your client’s home purchase with ease",
                           icon: "👤",
                        },
                        {
                           title: "Buy Before You Sell for Clients",
                           desc: "Move into your new home now, and sell your current home later",
                           icon: "🏠",
                        },
                     ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                           <div className="text-2xl">{item.icon}</div>
                           <div>
                              <p className="font-medium text-[#273653]">{item.title}</p>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Menu4
