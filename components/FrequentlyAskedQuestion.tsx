'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { FaArrowDownLong } from "react-icons/fa6";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
   AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import { FaLongArrowAltRight } from 'react-icons/fa';


const AccordionSummary = styled((props: AccordionSummaryProps) => (
   <MuiAccordionSummary
      expandIcon={<FaArrowDownLong size={'0.9rem'} />}
      {...props}
   />
))(({ theme }) => ({
   backgroundColor:
      theme.palette.mode === 'dark'
         ? 'rgba(255, 255, 255, .05)'
         : 'rgba(0, 0, 0, .03)',
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FrequentlyAskedQuestion() {
   // const [expanded, setExpanded] = React.useState(false);

   // const handleExpansion = () => {
   //    setExpanded((prevExpanded) => !prevExpanded);
   // };
   // const handleChange =
   //    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
   //       setExpanded(newExpanded ? panel : false);
   //    };

   return (
      <section className='p-16 my-10'>
         <h3 className='text-3xl font-extrabold mb-6'>Frequently Asked Questions</h3>
         <div>
            <Accordion
               // disableGutters={true}


               // expanded={expanded}
               // onChange={handleExpansion}
               slots={{ transition: Fade as AccordionSlots['transition'] }}
               slotProps={{ transition: { timeout: 400 } }}
            // sx={{
            //    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            //    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
            // }}
            >
               <AccordionSummary
                  expandIcon={<FaLongArrowAltRight />}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  <Typography>Custom transition using Fade</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion
               // disableGutters={true}


               // expanded={expanded}
               // onChange={handleExpansion}
               slots={{ transition: Fade as AccordionSlots['transition'] }}
               slotProps={{ transition: { timeout: 400 } }}
            // sx={{
            //    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            //    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
            // }}
            >
               <AccordionSummary
                  expandIcon={<FaLongArrowAltRight />}
                  aria-controls="panel2-content"
                  id="panel2-header"
               >
                  <Typography>Custom transition using Fade</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
               </AccordionDetails>
            </Accordion>

            <Accordion
               // disableGutters={true}


               // expanded={expanded}
               // onChange={handleExpansion}
               slots={{ transition: Fade as AccordionSlots['transition'] }}
               slotProps={{ transition: { timeout: 400 } }}
            // sx={{
            //    '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            //    '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
            // }}
            >
               <AccordionSummary
                  expandIcon={<FaLongArrowAltRight />}
                  aria-controls="panel3-content"
                  id="panel3-header"
               >
                  <Typography>Custom transition using Fade</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                     malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
               </AccordionDetails>
            </Accordion>




            <div>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<FaArrowDownLong />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<FaArrowDownLong />}
                     aria-controls="panel2-content"
                     id="panel2-header"
                  >
                     <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion disabled>
                  <AccordionSummary
                     expandIcon={<FaArrowDownLong />}
                     aria-controls="panel3-content"
                     id="panel3-header"
                  >
                     <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
               </Accordion>
            </div>


         </div>


      </section>
   );
}
