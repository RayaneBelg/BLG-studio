import React from 'react'
import { motion } from 'framer-motion'
import { SLIDE } from '../assets/data'
import HorizontalCardScroll from './HorizontalCardScroll'
import Proj from '../components/Proj'
import GridProj from '../components/GridProj'
import DarkModeToggle from "../components/DarkModeToggle"
import TopHead from "../components/TopHead"
import GridNeo from '../components/GridNeo'
import logorbb from "../../public/logorbb.png"
import logobrightt from "../../public/logorbbrightt.png"
import { useContext } from 'react'
import { DarkModeContext } from '../components/DarkModeProvider'
export default function Usabout() {
    const title = "BLG STUDIO ®"
    const desc = "Rayane B . développeur freelance et consultant en stratégie digitale "
    const { darkMode } = useContext(DarkModeContext);
  

    return (
        <div className='flex items-center flex-col '>
            
            {/* Header Section */}
            <div className='flex-col flex  justify-center    p-2 overflow-hidden'>
                <div className='font-serif font-bold uppercase text-[7vw]    flex items-center  overflow-hidden flex-col text-lightText dark:text-darkText'>
                    <div className='flex items-center justify-centeroverflow-hidden mt-4 mb-2 md:mt-7 '>

                  
                 

        <motion.img
       // Ensure animations are tied to the current slide
       src={ darkMode ?  logorbb : logobrightt}
     
      className=" h-[10vh] md:h-[15h] object-contain "
      initial={{ opacity: 0,  }} // Slide-in animation
      animate={{ opacity: 1,  }}
      exit={{ opacity: 0,  }}
      transition={{
        type: "spring",   // Use spring animation
        stiffness: 60,   // Controls the "bounciness" of the spring
        damping: 10,      // Reduces the oscillation
        mass: 0.5,        // Affects how heavy the spring feels
        duration: 1.5,    // Ensures the animation finishes in 0.9 seconds
      }}
    />
        
         </div>
        <motion.div 
        initial={{scaleX : 0}}
        animate={{scaleX : 1}}
        transition={{duration:  .5}}
        className='h-[3px] bg-lightText dark:bg-darkText w-[80%] '></motion.div>
                </div>
                
                <motion.div 

    className='gap-1 font-teko scrollbar-track-slate-500   text-lightText dark:text-darkText font-bold uppercase flex items-end justify-center overflow-hidden flex-wrap  p-2 my-2'
>
    
    {desc.split(" ").map((word, idx) => (
        <motion.span className={idx === 3 || idx === 4 ? "text-rose outline-2 ": ""}
            key={idx} 
            initial={{ opacity: 0.1 , }}
            animate={{ opacity: 1, }}
            transition={{ delay: 1 + idx * 0.03 }}
           
        >
            {word}
        </motion.span>
    ))}
</motion.div>

            </div>
         
            <div className='overflow-hidden flex flex-col mb-1 '>
                <motion.h1 initial={{ opacity: 0 , y : 200}}
            animate={{ opacity: 1,  y : 0}}
            transition={{ duration :  1 , delay : 1}} className='uppercase font-teko font-bold md:text-2xl text-xl text-lightText dark:text-darkText'>Work</motion.h1>
             <motion.div 
        initial={{scaleX : 0}}
        animate={{scaleX : 1}}
        transition={{duration:  .5 , }}
        className='h-[3px] bg-lightText dark:bg-darkText w-[100%] mb-2 '></motion.div>
            
            </div>

           

            
           
          <GridProj/>
            
         
            
        </div>
    )
}

{/* <div className='font-serif font-bold uppercase text-[8vw] border-2 border-blue-700  md:h-[80%] md:w-[70%] flex md:items-center'>
    {sec.split("").map((word , idx)=>(word))}</div>
<div className='h-[3px] bg-black '></div>
<div className=' gap-2 border-2 border-green-700  md:w-[30%] md:h-[80%]  font-serif font-bold uppercase flex items-center'>{secdesc.split("").map((word , idx)=>(word))}</div>   
// title 
     <motion.span 
             
            initial={{ opacity: 0 , y : 200}}
            animate={{ opacity: 1,  y : 0}}
            transition={{ duration :  1 }}
            
        >
           [ blg studio ©]
        </motion.span>

*/}