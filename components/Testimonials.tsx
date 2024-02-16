import React from 'react'
import { MdStar } from "react-icons/md";

const Testimonials = () => {
  return (
   <section className={`p-16 my-5`}>
      <h2 className='mb-14 text-center text-4xl font-semibold'>What our clients say</h2>
      <div className={`text-center`}>
         <span className='text-4xl font-thin text-[#18a0f8]' style={{ verticalAlign: 'middle'}}>4.8</span>

         <span className={`inline-flex justify-center items-center mx-1`} >
            { 
               [1, 2, 3,4].map((item, index) => {
                  return (
                     <span key={index} className=''>
                        <MdStar color='#ffa53b' />
                     </span>
                  )
               })
            }
         </span>
         
         <span>Google rating based on over 240+ reviews</span>
      </div>
   </section>
  )
}

export default Testimonials