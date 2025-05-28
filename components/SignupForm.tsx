'use client'

import { useState } from "react";

export default function SignupForm() {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center sm:px-4 px-4">
         <div className="bg-white shadow-lg rounded-xl p-4 sm:p-8 w-full">
            <h2 className="text-center text-2xl font-bold text-[#273653] mb-6">
               Sign up with Real Estimate
            </h2>

            <form className="space-y-5">
               <div>
                  <label className="block text-sm font-medium text-[#273653] mb-2">First name</label>
                  <input
                     type="text"
                     placeholder="Enter your first name"
                     className="w-full px-5 py-[0.8rem] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B4FF]"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-[#273653] mb-2">Last name</label>
                  <input
                     type="text"
                     placeholder="Enter your last name"
                     className="w-full px-5 py-[0.8rem] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B4FF]"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-[#273653] mb-2">Email</label>
                  <input
                     type="email"
                     placeholder="Enter your email address"
                     className="w-full px-5 py-[0.8rem] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#45B4FF]"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-[#273653] mb-2">Password</label>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-full px-5 py-[0.8rem] border border-gray-200 rounded-md pr-16 focus:outline-none focus:ring-2 focus:ring-[#45B4FF]"
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#45B4FF]"
                     >
                        {showPassword ? "hide" : "show"}
                     </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Password must be 6 characters</p>
               </div>

               <button
                  type="submit"
                  className="w-full bg-[#45B4FF] text-white py-3 font-semibold rounded-md hover:bg-[#32a5f3] transition"
               >
                  Create account
               </button>
            </form>
         </div>
      </div>
   );
}
