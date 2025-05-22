import {
  image1,
  image2,
  brian_r,
  greg_d,
  kate_g,
  lance_m,
  mark_a,
  william_s
} from '@/public/';
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
    desc: [
      `You can calculate a home’s value through a free online valuation tool, hiring an appraiser, or working with a real estate agent to get a comparative analysis. Free online home value calculators look at transactions in your area and public data to generate an estimate. But, if you’re looking for a more accurate number, you’ll need to work with a real estate professional who will look at your property’s condition, the market trends in your area, and other factors to calculate your home’s worth.`,

      `The most common method for determining home value involves an analysis of comparable sales. With this approach, recently sold homes similar to yours in size, age, and condition are identified as “comps,” which serve as a baseline for calculating your own home’s worth. Any differences in your home that would add or subtract value, such as an extra bedroom or aging roof, will factor into the calculation.`,

      `There are different ways to gather the data and information necessary for this type of analysis. Online tools will pull from publicly available records, gather real estate transaction data, and ask users to share updates about their property. An algorithm is able to make sense of those numbers instantly, resulting in a real-time valuation.`,

      `A real estate agent will be able to go a step further and access comps from their local MLS and even conduct a walkthrough of the property. These steps give them greater insights into the area and the ability to provide you with a comprehensive comparative market analysis (CMA). Appraisers typically work from the Uniform Residential Appraisal Report and will physically measure the interior and exterior of the home in an onsite visit to make sure the public records are accurate.`
    ]
  },
  {
    title: 'What adds value to a home?',
    desc: [
      `What adds value to your home depends on a variety of factors. Some of these variables are external, like a jobs market that attracts new residents to your area, easy access to trails and parks, or the development of local restaurants and shopping centers nearby.`,

      `A booming economy and market drivers like a low supply of inventory also work in your favor. These influencers have the potential to boost demand for your home and help it sell for more money.`,

      `Other factors are within your control. According to our research, improving your curb appeal with basic lawn care and cleanup is the number 1 thing you can do to improve the marketability of your home. You can also invest in larger upgrades that add value (just be sure to check on the ROI) and keep the house in great shape with proper maintenance over time.`,

      `Finally, to maximize value, be sure to list your home during the best time to sell for your city and make the effort to clean, declutter, and stage the home to impress.`
    ]
  },
  {
    title: 'How do free home value estimates work?',
    desc: [
      `Generally speaking, automated valuation models (AVMs) run some combination of county auditor and tax assessor records, user-submitted data, and property listings and sales through a unique algorithm to arrive at a home value estimate. These tools are able to comb through millions of pieces of data almost instantly. With HomeLight’s estimate tool, you can simply input your address, and the software will analyze millions of real estate transactions, collect details about your property with a short questionnaire, and pull in the most important elements of a comparative market analysis to calculate your home’s worth. Keep in mind real estate experts advise using these tools as a starting point rather than the final word.`
    ]
  },
  {
    title: `What is the definition of “home value”?`,
    desc: [
      `Home value is the amount that buyers are willing to pay for a property, depending on a number of factors, such as the location and condition of the home. Fair market value refers to the price that an average or reasonable buyer would spend on a house when there is no existing relationship with the seller, and no extenuating circumstances endearing the buyer to that particular house.`
    ]
  },
  {
    title: `How often should I check my home's value?`,
    desc: [
      `It’s a good idea to check up on our home’s value periodically and start owning your home’s history and value online. When the time comes to sell, buyers are going to look up your address and if the internet says your home is worth less than you’re asking for, it could weaken your negotiating position.`,

      `In the weeks and months leading up to listing the property, looking up your home’s value before you sell gives you an idea of how much you can list it for and how your home compares to other listings in the area at that time. You should also check your home’s value when you’re thinking of making major changes to your property, like renovations or your updating property insurance.`
    ]
  },
  {
    title: `What’s next after I receive my estimate?`,
    desc: [
      `After you receive your estimate, we recommend connecting with a top real estate agent who will conduct a comparative market analysis on your behalf to lock in a pricing strategy. With an estimate in hand, you can also calculate the cost of selling your home and find out the net proceeds of the sale.`
    ]
  }
];

