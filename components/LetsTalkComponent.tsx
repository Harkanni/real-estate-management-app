import React from 'react'
import styles from '@/public/style.module.css'
import { image3 } from '@/public'
import Image from 'next/image'

const LetsTalkComponent = () => {
   return (
      <section>
         <div className={`${styles.evalDiv} flex justify-between items-center font-open gap-4 mt-10 px-16 py-5`}>
            <div className={`${styles.evalDesc} flex flex-col gap-6 w-[50%]`}>
               <h1 className={`font-extrabold text-3xl`}>
                  Let’s talk
               </h1>
               <p className='leading-8 font-[400]'>
                  Whenever you’re ready, real estate veterans from all walks of life are on the line to answer your questions, walk you through your options, and help you make more informed decisions about your home.
               </p>
               <a className="link" href="tel:14159425362">Call (415) 942-5362</a>
            </div>

            <div className={`${styles.evalImg} flex w-[50%]`}>
               <Image
                  src={image3}
                  alt=""
                  className='w-[100%]'
               />
            </div>
         </div>
      </section>
   )
}

export default LetsTalkComponent