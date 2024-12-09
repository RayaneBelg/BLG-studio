import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close
import Timeline from "./Timeline";
import Services from "./Services";
import logorbb from "../../public/logorbb.png"
import logobrightt from "../../public/logorbbrightt.png"
import { useContext } from 'react'
import { DarkModeContext } from '../components/DarkModeProvider'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoToggle , setInfoToggle] = useState(true);
  const { darkMode } = useContext(DarkModeContext);

  const navLinks = ["Home", "About", "Services", "Contact"]; // Replace with your links
  const handleToggle = ()=>{
    setMenuOpen(!menuOpen)
  }
  const SetInfoTrue = () =>{
    setInfoToggle(true)
  }

  const SetInfoFalse = () =>{
    setInfoToggle(false)
  }

  return (
    <>
   
    <motion.button
   
    
    onClick={handleToggle}

      className="z-40 fixed flex items-center justify-center text-lightText bg-lightBg  dark:bg-lightText dark:text-rose  h-[4vh] p-2 left-[50%] transform translate-x-[-50%]   font-bold uppercase font-teko text-xl  top-0 border-lightText border-2 dark:border-rose border-t-0 dark:hover:border-4 dark:hover:border-t-0 dark:active:border dark:active:border-t-0 transition-all 1s "
    >
      <h1 className="">À propos</h1>

      </motion.button>

      {
        menuOpen && (
          <>

          <div onClick={handleToggle} className="fixed inset-0 z-40 bg-lightText dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 h-dvh w-full">
            <div onClick={(e)=> e.stopPropagation(e)} className="bg-lightBg dark:bg-lightText  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-[65%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 border-lightText dark:border-rose border p-4 gap-4">


            <div className="flex gap-4  justify-center w-full">
                {/* Raised Button */}
                <motion.button
                  onClick={SetInfoTrue}
                  
                  className={`${
                    infoToggle ===true ? 'border-4' : 'border-2 opacity-50'
                  } border-lightText text-lightText dark:border-rose p-2 text-xl uppercase dark:text-rose font-teko font-bold transition all duration-700`}
                
                >
                          <motion.img
       // Ensure animations are tied to the current slide
       src={ darkMode ?  logorbb : logobrightt}
     
      className=" h-[10vh] md:h-[6vh] object-contain "
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
                </motion.button>

                {/* Inset Button */}
                <motion.button
                  onClick={SetInfoFalse}
                  
                  className={`${
                    infoToggle === false ? 'border-4' : 'border-2 opacity-50'
                  } border-lightText text-lightText dark:border-rose p-2 text-xl uppercase dark:text-rose font-teko font-bold transition all duration-700`}
                
                >
                  experiences
                </motion.button>
              </div>
              
            
            <AnimatePresence>
              { infoToggle ? 
          (<motion.div  initial={{opacity :0}}
          animate={{opacity : 1}}
          transition={{duration : 1}} > 
            <Services/>
          
          </motion.div>) : 
          
          (<motion.div initial={{opacity :0}}
          animate={{opacity : 1}}
          transition={{duration : 1}} > 
          
          <Timeline/>
          
          </motion.div>)

          }
          </AnimatePresence>

            </div>
          </div>

         


          </>
        )
      }
    

    </>
  );
};

export default Navbar;
