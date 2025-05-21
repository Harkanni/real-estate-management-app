import MainComponentWrapper from "@/components/MainComponentWrapper";
import { hero } from '@/public'
import Image from "next/image";
import styles from '@/public/style.module.css'
import { IoLogoMicrosoft } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@mui/material";

import { Evaluations } from '@/constants/index'
import EvaluationComponent from "@/components/EvaluationComponent";
import HomeValueEstimateInfo from "@/components/HomeValueEstimateInfo";
import Comparison from "@/components/Comparison";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import AccordionWrapper from "@/components/AccordionWrapper";
import LetsTalkComponent from "@/components/LetsTalkComponent";
import Testimonials from "@/components/Testimonials";
import TopRealEstateAgents from "@/components/TopRealEstateAgents";
import RealEstateAgentsInMajorCities from "@/components/RealEstateAgentsInMajorCities";
import RealEstateAgentsByState from "@/components/RealEstateAgentsByState";
import HomeForSaleByCity from "@/components/HomeForSaleByCity";
import HomeForSaleByState from "@/components/HomeForSaleByState";
import BuyersAndSellers from "@/components/BuyersAndSellers";
import AgentsAndLenders from "@/components/AgentsAndLenders";
import Company from "@/components/Company";

export default function Home() {
   return (
      <main className="min-h-screen">
         <MainComponentWrapper>
            <header className={`${styles.bgHero} h-[100vh] px-16 py-5`}>
               <nav className="flex justify-between items-center">
                  <div className={`flex gap-3 items-center text-white text-3xl font-sans`}>
                     <IoLogoMicrosoft size={45} color="white" className={`${styles.logo} rounded-[50rem] cursor-pointer`} />
                     <h1 className={`${styles.textShadow}`}>Real Estimate</h1>
                  </div>
                  <div className={`${styles.navList} flex items-center`}>
                     <ul className="flex gap-16 text-white items-center mt-2">
                        <li className={`${styles.textShadow}`}>About us</li>
                        <li className={`${styles.textShadow}`}>For Agents</li>
                        <li className={`${styles.textShadow}`}>Get Estimates</li>
                     </ul>
                  </div>
                  <div className={`${styles.hamburger}`}>
                     <GiHamburgerMenu size={35} color="white" className={`cursor-pointer`} />
                  </div>
               </nav>

               <div className={`${styles.banner} mt-20 w-[51%] h`}>
                  <h1 className={`${styles.textShadow} text-white text-4xl leading-[3rem] font-bold`}>Find out what your home is really worth</h1>
                  <div className={`p-2 pl-5 flex justify-between gap-1 bg-white rounded-lg mt-7 mb-5`}>
                     <input className={`${styles.textInput} flex-1 placeholder:hidden`} type="text" placeholder="Enter your address" />
                     <Button variant="contained" color="primary" className={`${styles.button} bg-black`}>Estimate</Button>
                  </div>
                  <p className={`${styles.textShadow} text-white`}>Get a real-world home value estimate in less than 2 minutes.</p>
               </div>

            </header>
            <div className={`${styles.trademark} text-white text-sm p-3 pl-16 bg-slate-900 w-[100%]`}>
               <p>Introducing Simple SaleTM by HomeLight - Learn more »</p>
            </div>

            <EvaluationComponent />

            <HomeValueEstimateInfo />

            <Comparison />

            {/* <FrequentlyAskedQuestion /> */}

            <AccordionWrapper />

            <LetsTalkComponent />

            <Testimonials />

            <div className="bg-[#273653] p-2 w-full min-h-72 flex flex-col items-center justify-center">
               {/* <h2 className="text-[#fff] font-bold text-4xl">Check your home value in 2 minutes</h2> */}
               {/* <div className={`${styles.banner} mt-20 w-[51%] h`}> */}
               <h1 className={`${styles.textShadow} text-white text-2xl md:text-4xl leading-[3rem] font-bold`}>Check your home value in 2 minutes</h1>
               <div className={`p-2 pl-5 flex justify-between gap-1 bg-white rounded-lg mt-7 mb-5 max-w-[40rem] w-full`}>
                  <input className={`${styles.textInput} flex-1 placeholder:hidden`} type="text" placeholder="Enter your address" />
                  <Button variant="contained" color="primary" className={`${styles.button} bg-black`}>Estimate</Button>
               </div>
               <p className={`${styles.textShadow} text-white hidden sm:block`}>Get a real-world home value estimate in less than 2 minutes.</p>
               {/* </div> */}
            </div>

            <TopRealEstateAgents>
               <RealEstateAgentsInMajorCities />
               <RealEstateAgentsByState />
               <HomeForSaleByCity />
               <HomeForSaleByState />
               <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-5 text-sm text-blue-900">
                  <BuyersAndSellers />
                  <AgentsAndLenders />
                  <Company />
               </section>
            </TopRealEstateAgents>

         </MainComponentWrapper>
      </main>
   );
}
