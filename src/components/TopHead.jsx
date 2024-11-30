import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"]; // Replace with your links
  const handleToggle = ()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <>
   
    <motion.div
    onClick={handleToggle}

      className="z-50 fixed flex items-center justify-center text-lightText  bg-rose h-[3vh] w-[10vh] left-[50%] transform translate-x-[-50%] border border-lightText dark:border-lightBg font-bold uppercase font-teko text-xl shadow-md shadow-black dark:shadow-lightBg top-0"
    >
      <h1 className="">About</h1>

      </motion.div>

      {
        menuOpen && (
          <div onClick={handleToggle} className="fixed inset-0 z-40 bg-DarkBg dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 h-dvh w-full">
            <div className="bg-lightBg dark:bg-DarkBg  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-[55%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 border-rose border">



              About Me 
              <p className="font-teko text-lightText dark:text-darkText text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto natus quo tempore esse! Sunt earum dignissimos minima accusamus fugit et, temporibus explicabo magni aut enim quasi commodi! Aliquam, saepe.</p>
            </div>
          </div>
        )
      }
    

    </>
  );
};

export default Navbar;
