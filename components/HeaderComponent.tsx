'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import { IoLogoMicrosoft } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '@/public/style.module.css'
import { Button } from '@mui/material';
import StickyNavbarComponent from './StickyNavbarComponent';

export default function Header() {
   const [isSticky, setIsSticky] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);


   // type Suggestion = {
   //    properties: {
   //       name: string;
   //       city?: string;
   //       country?: string;
   //    };
   // };
   type Suggestion = any

   const [query, setQuery] = useState<string>('');
   const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

   const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (value.length > 2) {
         try {
            // const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?autocomplete=true&access_token=pk.eyJ1IjoiaG9tZWxpZ2h0IiwiYSI6ImNqNmZka24yNDJtd3QzMm8xYm1hbWFhcnIifQ.BT1EY0MP0qndOTsWsvv8FA&country=ng&types=address`);
            // const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(value)}`);
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=json&addressdetails=1&limit=5`);
            const data = await res.json();
            console.log("SUGGESTIONS: ", data)
            setSuggestions(data.features || []);
         } catch (error) {
            console.error('Autocomplete fetch failed:', error);
         }
      } else {
         setSuggestions([]);
      }
   };

   const handleSuggestionClick = (suggestion: Suggestion) => {
      const { name, city, country } = suggestion.properties;
      setQuery(`${name}${city ? ', ' + city : ''}${country ? ', ' + country : ''}`);
      setSuggestions([]);
   };


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
               <div className={`${styles.hamburger}`} onClick={() => { setIsMenuOpen(!isMenuOpen); setIsSticky(true) }}>
                  <GiHamburgerMenu size={35} color="white" className={`cursor-pointer`} />
               </div>
            </nav>

            <div className={`${styles.banner} mt-20 w-[51%] h`}>
               <h1 className={`${styles.textShadow} text-white text-4xl leading-[3rem] font-bold`}>Find out what your home is really worth</h1>
               <div className="relative">
                  <div className="p-2 pl-5 flex justify-between gap-1 bg-white rounded-lg mt-7 mb-1">
                     <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        className={`${styles.textInput} flex-1 outline-none`}
                     />
                     <Button variant="contained" color="primary" className={`${styles.button} bg-black`}>
                        Estimate
                     </Button>
                  </div>

                  {suggestions.length > 0 && (
                     <ul className="absolute z-10 bg-white w-full max-h-[200px] overflow-y-auto rounded-lg shadow-md border mt-1">
                        {suggestions.map((suggestion, index) => (
                           <li
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                           >
                              {suggestion.properties.name}
                              {suggestion.properties.city && `, ${suggestion.properties.city}`}
                              {suggestion.properties.country && `, ${suggestion.properties.country}`}
                              {suggestion.place_name}
                           </li>
                        ))}
                     </ul>
                  )}
               </div>

               <p className={`${styles.textShadow} text-white`}>Get a real-world home value estimate in less than 2 minutes.</p>
            </div>

         </header>

         {/* Sticky Navbar */}
         <StickyNavbarComponent setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isSticky={isSticky} />
      </>
   );
}
