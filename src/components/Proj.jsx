import React from 'react'
import { motion } from 'framer-motion'

export default function Proj() {
    const title = "Projects"
    const desc = "Selected Projects"
    const sec = "Projects ®"
    const secdesc = "Selected projects"
  return (
    <div className='flex items-center flex-col   overflow-hidden p-2 w-full'>

    {/* Header Section */}
    <div className='flex w-full flex-col'>
        <div className='  font-bold uppercase text-[5vw]    flex justify-end  overflow-hidden flex-col'>
            <div className='flex gap-8'>

          
            {title.split(" ").map((word, idx) => (   <motion.span 
    key={idx} 
    initial={{ opacity: 0 , y : 200}}
    animate={{ opacity: 1,  y : 0}}
    transition={{ duration :  1 , delay : 2 }}
    className="inline-block"
>
    {word}
</motion.span>))}   </div>
<motion.div 
initial={{scaleX : 0}}
animate={{scaleX : 1}}
transition={{duration:  .5 , delay : 2}}
className='h-[3px] bg-[#F5004F] origin-left w-[30%]'></motion.div>
        </div>
        
        <motion.div 

className='gap-2  md:w-[30%]  font-serif font-bold uppercase flex items-center overflow-hidden flex-wrap'
>
{desc.split(" ").map((word, idx) => (
<motion.span 
    key={idx} 
    initial={{ opacity: 0.1 , }}
    animate={{ opacity: 1, }}
    transition={{ delay: 2 + idx * 0.1 }}
    className="inline-block"
>
    {word}
</motion.span>
))}
</motion.div>

    </div>
    
 

</div>
  )
}
