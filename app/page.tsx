import MainComponentWrapper from "@/components/MainComponentWrapper";
import { hero } from '@/assets'
import Image from "next/image";
import styles from '@/assets/style.module.css'
import { IoLogoMicrosoft } from "react-icons/io5";

export default function Home() {
   return (
      <main className="min-h-screen">
         <MainComponentWrapper>
            <header className={`${styles.bgHero} min-h-[100vh] min-w-[100vw]`}>
               <nav className="flex">
                  <div className="logo">
                     <IoLogoMicrosoft />
                  </div>
                  <div className="navList"></div>
               </nav>
            </header>
         </MainComponentWrapper>
      </main>
   );
}
