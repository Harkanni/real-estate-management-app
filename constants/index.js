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
    title: 'Accordion header 1',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ipsa officiis facilis, illum, deleniti ab quaerat id eveniet odio veritatis possimus sapiente voluptatum! Accusamus ab, omnis provident animi repellat quidem sequi adipisci at. Vel dolorem nihil amet soluta suscipit alias ex, aspernatur harum qui laudantium, itaque animi laborum aut quis.`
  },
  {
    title: 'Accordion header 2',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ipsa officiis facilis, illum, deleniti ab quaerat id eveniet odio veritatis possimus sapiente voluptatum! Accusamus ab, omnis provident animi repellat quidem sequi adipisci at. Vel dolorem nihil amet soluta suscipit alias ex, aspernatur harum qui laudantium, itaque animi laborum aut quis.`
  },
  {
    title: 'Accordion header 3',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ipsa officiis facilis, illum, deleniti ab quaerat id eveniet odio veritatis possimus sapiente voluptatum! Accusamus ab, omnis provident animi repellat quidem sequi adipisci at. Vel dolorem nihil amet soluta suscipit alias ex, aspernatur harum qui laudantium, itaque animi laborum aut quis.`
  },
];
