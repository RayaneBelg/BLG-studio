import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Services from "./Services";
import logorbb from "../../public/logorbb.png";
import logobrightt from "../../public/logorbbrightt.png";
import { DarkModeContext } from "../components/DarkModeProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center items-start">
      <motion.button
        onClick={handleToggle}
        className="z-40 flex items-center justify-center text-lightText dark:text-rose p-2 font-bold uppercase font-teko text-xl top-0 border-rose border-2 border-t-0"
      >
        <h1>Services</h1>
      </motion.button>

      {menuOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 z-40 bg-lightText dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 h-dvh w-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-lightBg dark:bg-gradient-porto overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-auto flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 border-lightText dark:border-rose border p-4 gap-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,95,213,0.3)_0%,rgba(12,16,36,0)_70%)] pointer-events-none" />
            <Services />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