export const testimonials = [
  {
    name: 'Mark A.',
    location: 'San Ramon, CA',
    image: mark_a,
    quote: 'HomeLight staff was polite, friendly and considerate.'
  },
  {
    name: 'Lance M.',
    location: 'Austin, TX',
    image: lance_m,
    quote: 'Very professional and quick service!'
  },
  {
    name: 'William S.',
    location: 'Chicago, IL',
    image: william_s,
    quote: 'I sold my home in days thanks to HomeLight.'
  },
  {
    name: 'Brian R.',
    location: 'San Ramon, CA',
    image: brian_r,
    quote: 'HomeLight staff was polite, friendly and considerate.'
  },
  {
    name: 'Greg D.',
    location: 'Austin, TX',
    image: greg_d,
    quote: 'Very professional and quick service!'
  },
  {
    name: 'Kate G.',
    location: 'Chicago, IL',
    image: kate_g,
    quote: 'I sold my home in days thanks to HomeLight.'
  }
];

export const top_Real_Estate_Agent_In_Major_US_Cities = [
  {
    url: 'https://www.homelight.com/albuquerque-nm/top-real-estate-agents',
    text: 'Albuquerque top real estate agents'
  },
  {
    url: 'https://www.homelight.com/atlanta-ga/top-real-estate-agents',
    text: 'Atlanta top real estate agents'
  },
  {
    url: 'https://www.homelight.com/austin-tx/top-real-estate-agents',
    text: 'Austin top real estate agents'
  },
  {
    url: 'https://www.homelight.com/baltimore-md/top-real-estate-agents',
    text: 'Baltimore top real estate agents'
  },
  {
    url: 'https://www.homelight.com/beverly-hills-ca/top-real-estate-agents',
    text: 'Beverly Hills top real estate agents'
  },
  {
    url: 'https://www.homelight.com/birmingham-al/top-real-estate-agents',
    text: 'Birmingham top real estate agents'
  },
  {
    url: 'https://www.homelight.com/charlotte-nc/top-real-estate-agents',
    text: 'Charlotte top real estate agents'
  },
  {
    url: 'https://www.homelight.com/chattanooga-tn/top-real-estate-agents',
    text: 'Chattanooga top real estate agents'
  },
  {
    url: 'https://www.homelight.com/chicago-il/top-real-estate-agents',
    text: 'Chicago top real estate agents'
  },
  {
    url: 'https://www.homelight.com/cleveland-oh/top-real-estate-agents',
    text: 'Cleveland top real estate agents'
  },
  {
    url: 'https://www.homelight.com/columbus-oh/top-real-estate-agents',
    text: 'Columbus top real estate agents'
  },
  {
    url: 'https://www.homelight.com/dallas-tx/top-real-estate-agents',
    text: 'Dallas top real estate agents'
  },
  {
    url: 'https://www.homelight.com/denver-co/top-real-estate-agents',
    text: 'Denver top real estate agents'
  },
  {
    url: 'https://www.homelight.com/detroit-mi/top-real-estate-agents',
    text: 'Detroit top real estate agents'
  },
  {
    url: 'https://www.homelight.com/fort-lauderdale-fl/top-real-estate-agents',
    text: 'Fort Lauderdale top real estate agents'
  },
  {
    url: 'https://www.homelight.com/fort-wayne-in/top-real-estate-agents',
    text: 'Fort Wayne top real estate agents'
  },
  {
    url: 'https://www.homelight.com/fort-worth-tx/top-real-estate-agents',
    text: 'Fort Worth top real estate agents'
  },
  {
    url: 'https://www.homelight.com/grand-rapids-mi/top-real-estate-agents',
    text: 'Grand Rapids top real estate agents'
  },
  {
    url: 'https://www.homelight.com/greensboro-nc/top-real-estate-agents',
    text: 'Greensboro top real estate agents'
  },
  {
    url: 'https://www.homelight.com/greenville-sc/top-real-estate-agents',
    text: 'Greenville top real estate agents'
  },
  {
    url: 'https://www.homelight.com/houston-tx/top-real-estate-agents',
    text: 'Houston top real estate agents'
  },
  {
    url: 'https://www.homelight.com/indianapolis-in/top-real-estate-agents',
    text: 'Indianapolis top real estate agents'
  },
  {
    url: 'https://www.homelight.com/jacksonville-fl/top-real-estate-agents',
    text: 'Jacksonville top real estate agents'
  },
  {
    url: 'https://www.homelight.com/kansas-city-mo/top-real-estate-agents',
    text: 'Kansas City top real estate agents'
  },
  {
    url: 'https://www.homelight.com/las-vegas-nv/top-real-estate-agents',
    text: 'Las Vegas top real estate agents'
  },
  {
    url: 'https://www.homelight.com/madison-wi/top-real-estate-agents',
    text: 'Madison top real estate agents'
  },
  {
    url: 'https://www.homelight.com/miami-fl/top-real-estate-agents',
    text: 'Miami top real estate agents'
  },
  {
    url: 'https://www.homelight.com/myrtle-beach-sc/top-real-estate-agents',
    text: 'Myrtle Beach top real estate agents'
  },
  {
    url: 'https://www.homelight.com/naples-fl/top-real-estate-agents',
    text: 'Naples top real estate agents'
  },
  {
    url: 'https://www.homelight.com/nashville-tn/top-real-estate-agents',
    text: 'Nashville top real estate agents'
  },
  {
    url: 'https://www.homelight.com/new-orleans-la/top-real-estate-agents',
    text: 'New Orleans top real estate agents'
  },
  {
    url: 'https://www.homelight.com/ocala-fl/top-real-estate-agents',
    text: 'Ocala top real estate agents'
  },
  {
    url: 'https://www.homelight.com/orlando-fl/top-real-estate-agents',
    text: 'Orlando top real estate agents'
  },
  {
    url: 'https://www.homelight.com/palm-beach-fl/top-real-estate-agents',
    text: 'Palm Beach top real estate agents'
  },
  {
    url: 'https://www.homelight.com/phoenix-az/top-real-estate-agents',
    text: 'Phoenix top real estate agents'
  },
  {
    url: 'https://www.homelight.com/port-st-lucie-fl/top-real-estate-agents',
    text: 'Port St. Lucie top real estate agents'
  },
  {
    url: 'https://www.homelight.com/portland-or/top-real-estate-agents',
    text: 'Portland top real estate agents'
  },
  {
    url: 'https://www.homelight.com/raleigh-nc/top-real-estate-agents',
    text: 'Raleigh top real estate agents'
  },
  {
    url: 'https://www.homelight.com/san-antonio-tx/top-real-estate-agents',
    text: 'San Antonio top real estate agents'
  },
  {
    url: 'https://www.homelight.com/san-diego-ca/top-real-estate-agents',
    text: 'San Diego top real estate agents'
  },
  {
    url: 'https://www.homelight.com/sarasota-fl/top-real-estate-agents',
    text: 'Sarasota top real estate agents'
  },
  {
    url: 'https://www.homelight.com/savannah-ga/top-real-estate-agents',
    text: 'Savannah top real estate agents'
  },
  {
    url: 'https://www.homelight.com/scottsdale-az/top-real-estate-agents',
    text: 'Scottsdale top real estate agents'
  },
  {
    url: 'https://www.homelight.com/seattle-wa/top-real-estate-agents',
    text: 'Seattle top real estate agents'
  },
  {
    url: 'https://www.homelight.com/spokane-wa/top-real-estate-agents',
    text: 'Spokane top real estate agents'
  },
  {
    url: 'https://www.homelight.com/st-louis-mo/top-real-estate-agents',
    text: 'St. Louis top real estate agents'
  },
  {
    url: 'https://www.homelight.com/st-petersburg-fl/top-real-estate-agents',
    text: 'St. Petersburg top real estate agents'
  },
  {
    url: 'https://www.homelight.com/tampa-fl/top-real-estate-agents',
    text: 'Tampa top real estate agents'
  },
  {
    url: 'https://www.homelight.com/tucson-az/top-real-estate-agents',
    text: 'Tucson top real estate agents'
  },
  {
    url: 'https://www.homelight.com/vancouver-wa/top-real-estate-agents',
    text: 'Vancouver top real estate agents'
  }
];

