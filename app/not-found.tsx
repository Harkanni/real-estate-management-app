import React from 'react'
import Head from "next/head";
import Image from 'next/image'
import { hero } from '@/public';
import Link from 'next/link';

const page = () => {
   return (
      <div className="relative w-full h-screen overflow-hidden">
         {/* Blurred background image */}
         <Image
            src={hero}
            alt="Modern house background"
            fill
            className="object-cover blur-sm scale-110"
            priority
         />

         {/* Dark overlay gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />

         {/* Foreground content */}
         <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">404 – Page Not Found</h1>
            <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>

            <Link href="/" className="mt-6 text-blue-400 underline hover:text-blue-200 transition">
               Go back home
            </Link>
         </div>
      </div>
   );

}

export default page
