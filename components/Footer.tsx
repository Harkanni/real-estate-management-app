import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className='px-4 pb-4 w-[100%] flex items-center justify-center flex-col'>
         <div className='w-[95.6%] border-t-2 border-t-slate-500 text-center flex flex-col gap-6 justify-center items-center py-10'>
            <div className='flex gap-6'>
               <FaTwitter size={19} />
               <LiaFacebookF size={19} />
               <FaInstagram size={19} />
               <FaYoutube size={19} />
               <FaPinterestP size={19} />
               <FaRss size={19} />
            </div>
            <p className='md:w-[84%] text-center text-[0.8rem] text-[#8e929c]'>
               Our Commitment to Accessibility: HomeLight is committed to making our website accessible and
               user friendly to all. While we are constantly working to improve, we welcome your feedback and
               accommodation requests. If you are having difficulty accessing or navigating our website, or
               if you have any suggestions to improve accessibility,
               <a href="https://help.homelight.com/contact-us" className='underline hover:text-[#18a0f8] mx-1 text-[#273653]'>please email our team</a>
               or <a href="https://help.homelight.com/contact-us" className='underline hover:text-[#18a0f8] ml-1 text-[#273653]'>contact us</a>
            </p>
            <div className='text-center text-[#8e929c] text-sm flex justify-center flex-wrap gap-3 md:gap-10'>
               <span> &copy; HomeLight, Inc., 1375 N Scottsdale Road, Suite 140, Scottsdale, AZ 85257</span>
               <div className='text-center flex gap-3 justify-center'>
                  <span className='border-r-2'>Terms of Service</span>
                  <span>Privacy Policy (UPDATED 2023)</span>
               </div>
               <a>Do Not Sell or Share My Personal Information</a>
            </div>
         </div>
      </footer>
   )
}

export default Footer