export const top_real_estate_agent_by_state = [
  {
    url: 'https://www.homelight.com/states/al',
    text: 'Alabama top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ak',
    text: 'Alaska top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/az',
    text: 'Arizona top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ar',
    text: 'Arkansas top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ca',
    text: 'California top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/co',
    text: 'Colorado top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ct',
    text: 'Connecticut top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/de',
    text: 'Delaware top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/dc',
    text: 'District of Columbia top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/fl',
    text: 'Florida top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ga',
    text: 'Georgia top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/hi',
    text: 'Hawaii top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/id',
    text: 'Idaho top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/il',
    text: 'Illinois top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/in',
    text: 'Indiana top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ia',
    text: 'Iowa top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ks',
    text: 'Kansas top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ky',
    text: 'Kentucky top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/la',
    text: 'Louisiana top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/me',
    text: 'Maine top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/md',
    text: 'Maryland top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ma',
    text: 'Massachusetts top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/mi',
    text: 'Michigan top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/mn',
    text: 'Minnesota top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ms',
    text: 'Mississippi top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/mo',
    text: 'Missouri top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/mt',
    text: 'Montana top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ne',
    text: 'Nebraska top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nv',
    text: 'Nevada top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nh',
    text: 'New Hampshire top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nj',
    text: 'New Jersey top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nm',
    text: 'New Mexico top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ny',
    text: 'New York top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nc',
    text: 'North Carolina top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/nd',
    text: 'North Dakota top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/oh',
    text: 'Ohio top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ok',
    text: 'Oklahoma top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/or',
    text: 'Oregon top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/pa',
    text: 'Pennsylvania top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ri',
    text: 'Rhode Island top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/sc',
    text: 'South Carolina top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/sd',
    text: 'South Dakota top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/tn',
    text: 'Tennessee top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/tx',
    text: 'Texas top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/ut',
    text: 'Utah top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/vt',
    text: 'Vermont top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/va',
    text: 'Virginia top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/wa',
    text: 'Washington top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/wv',
    text: 'West Virginia top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/wi',
    text: 'Wisconsin top real estate agents'
  },
  {
    url: 'https://www.homelight.com/states/wy',
    text: 'Wyoming top real estate agents'
  }
];

