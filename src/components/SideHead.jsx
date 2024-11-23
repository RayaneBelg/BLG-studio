import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import {  motion , AnimatePresence} from 'framer-motion';
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function SideHead() {
const navCont = ["TRaining" , "Coachings" , "About"];
const [toggle, setToggle] = useState(false)




  return (
    <main>

    
    <div className={  ` ${toggle ? "bg-black" : " bg-[#F5004F]"}   fixed right-4 top-2 w-[100px] h-[40px] rounded-full z-20 flex justify-center transition-all duration-500 m-2 shadow-lg shadow-zinc-700`}>
        
    <motion.div
  animate={{ scale: [1, 1.05, 1] } }
  transition={{
    duration: 1.8,
    repeat: Infinity, // Pulse only when toggle is true
    ease: "easeInOut",
  }}
  className="cursor-pointer"
>
 {  toggle ?    <GrClose
  size={35}
  className="text-slate-200"
  onClick={() => setToggle(!toggle)}
/>:
    

<CiMenuFries
    size={40}
    className="text-slate-200"
    onClick={() => setToggle(!toggle)}
  />

  }

</motion.div>

    </div>
    <div className='  rounded-full right-4 top-2 z-10 fixed'>

        
    <AnimatePresence mode="wait">
    {
  toggle && (
  
      <motion.div
        key="menu" // Unique key for AnimatePresence tracking
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0  , opacity : 0}}
        transition={{ duration: 0.4 }}
        className="bg-[#F5004F] h-[40vh] w-[300px] absolute right-0 origin-top rounded-3xl z-10 flex items-center justify-center shadow-lg shadow-black"
      >
        <motion.ul className="text-4xl uppercase font-serif p-4">
          {navCont.map((item, idx) => (
            <Link key={item} to={"/about"}> {/* Ensure unique key for React */}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} // Optional exit animation for list items
                transition={{ delay: 0.4 + 0.3 * idx }}
              >
                {item}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </motion.div>
   
  )
}
</AnimatePresence>

     

     

   
 </div>
 </main>
  )
}
