import React from 'react'
import { Evaluations } from '@/constants'
import Image from 'next/image'

import { Button } from "@mui/material";
import styles from '@/public/style.module.css'

const EvaluationComponent = () => {
   return (
      <section>
         {
            Evaluations.map((item, index) => {
               return (
                  <div key={index} className={` ${styles.evalDiv}  ${index+1 >=2 ? 'flex flex-row-reverse' : 'flex'} justify-between font-open gap-4 mb-10 md:mt-10 px-[1.4rem] md:px-16 py-5`}>
                     <div className={`${styles.evalDesc} flex flex-col gap-6 w-[50%]`}>
                        <h1 className={`font-extrabold text-3xl`}>{item.title}</h1>
                        <p className='leading-8 font-[400]'>{item.details}</p>
                        <Button variant="contained" color="primary" className={`${styles.EVbutton} bg-black w-[70px] px-[50rem]`}>Estimate</Button>
                     </div>

                     <div className={`${styles.evalImg} flex w-[50%]`}>
                        <Image
                           src={item.imgUrl}
                           alt=""
                           className='w-[100%]'
                        />
                     </div>
                  </div>
               )
            })
         }
      </section>
   )
}

export default EvaluationComponent