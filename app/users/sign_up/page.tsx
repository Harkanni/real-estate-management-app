import React from 'react'
import Head from "next/head";
import { IoLogoMicrosoft } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";
import SignupForm from '@/components/SignupForm';


const page = () => {
   return (
      <div>
         <>
            <Head key={'sign-in'}>
               <title>Sign In | HomeLight</title>
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f9fc]">
               {/* Logo */}
               <nav className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50`}>
                  <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4">
                     {/* Logo Section */}
                     <div className="flex items-center gap-2">
                        <IoLogoMicrosoft size={35} color="#273653" className="rounded-full cursor-pointer" />
                        <span className="text-xl font-semibold text-[#273653]">Real Estimate</span>
                     </div>

                  </div>
               </nav>

               {/* Main content */}
               <div className="w-full max-w-xl sm:px-6 px-[0.125rem] mt-16 md:mt-40">
                  <SignupForm />
               </div>
            </div>
         </>
      </div>
   )
}

export default page