export const home_for_sale_by_city = [
  {
    url: 'https://www.homelight.com/albuquerque-nm/homes-for-sale',
    text: 'Albuquerque homes for sale'
  },
  {
    url: 'https://www.homelight.com/atlanta-ga/homes-for-sale',
    text: 'Atlanta homes for sale'
  },
  {
    url: 'https://www.homelight.com/austin-tx/homes-for-sale',
    text: 'Austin homes for sale'
  },
  {
    url: 'https://www.homelight.com/beverly-hills-ca/homes-for-sale',
    text: 'Beverly Hills homes for sale'
  },
  {
    url: 'https://www.homelight.com/birmingham-al/homes-for-sale',
    text: 'Birmingham homes for sale'
  },
  {
    url: 'https://www.homelight.com/charlotte-nc/homes-for-sale',
    text: 'Charlotte homes for sale'
  },
  {
    url: 'https://www.homelight.com/chattanooga-tn/homes-for-sale',
    text: 'Chattanooga homes for sale'
  },
  {
    url: 'https://www.homelight.com/chicago-il/homes-for-sale',
    text: 'Chicago homes for sale'
  },
  {
    url: 'https://www.homelight.com/cleveland-oh/homes-for-sale',
    text: 'Cleveland homes for sale'
  },
  {
    url: 'https://www.homelight.com/columbus-oh/homes-for-sale',
    text: 'Columbus homes for sale'
  },
  {
    url: 'https://www.homelight.com/dallas-tx/homes-for-sale',
    text: 'Dallas homes for sale'
  },
  {
    url: 'https://www.homelight.com/denver-co/homes-for-sale',
    text: 'Denver homes for sale'
  },
  {
    url: 'https://www.homelight.com/detroit-mi/homes-for-sale',
    text: 'Detroit homes for sale'
  },
  {
    url: 'https://www.homelight.com/fort-lauderdale-fl/homes-for-sale',
    text: 'Fort Lauderdale homes for sale'
  },
  {
    url: 'https://www.homelight.com/fort-wayne-in/homes-for-sale',
    text: 'Fort Wayne homes for sale'
  },
  {
    url: 'https://www.homelight.com/fort-worth-tx/homes-for-sale',
    text: 'Fort Worth homes for sale'
  },
  {
    url: 'https://www.homelight.com/grand-rapids-mi/homes-for-sale',
    text: 'Grand Rapids homes for sale'
  },
  {
    url: 'https://www.homelight.com/greensboro-nc/homes-for-sale',
    text: 'Greensboro homes for sale'
  },
  {
    url: 'https://www.homelight.com/greenville-sc/homes-for-sale',
    text: 'Greenville homes for sale'
  },
  {
    url: 'https://www.homelight.com/houston-tx/homes-for-sale',
    text: 'Houston homes for sale'
  },
  {
    url: 'https://www.homelight.com/indianapolis-in/homes-for-sale',
    text: 'Indianapolis homes for sale'
  },
  {
    url: 'https://www.homelight.com/jacksonville-fl/homes-for-sale',
    text: 'Jacksonville homes for sale'
  },
  {
    url: 'https://www.homelight.com/kansas-city-mo/homes-for-sale',
    text: 'Kansas City homes for sale'
  },
  {
    url: 'https://www.homelight.com/las-vegas-nv/homes-for-sale',
    text: 'Las Vegas homes for sale'
  },
  {
    url: 'https://www.homelight.com/madison-wi/homes-for-sale',
    text: 'Madison homes for sale'
  },
  {
    url: 'https://www.homelight.com/miami-fl/homes-for-sale',
    text: 'Miami homes for sale'
  },
  {
    url: 'https://www.homelight.com/myrtle-beach-sc/homes-for-sale',
    text: 'Myrtle Beach homes for sale'
  },
  {
    url: 'https://www.homelight.com/naples-fl/homes-for-sale',
    text: 'Naples homes for sale'
  },
  {
    url: 'https://www.homelight.com/nashville-tn/homes-for-sale',
    text: 'Nashville homes for sale'
  },
  {
    url: 'https://www.homelight.com/new-orleans-la/homes-for-sale',
    text: 'New Orleans homes for sale'
  },
  {
    url: 'https://www.homelight.com/ocala-fl/homes-for-sale',
    text: 'Ocala homes for sale'
  },
  {
    url: 'https://www.homelight.com/orlando-fl/homes-for-sale',
    text: 'Orlando homes for sale'
  },
  {
    url: 'https://www.homelight.com/palm-beach-fl/homes-for-sale',
    text: 'Palm Beach homes for sale'
  },
  {
    url: 'https://www.homelight.com/phoenix-az/homes-for-sale',
    text: 'Phoenix homes for sale'
  },
  {
    url: 'https://www.homelight.com/port-st-lucie-fl/homes-for-sale',
    text: 'Port St. Lucie homes for sale'
  },
  {
    url: 'https://www.homelight.com/portland-or/homes-for-sale',
    text: 'Portland homes for sale'
  },
  {
    url: 'https://www.homelight.com/raleigh-nc/homes-for-sale',
    text: 'Raleigh homes for sale'
  },
  {
    url: 'https://www.homelight.com/san-antonio-tx/homes-for-sale',
    text: 'San Antonio homes for sale'
  },
  {
    url: 'https://www.homelight.com/san-diego-ca/homes-for-sale',
    text: 'San Diego homes for sale'
  },
  {
    url: 'https://www.homelight.com/sarasota-fl/homes-for-sale',
    text: 'Sarasota homes for sale'
  },
  {
    url: 'https://www.homelight.com/savannah-ga/homes-for-sale',
    text: 'Savannah homes for sale'
  },
  {
    url: 'https://www.homelight.com/scottsdale-az/homes-for-sale',
    text: 'Scottsdale homes for sale'
  },
  {
    url: 'https://www.homelight.com/seattle-wa/homes-for-sale',
    text: 'Seattle homes for sale'
  },
  {
    url: 'https://www.homelight.com/spokane-wa/homes-for-sale',
    text: 'Spokane homes for sale'
  },
  {
    url: 'https://www.homelight.com/st-louis-mo/homes-for-sale',
    text: 'St. Louis homes for sale'
  },
  {
    url: 'https://www.homelight.com/st-petersburg-fl/homes-for-sale',
    text: 'St. Petersburg homes for sale'
  },
  {
    url: 'https://www.homelight.com/tampa-fl/homes-for-sale',
    text: 'Tampa homes for sale'
  },
  {
    url: 'https://www.homelight.com/tucson-az/homes-for-sale',
    text: 'Tucson homes for sale'
  },
  {
    url: 'https://www.homelight.com/vancouver-wa/homes-for-sale',
    text: 'Vancouver homes for sale'
  }
];

