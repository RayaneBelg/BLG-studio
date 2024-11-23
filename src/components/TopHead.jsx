import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"]; // Replace with your links

  return (
    <motion.div 
    initial={{ y: -30, x: "-50%" }} // Add x: "-50%"
    animate={{ y: 0, x: "-50%" }} 
    transition={{delay : 1.5, duration : .8}} 
    
    className=" z-50 fixed flex items-center justify-center text-lightText dark:text-darkText border-t-0 bg-[#F5004F] h-[3vh] w-[10vh] left-[50%] transform translate-x-[-50%] border border-lightText dark:border-lightBg font-bold uppercase font-teko text-xl shadow-md shadow-black dark:shadow-lightBg" >
        <h1 className="">Abo/ut</h1>
    </motion.div>
  );
};

export default Navbar;
