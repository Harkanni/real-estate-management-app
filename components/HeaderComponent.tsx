'use client'

import React, { useEffect, useState } from 'react';
import { IoLogoMicrosoft } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '@/public/style.module.css'
import { Button } from '@mui/material';
import StickyNavbarComponent from './StickyNavbarComponent';

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
         <StickyNavbarComponent setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSticky={isSticky} />
      </>
   );
}
