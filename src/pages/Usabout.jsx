import React from 'react'
import { motion } from 'framer-motion'
import { SLIDE } from '../assets/data'
import HorizontalCardScroll from './HorizontalCardScroll'
import Proj from '../components/Proj'
import GridProj from '../components/GridProj'

export default function Usabout() {
    const title = "BLG STUDIO ®"
    const desc = "I'm Rayane , a freelance developer I have been creating web experiences for small to medium business for the past 3 years to help them thrive online"
  

    return (
        <div className='flex items-center flex-col  overflow-hidden  h-screen'>

            {/* Header Section */}
            <div className='flex-col flex  justify-center mt-[5%] md:mt-0  p-2 '>
                <div className='font-serif font-bold uppercase text-[7vw]    flex items-center  overflow-hidden flex-col text-lightText dark:text-darkText'>
                    <div className='flex gap-6 overflow-hidden'>

                  
                      <motion.span 
             
            initial={{ opacity: 0 , y : 200}}
            animate={{ opacity: 1,  y : 0}}
            transition={{ duration :  1 }}
            
        >
           [ blg studioo ©]
        </motion.span>
        
         </div>
        <motion.div 
        initial={{scaleX : 0}}
        animate={{scaleX : 1}}
        transition={{duration:  .5}}
        className='h-[3px] bg-lightText dark:bg-darkText w-[80%] mb-3'></motion.div>
                </div>
                
                <motion.div 

    className='gap-1 font-teko scrollbar-track-slate-500   text-lightText dark:text-darkText font-bold uppercase flex items-end justify-center overflow-hidden flex-wrap'
>
    {desc.split(" ").map((word, idx) => (
        <motion.span 
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
         
            <div className='overflow-hidden flex flex-col my-4'>
                <motion.h1 initial={{ opacity: 0 , y : 200}}
            animate={{ opacity: 1,  y : 0}}
            transition={{ duration :  1 , delay : 1}} className='uppercase font-teko font-bold md:text-5xl text-2xl text-lightText dark:text-darkText'>Projects</motion.h1>
             <motion.div 
        initial={{scaleX : 0}}
        animate={{scaleX : 1}}
        transition={{duration:  .5 , }}
        className='h-[3px] bg-lightText dark:bg-darkText w-[100%]'></motion.div>
            
            </div>

           

            <GridProj/>
            
         

        </div>
    )
}

{/* <div className='font-serif font-bold uppercase text-[8vw] border-2 border-blue-700  md:h-[80%] md:w-[70%] flex md:items-center'>
    {sec.split("").map((word , idx)=>(word))}</div>
<div className='h-[3px] bg-black '></div>
<div className=' gap-2 border-2 border-green-700  md:w-[30%] md:h-[80%]  font-serif font-bold uppercase flex items-center'>{secdesc.split("").map((word , idx)=>(word))}</div>*/}