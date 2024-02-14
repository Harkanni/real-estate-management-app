import { image1, image2 } from '@/assets/';
import { FaCircleCheck } from 'react-icons/fa6';

export const Evaluations = [
  {
    title: 'Answer 7 simple questions',
    details: `Most home value algorithms don’t know the little things that make your home different. That’s where you come in. Pair your answers to a few questions with housing market data from multiple trusted sources and we can predict your home’s current value with far greater accuracy.`,
    buttonTitle: 'Get started',
    imgUrl: image1
  },
  {
    title: 'Detailed analysis and clear next steps',
    details: `Get all the important parts of a comparative market analysis, throw in a list of the top local real estate agents who are proven to sell homes like yours for more money, and back it all up with your home’s Simple Sale™ price -- typically 90-95% of your home’s full market value -- if you’d rather skip the listing process entirely.
   Kick off your home sale armed with the right information.`,
    buttonTitle: 'Get estimate',
    imgUrl: image2
  }
];

export const Comparisons = [
  {
    label: '',
    desc: '',
    calc: 'Online Tools',
    agents: 'Top Agents'
  },
  {
    label: 'Publicly Available Data',
    desc: 'Compile tax records and assessments with other data sources.',
    calc: (
      <FaCircleCheck stroke='black' fill='#c5c8cd' size={25} color='black' />
    ),
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Recent Sales History',
    desc: "Combine the home's last sale price with current market price.",
    calc: (
      <FaCircleCheck stroke='black' fill='#c5c8cd' size={25} color='black' />
    ),
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Comparable Market Analysis',
    desc: 'Look at recent sales records for other properties in the same neighborhood.',
    calc: (
      <FaCircleCheck stroke='black' fill='#c5c8cd' size={25} color='black' />
    ),
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Knowledge of the Area',
    desc: "Nearby schools, trendy restaurants, and the next door neighbor's dog all come into play.",
    calc: '',
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Characteristics & Condition',
    desc: 'A thorough property inspection is done to note any problem or home improvements that may impact the value.',
    calc: '',
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Buyer Preferences',
    desc: 'Agents regularly work with buyers and learn the current housing tastes.',
    calc: '',
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  },
  {
    label: 'Local Market Conditions',
    desc: 'Working in the same neighborhood all year gives agents perspective on local trends.',
    calc: '',
    agents: <FaCircleCheck stroke='black' size={25} color='black' />
  }
];

export const AccordionData = [
  {
    title: `How is a home's value calculated?`,
    desc: [`You can calculate a home’s value through a free online valuation tool, hiring an appraiser, or working with a real estate agent to get a comparative analysis. Free online home value calculators look at transactions in your area and public data to generate an estimate. But, if you’re looking for a more accurate number, you’ll need to work with a real estate professional who will look at your property’s condition, the market trends in your area, and other factors to calculate your home’s worth.`,
    
    `The most common method for determining home value involves an analysis of comparable sales. With this approach, recently sold homes similar to yours in size, age, and condition are identified as “comps,” which serve as a baseline for calculating your own home’s worth. Any differences in your home that would add or subtract value, such as an extra bedroom or aging roof, will factor into the calculation.`,
    
    `There are different ways to gather the data and information necessary for this type of analysis. Online tools will pull from publicly available records, gather real estate transaction data, and ask users to share updates about their property. An algorithm is able to make sense of those numbers instantly, resulting in a real-time valuation.`,
    
    `A real estate agent will be able to go a step further and access comps from their local MLS and even conduct a walkthrough of the property. These steps give them greater insights into the area and the ability to provide you with a comprehensive comparative market analysis (CMA). Appraisers typically work from the Uniform Residential Appraisal Report and will physically measure the interior and exterior of the home in an onsite visit to make sure the public records are accurate.`]
  },
  {
    title: 'What adds value to a home?',
    desc: [`What adds value to your home depends on a variety of factors. Some of these variables are external, like a jobs market that attracts new residents to your area, easy access to trails and parks, or the development of local restaurants and shopping centers nearby.`,

    `A booming economy and market drivers like a low supply of inventory also work in your favor. These influencers have the potential to boost demand for your home and help it sell for more money.`,
    
    `Other factors are within your control. According to our research, improving your curb appeal with basic lawn care and cleanup is the number 1 thing you can do to improve the marketability of your home. You can also invest in larger upgrades that add value (just be sure to check on the ROI) and keep the house in great shape with proper maintenance over time.`,
    
    `Finally, to maximize value, be sure to list your home during the best time to sell for your city and make the effort to clean, declutter, and stage the home to impress.`]
  },
  {
    title: 'How do free home value estimates work?',
    desc: [`Generally speaking, automated valuation models (AVMs) run some combination of county auditor and tax assessor records, user-submitted data, and property listings and sales through a unique algorithm to arrive at a home value estimate. These tools are able to comb through millions of pieces of data almost instantly. With HomeLight’s estimate tool, you can simply input your address, and the software will analyze millions of real estate transactions, collect details about your property with a short questionnaire, and pull in the most important elements of a comparative market analysis to calculate your home’s worth. Keep in mind real estate experts advise using these tools as a starting point rather than the final word.`]
  },
  {
   title: `What is the definition of “home value”?`,
   desc: [`Home value is the amount that buyers are willing to pay for a property, depending on a number of factors, such as the location and condition of the home. Fair market value refers to the price that an average or reasonable buyer would spend on a house when there is no existing relationship with the seller, and no extenuating circumstances endearing the buyer to that particular house.`]
  },
  {
   title: `How often should I check my home's value?`,
   desc: [`It’s a good idea to check up on our home’s value periodically and start owning your home’s history and value online. When the time comes to sell, buyers are going to look up your address and if the internet says your home is worth less than you’re asking for, it could weaken your negotiating position.`,

   `In the weeks and months leading up to listing the property, looking up your home’s value before you sell gives you an idea of how much you can list it for and how your home compares to other listings in the area at that time. You should also check your home’s value when you’re thinking of making major changes to your property, like renovations or your updating property insurance.`]
  },
  {
   title: `What’s next after I receive my estimate?`,
   desc: [`After you receive your estimate, we recommend connecting with a top real estate agent who will conduct a comparative market analysis on your behalf to lock in a pricing strategy. With an estimate in hand, you can also calculate the cost of selling your home and find out the net proceeds of the sale.`]
  },
];
