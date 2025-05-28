import Head from "next/head";
import { IoLogoMicrosoft } from "react-icons/io5";

const page = () => {
   return (
      <>
         <Head>
            <title>Welcome | HomeLight</title>
         </Head>
         <div className="min-h-screen bg-white flex flex-col items-center justify-start">
            {/* Header with logo */}
            <nav className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50`}>
               <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4">
                  {/* Logo Section */}
                  <div className="flex items-center gap-2">
                     <IoLogoMicrosoft size={35} color="#273653" className="rounded-full cursor-pointer" />
                     <span className="text-xl font-semibold text-[#273653]">Real Estimate</span>
                  </div>

               </div>
            </nav>

            {/* Centered content */}
            <main className="flex flex-col items-center mt-40 px-4 text-center w-full">
               <h1 className="text-[1.65rem] md:text-3xl font-bold text-[#273653]">Welcome to Real Estimate!</h1>
               <p className="mt-2 text-gray-600">Let’s get you set up with an account.</p>

               <div className="mt-8 w-full max-w-md flex flex-col gap-4">
                  <button className="bg-[#45B4FF] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#32a5f3] transition">
                     <a href="../find-agent/quiz">I’m looking to buy/sell a home</a>
                  </button>
                  <button className="bg-[#45B4FF] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#32a5f3] transition">
                     <a href="../users/sign_up">I’m a real estate professional</a>
                  </button>
               </div>
            </main>
         </div>
      </>
   );
}

export default page;