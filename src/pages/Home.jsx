import React, { useState } from 'react'
import Section from './Section'
import { motion } from 'framer-motion'

export default function Home() {
    const [btwn , setBtwn] = useState(false);

    setTimeout(() => {
        setBtwn(true)
    }, 1500);
  return (
    <div>
           <div
      className="h-screen snap-y snap-mandatory overflow-y-scroll"
      style={{ scrollBehavior: 'smooth' }}
        >
                <div className="h-screen bg-slate-300 text-9xl uppercase snap-start flex items-center flex-wrap">

                            <div className=' w-full'>


                                        <motion.div 
                                        initial={{opacity : 0 , y : -70}}
                                        animate={{opacity : 1  , y : 0 , justifyContent: btwn ? "space-between" : "center"}}
                                        transition={{duration : 1}}
                                        className={`flex gap-8 w-full  font-extrabold font-serif uppercase `}>
                                            
                                            <motion.h1 
                                      >
                                        Welcome
                                      </motion.h1>
                                      <motion.h1
                                     
                                      >
                                        TO
                                      </motion.h1></motion.div> 
                                        <div className='flex w-full justify-between font-extrabold font-serif uppercase'> <h1>The</h1> <h1>QUEENDOM</h1></div> 
                
                
                            </div>
            </div>


      <div className="h-screen bg-green-300 text-9xl uppercase snap-start">
        section 2
      </div>

      <div className="h-screen bg-red-300 text-9xl uppercase snap-center">
        section 2
      </div>
        <Section/>
    
    </div>
      
    </div>
  )
}
