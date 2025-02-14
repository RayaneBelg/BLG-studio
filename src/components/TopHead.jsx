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
    <div className="flex justify-center items-start">
   
    <motion.button
   
    
    onClick={handleToggle}

      className="z-40 flex items-center justify-center text-lightText  dark:text-rose  p-2   font-bold uppercase font-teko text-xl  top-0 border-rose border-2 border-t-0 "
    >
      <h1 className="">Services</h1>

      </motion.button>

      {
        menuOpen && (
          <>

          <div onClick={handleToggle} className="fixed inset-0 z-40 bg-lightText dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 h-dvh w-full">
            
            <div onClick={(e)=> e.stopPropagation(e)} className="bg-lightBg dark:bg-gradient-porto  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-auto flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 border-lightText dark:border-rose border p-4 gap-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,95,213,0.3)_0%,rgba(12,16,36,0)_70%)] pointer-events-none " />
           



            <div className="flex gap-4  justify-center w-full">
                {/* Raised Button */}
              {/* Inset Button */}
              <motion.button
                  onClick={SetInfoTrue}
                  
                  className={`${
                    infoToggle === true ? 'border-4' : 'border-2 opacity-50'
                  } border-lightText text-lightText dark:border-rose p-2 text-xl uppercase dark:text-rose font-teko font-bold transition all duration-700`}
                
                >
                  Services
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
    

    </div>
  );
};

export default Navbar;