export const home_For_sale_by_state = [
  {
    url: 'https://www.homelight.com/states/al/homes-for-sale',
    text: 'Alabama homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/az/homes-for-sale',
    text: 'Arizona homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ar/homes-for-sale',
    text: 'Arkansas homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ca/homes-for-sale',
    text: 'California homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/co/homes-for-sale',
    text: 'Colorado homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ct/homes-for-sale',
    text: 'Connecticut homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/fl/homes-for-sale',
    text: 'Florida homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ga/homes-for-sale',
    text: 'Georgia homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/id/homes-for-sale',
    text: 'Idaho homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/il/homes-for-sale',
    text: 'Illinois homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/in/homes-for-sale',
    text: 'Indiana homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ia/homes-for-sale',
    text: 'Iowa homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ks/homes-for-sale',
    text: 'Kansas homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ky/homes-for-sale',
    text: 'Kentucky homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/la/homes-for-sale',
    text: 'Louisiana homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/me/homes-for-sale',
    text: 'Maine homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ma/homes-for-sale',
    text: 'Massachusetts homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/mi/homes-for-sale',
    text: 'Michigan homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/mn/homes-for-sale',
    text: 'Minnesota homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ms/homes-for-sale',
    text: 'Mississippi homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/mo/homes-for-sale',
    text: 'Missouri homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/mt/homes-for-sale',
    text: 'Montana homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ne/homes-for-sale',
    text: 'Nebraska homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nv/homes-for-sale',
    text: 'Nevada homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nh/homes-for-sale',
    text: 'New Hampshire homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nj/homes-for-sale',
    text: 'New Jersey homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nm/homes-for-sale',
    text: 'New Mexico homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ny/homes-for-sale',
    text: 'New York homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nc/homes-for-sale',
    text: 'North Carolina homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/nd/homes-for-sale',
    text: 'North Dakota homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/oh/homes-for-sale',
    text: 'Ohio homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ok/homes-for-sale',
    text: 'Oklahoma homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/or/homes-for-sale',
    text: 'Oregon homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/pa/homes-for-sale',
    text: 'Pennsylvania homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ri/homes-for-sale',
    text: 'Rhode Island homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/sc/homes-for-sale',
    text: 'South Carolina homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/sd/homes-for-sale',
    text: 'South Dakota homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/tn/homes-for-sale',
    text: 'Tennessee homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/tx/homes-for-sale',
    text: 'Texas homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/ut/homes-for-sale',
    text: 'Utah homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/vt/homes-for-sale',
    text: 'Vermont homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/va/homes-for-sale',
    text: 'Virginia homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/wa/homes-for-sale',
    text: 'Washington homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/wv/homes-for-sale',
    text: 'West Virginia homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/wi/homes-for-sale',
    text: 'Wisconsin homes for sale'
  },
  {
    url: 'https://www.homelight.com/states/wy/homes-for-sale',
    text: 'Wyoming homes for sale'
  }
];

