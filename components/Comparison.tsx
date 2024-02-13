import { Comparisons } from '@/constants';
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import styles from '@/assets/style.module.css'

const Comparison = () => {
  return (
    <section className='p-16'>
      <ul>
         {
            Comparisons.map((item, index) => {
               return (
                  <li key={index} className='w-[100%] border-b-2 py-3'>
                     <div className={`${styles.keypoint} inline-block w-[70%] leading-8`} style={{verticalAlign: 'middle'}}>
                        <label className='font-black'>{item.label}</label>
                        <p className='text-[0.85rem]'>{item.desc}</p>
                     </div>
                     <div className={`${styles.comparison} inline-block w-[30%]`}>
                        <div className='inline-flex justify-center items-center w-[50%] text-center' style={{verticalAlign: 'middle'}}>
                           {item.calc}
                        </div>
                        <div className='inline-flex justify-center items-center w-[50%] text-center' style={{verticalAlign: 'middle'}}>
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