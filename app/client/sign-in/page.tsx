import React from 'react'
import Head from "next/head";
import { IoLogoMicrosoft } from 'react-icons/io5';
import { FcGoogle } from "react-icons/fc";


const page = () => {
   return (
      <div>
         <>
            <Head key={'sign-in'}>
               <title>Sign In | HomeLight</title>
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
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
               <div className="w-full max-w-md px-6 mt-24">
                  <h1 className="text-3xl font-bold text-center text-[#273653]">
                     Sign in with your email
                  </h1>
                  <p className="text-center text-gray-600 mt-4">
                     Enter the email address associated with your account.
                  </p>

                  {/* Email Input */}
                  <div className="mt-6">
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                     />
                  </div>

                  {/* Continue Button */}
                  <button className="w-full mt-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
                     Continue
                  </button>

                  {/* Divider */}
                  <div className="flex items-center my-6">
                     <div className="flex-grow h-px bg-gray-300"></div>
                     <span className="px-4 text-gray-400 text-sm">or</span>
                     <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  {/* Google Sign In */}
                  <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 font-medium text-gray-700 hover:bg-gray-50">
                     <FcGoogle size={24}/> 
                     Sign in with Google
                  </button>

                  {/* Sign Up Prompt */}
                  <div className="text-center text-sm text-gray-600 mt-10 flex justify-evenly items-center">
                     <p>Don’t have an account yet?{" "}</p>
                     <a href="../client/new" className="text-[#46b6ff] font-bold hover:no-underline border-2 border-[#46b6ff] p-3 px-10 rounded-md">
                        Get started
                     </a>
                  </div>
               </div>
            </div>
         </>
      </div>
   )
}

export default page
