import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoLogoMicrosoft } from 'react-icons/io5'
import { BsFillTriangleFill } from "react-icons/bs";
import Menu2 from './Menu2';
import Menu0 from './Menu0';
import Menu1 from './Menu1';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
import { BiChevronDown } from 'react-icons/bi';

const StickyNavbarComponent = ({ setIsMenuOpen, isMenuOpen, isSticky, isVisible }: { setIsMenuOpen?: any, isMenuOpen?: boolean, isSticky?: boolean, isVisible?: boolean }) => {
   const [hovering, setHovering] = useState<number | null>(null);
   const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
   const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

   return (
      <>
         <nav onMouseEnter={() => setHovering(null)} className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4">
               {/* Logo Section */}
               <div className="flex items-center gap-2">
                  <IoLogoMicrosoft size={35} color="#273653" className="rounded-full cursor-pointer" />
                  <span className="text-xl font-semibold text-[#273653]">Real Estimate</span>
               </div>

               {/* Desktop Menu */}
               <ul className="hidden lg:flex gap-8 items-center text-[#273653] font-medium relative">
                  <a href='#' onMouseOver={(event) => { setHovering(0); setPopoverLeft(event.currentTarget.offsetLeft - 250); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:no-underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>Buy</p>
                     <i><BiChevronDown size={24} /></i>
                  </a>
                  <a href='#' onMouseOver={(event) => { setHovering(1); setPopoverLeft(event.currentTarget.offsetLeft - 220); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:no-underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>Sell</p>
                     <BiChevronDown size={24} />
                  </a>
                  <a href='#' onMouseOver={(event) => { setHovering(2); setPopoverLeft(event.currentTarget.offsetLeft - 200); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:no-underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>Buy Before You Sell</p>
                     <BiChevronDown size={24} />
                  </a>
                  <a href='#' onMouseOver={(event) => { setHovering(3); setPopoverLeft(event.currentTarget.offsetLeft - 200); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>Agents</p>
                     <BiChevronDown size={24} />
                  </a>
                  <a href='#' onMouseOver={(event) => { setHovering(4); setPopoverLeft(event.currentTarget.offsetLeft - 200); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:no-underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>Lenders</p>
                     <BiChevronDown size={24} />
                  </a>
                  <a href='#' onMouseOver={(event) => { setHovering(5); setPopoverLeft(event.currentTarget.offsetLeft - 220); console.log(event.currentTarget.offsetLeft) }} className="cursor-pointer hover:no-underline flex gap-2 justify-center items-center text-[color: #273653] font-semibold">
                     <p>About Us</p>
                     <BiChevronDown size={24} />
                  </a>

                  {typeof hovering === 'number' && (
                     hovering === 0 ? <Menu0 popoverLeft={popoverLeft!} /> :
                        hovering === 1 ? <Menu1 popoverLeft={popoverLeft!} /> :
                           hovering === 2 ? <Menu2 popoverLeft={popoverLeft!} /> :
                              hovering === 3 ? <Menu3 popoverLeft={popoverLeft!} /> :
                                 hovering === 4 ? <Menu4 popoverLeft={popoverLeft!} /> :
                                    hovering === 5 ? <Menu4 popoverLeft={popoverLeft!} /> :
                                       null
                  )}



               </ul>

               {/* Sign In button (Desktop) */}
               <a href="../client/sign-in" className="hidden lg:inline text-[#18a0f8] font-medium border border-[#18a0f8] rounded px-4 py-2 hover:bg-[#18a0f8] hover:text-white transition">
                  Sign In
               </a>

               {/* Hamburger Icon (Mobile) */}
               <button
                  className="lg:hidden text-[#273653] focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  <GiHamburgerMenu size={28} />
               </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
               <div className="lg:hidden px-6 pb-4 text-[#273653] bg-white border-t border-gray-200">
                  <ul className="flex flex-col gap-4 font-medium">
                     <li className="cursor-pointer hover:underline">Buy</li>
                     <li className="cursor-pointer hover:underline">Sell</li>
                     <li className="cursor-pointer hover:underline">Buy Before You Sell</li>
                     <li className="cursor-pointer hover:underline">Agents</li>
                     <li className="cursor-pointer hover:underline">Lenders</li>
                     <li className="cursor-pointer hover:underline">About Us</li>
                  </ul>
                  <a
                     href="/signin"
                     className="mt-4 inline-block text-center w-full text-[#18a0f8] font-medium border border-[#18a0f8] rounded px-4 py-2 hover:bg-[#18a0f8] hover:text-white transition"
                  >
                     Sign In
                  </a>
               </div>
            )}


         </nav>
      </>
   )
}

export default StickyNavbarComponent
