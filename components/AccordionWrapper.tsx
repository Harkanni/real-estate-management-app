'use client'


import { AccordionData } from '@/constants'
import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const AccordionWrapper = () => {
   const [open, setOpen] = useState<boolean | any>(false)

   const toggle = (index: any) => {
      if(open === index) {
         return setOpen(null)
      }
      setOpen(index)
   }
   return (
      <section className='p-16 my-5'>
         <h3 className='text-3xl font-extrabold pb-6 border-b-2'>Frequently Asked Questions</h3>
         <div>
            {
               AccordionData.map((accordion, index) => {
                  return (
                     <AccordionItem key={index} open={index === open} toggle={() => toggle(index)} title={accordion.title} desc={accordion.desc} />
                  )
               })
            }
         </div>
      </section>
   )
}

export default AccordionWrapper