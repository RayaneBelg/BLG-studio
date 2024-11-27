import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);}
  
  

  

  return (
    <motion.div
      initial={{ y: -30, x: "-50%" }} // Initial position for smooth transition
      animate={{ y: 0, x: "-50%" }} 
      whileHover={{
         // Background color change on hover
        scale: 1.1, // Slight scaling effect on hover
        transition: { duration: 0.3 } // Smooth transition for the effect
      }}
      whileTap={{
        scale :0.9,
        transition: { duration: 0.3 }
      }}
      onClick={toggleMenu}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="z-50 fixed flex items-center justify-center text-lightText border-t-0 bg-rose h-[3vh] w-[10vh] left-[50%] transform translate-x-[-50%] border border-lightText dark:border-lightBg font-bold uppercase font-teko text-xl shadow-md shadow-black dark:shadow-lightBg"
    >
      <h1 className="">About</h1>
      {
        menuOpen && (
          <div onClick={toggleMenu} className="fixed inset-0 z-40 bg-DarkBg dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 ">
            <div className=" bg-rose ">
              <div><h1>ABOUT ME</h1></div>
            </div>
          </div>
        )
      }
    </motion.div>
  );
};

export default Navbar;
