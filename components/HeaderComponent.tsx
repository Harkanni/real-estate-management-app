'use client'

import React, { useEffect, useState } from 'react';
import { IoLogoMicrosoft } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '@/public/style.module.css'
import { Button } from '@mui/material';

export default function Header() {
   const [isSticky, setIsSticky] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.scrollY > 150); // toggle at 150px scroll
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <>
         <header className={`${styles.bgHero} h-[100vh] px-16 py-5`}>
            <nav className="flex justify-between items-center">
               <div className={`flex gap-3 items-center text-white text-3xl font-sans`}>
                  <IoLogoMicrosoft size={45} color="white" className={`${styles.logo} rounded-[50rem] cursor-pointer`} />
                  <h1 className={`${styles.textShadow}`}>Real Estimate</h1>
               </div>
               <div className={`${styles.navList} flex items-center`}>
                  <ul className="flex gap-16 text-white items-center mt-2">
                     <li className={`${styles.textShadow}`}>About us</li>
                     <li className={`${styles.textShadow}`}>For Agents</li>
                     <li className={`${styles.textShadow}`}>Get Estimates</li>
                  </ul>
               </div>
               <div className={`${styles.hamburger}`} onClick={() => {setIsMenuOpen(!isMenuOpen); setIsSticky(true)}}>
                  <GiHamburgerMenu size={35} color="white" className={`cursor-pointer`} />
               </div>
            </nav>

            <div className={`${styles.banner} mt-20 w-[51%] h`}>
               <h1 className={`${styles.textShadow} text-white text-4xl leading-[3rem] font-bold`}>Find out what your home is really worth</h1>
               <div className={`p-2 pl-5 flex justify-between gap-1 bg-white rounded-lg mt-7 mb-5`}>
                  <input className={`${styles.textInput} flex-1 placeholder:hidden`} type="text" placeholder="Enter your address" />
                  <Button variant="contained" color="primary" className={`${styles.button} bg-black`}>Estimate</Button>
               </div>
               <p className={`${styles.textShadow} text-white`}>Get a real-world home value estimate in less than 2 minutes.</p>
            </div>

         </header>

         {/* Sticky Navbar */}
         <nav className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4">
               {/* Logo Section */}
               <div className="flex items-center gap-2">
                  <IoLogoMicrosoft size={35} color="#273653" className="rounded-full cursor-pointer" />
                  <span className="text-xl font-semibold text-[#273653]">Real Estimate</span>
               </div>

               {/* Desktop Menu */}
               <ul className="hidden lg:flex gap-8 items-center text-[#273653] font-medium">
                  <li className="cursor-pointer hover:underline">Buy</li>
                  <li className="cursor-pointer hover:underline">Sell</li>
                  <li className="cursor-pointer hover:underline">Buy Before You Sell</li>
                  <li className="cursor-pointer hover:underline">Agents</li>
                  <li className="cursor-pointer hover:underline">Lenders</li>
                  <li className="cursor-pointer hover:underline">About Us</li>
               </ul>

               {/* Sign In button (Desktop) */}
               <a href="/signin" className="hidden lg:inline text-[#18a0f8] font-medium border border-[#18a0f8] rounded px-4 py-2 hover:bg-[#18a0f8] hover:text-white transition">
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
   );
}
