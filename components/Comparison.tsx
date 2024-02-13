import { Comparisons } from '@/constants';
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import styles from '@/assets/style.module.css'

const Comparison = () => {
  return (
    <section>
      <ul>
         {
            Comparisons.map((item, index) => {
               return (
                  <li key={index} className='w-[100%]'>
                     <div className={`${styles.keypoint} inline-block w-[70%]`}>
                        <label>{item.label}</label>
                        <p>{item.desc}</p>
                     </div>
                     <div className={`${styles.comparison} inline-block w-[30%]`}>
                        <div className='inline-block w-[50%] text-center'>
                           {item.calc}
                        </div>
                        <div className='inline-block w-[50%] text-center'>
                           {item.agents}
                        </div>
                     </div>
                  </li>
               )
            })
         }
      </ul>
    </section>
  )
}

export default Comparison