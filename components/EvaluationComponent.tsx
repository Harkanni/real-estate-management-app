import React from 'react'
import { Evaluations } from '@/constants'
import Image from 'next/image'

import { Button } from "@mui/material";
import styles from '@/assets/style.module.css'

const EvaluationComponent = () => {
   return (
      <section>
         {
            Evaluations.map((item, index) => {
               return (
                  <div className={`flex gap-4 mt-5 px-16 py-5`}>
                     <div className={`flex flex-col gap-6 w-[50%]`}>
                        <h1>{item.title}</h1>
                        <p>{item.details}</p>
                        <Button variant="contained" color="primary" className={`${styles.button} bg-black`}>Estimate</Button>
                     </div>

                     <div className={`flex w-[50%]`}>
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