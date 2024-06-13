import { Collapse } from 'react-collapse'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const AccordionItem = ({ open, toggle, title, desc }:any) => {
   return (
      <div className='border-b-2'>
         <div className='bg-white py-2 flex justify-between items-center cursor-pointer' onClick={toggle}>
            <p className='font-semibold my-3'>{title}</p>
            <div>
               {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
         </div>

         <Collapse isOpened={open} >
            <div className='pb-2'>
               {
                  desc.map((text: string, index:number) => {
                     return (
                        <p key={index} className='mb-4 leading-8'>{text}</p>
                     )
                  })
               }
            </div>
         </Collapse>
      </div>
   )
}

export default AccordionItem