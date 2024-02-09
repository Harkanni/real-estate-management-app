import MainComponentWrapper from "@/components/MainComponentWrapper";
import { hero } from '@/assets'
import Image from "next/image";
import styles from '@/assets/style.module.css'
import { IoLogoMicrosoft } from "react-icons/io5";
import { Button } from "@mui/material";

export default function Home() {
   return (
      <main className="min-h-screen">
         <MainComponentWrapper>
            <header className={`${styles.bgHero} min-h-[100vh] min-w-[100vw] px-16 py-5`}>
               <nav className="flex justify-between items-center">
                  <div className={`flex gap-3 items-center text-white text-3xl font-sans`}>
                     <IoLogoMicrosoft size={45} color="white" className={`${styles.logo} rounded-[50rem]`} />
                     <h1 className={`${styles.textShadow}`}>Real Estimate</h1>
                  </div>
                  <div className="navList flex items-center">
                     <ul className="flex gap-20 text-white items-center mt-2">
                        <li className={`${styles.textShadow}`}>About us</li>
                        <li className={`${styles.textShadow}`}>For Agents</li>
                     </ul>
                  </div>
               </nav>

               <div className={`${styles.banner} mt-20 w-[51%] h`}>
                  <h1 className={`${styles.textShadow} text-white text-4xl leading-[3rem] font-bold`}>Find out what your home is really worth</h1>
                  <div className={`p-2 pl-5 flex justify-between gap-1 bg-white rounded-lg mt-7 mb-5`}>
                     <input className={`${styles.textInput} flex-1 placeholder:hidden`} type="text" placeholder="Enter your address" />
                     <Button variant="contained" color="primary" className={`bg-black px-8 py-3`}>Estimate</Button>
                  </div>
                  <p className={`${styles.textShadow} text-white`}>Get a real-world home value estimate in less than 2 minutes.</p>
               </div>
            </header>
         </MainComponentWrapper>
      </main>
   );
}
