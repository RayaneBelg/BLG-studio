import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';


export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <motion.button
   
    initial={{opacity : 0.1}}
    animate={{opacity : 1}}
    transition={{duration : 0.4 }}
      onClick={() => setDarkMode(!darkMode)}
      className=" mt-1 absolute left-[50%] transform translate-x-[-50%] bottom-1 z-30 border rounded-full p-1 border-lightText dark:border-rose"
    >
      {darkMode ? <AnimatePresence> <MdSunny size={40} className='  text-rose  bg-lightText  rounded-full  shadow-[5px_5px_10px_#141a22,_-5px_-5px_10px_#526888] ' /> </AnimatePresence> : 
      <IoMdMoon  size={40} className='text-lightText z-30  shadow-[5px_5px_10px_#717575,-5px_-5px_10px_#ffffff] rounded-full  bg-lightbg'/>
      }
    </motion.button>
  );
}