export const for_buyers_and_sellers = [
  { url: '', text: "Buyers" },
  { url: '/find-real-estate-agents/buying', text: "Find a Buyer's Agent" },
  { url: '/homes', text: 'Find Homes for Sale' },
  {
    url: '/how-much-house-can-i-afford',
    text: 'Home Affordability Calculator'
  },
  { url: '/down-payment-calculator', text: 'Down Payment Calculator' },
  { url: '/blog/buy/', text: 'Buyer Resource Center' },
  { url: '', text: 'Seller' },
  { url: '/find-real-estate-agents', text: 'Find a Listing Agent' },
  { url: '/buy-before-you-sell', text: 'HomeLight Buy Before You Sell' },
  { url: '/simple', text: 'Simple Sale' },
  { url: '/home-value-estimator', text: 'Home Value Estimator' },
  { url: '/net-proceeds-calculator', text: 'Net Proceeds Calculator' },
  { url: '/blog/', text: 'Seller Resource Center' },
  { url: '/real-estate-agent-commissions', text: 'Commissions Calculator' }
];

export const for_agents_And_lenders = [
  { url: '', text: 'Agents' },
  { url: '/agents', text: 'Sign up to be an agent partner' },
  {
    url: 'https://agent.homelight.com/trade-in-submission',
    text: 'Submit a client'
  },
  { url: '/blog/agents/', text: 'Agent Resource Center' },
  { url: 'https://help.homelight.com', text: 'Agent Help Center' },
  { url: 'http://homelight.com/marketing', text: 'Agent Marketing Toolkit' },
  { url: '', text: 'Lenders' },
  {
    url: 'http://lender.homelight.com/',
    text: 'Sign up to be a Lender partner'
  },
  { url: 'https://equity.homelight.com/bbys/new', text: 'Submit a client' },
  { url: 'https://help.homelight.com/lenders', text: 'Lender Help Center' },
  {
    url: 'http://poweredby.homelight.com/lenders',
    text: 'Lender Marketing Toolkit'
  }
];

export const about_company = [
  { url: '/about-us', text: 'About HomeLight' },
  { url: '/testimonials', text: 'Testimonials' },
  { url: '/careers', text: 'Careers' },
  { url: '/press', text: 'Press' },
  { url: 'https://affiliate.homelight.com', text: 'Affiliate Program' },
  { url: '/ibuyers', text: 'Real Estate Investors' }
];
