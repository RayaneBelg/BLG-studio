import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SideHead from "./components/SideHead"
import Usabout from "./pages/Usabout"
import ScrollableProjects from "./pages/ScrollableProjects"
import HorizontalCardScroll from "./pages/HorizontalCardScroll"
import TopHead from "./components/TopHead"
import DarkMode from "./components/DarkMode"
import { DarkModeProvider } from "./components/DarkModeProvider"
import DarkModeToggle from "./components/DarkModeToggle"
import CardGrid from "./components/CardGrid"
import SlideModal from "./components/SlideModal"
import { useEffect , useState } from "react"
import { motion } from "framer-motion"

function App() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);
  

  return (
   

   <div className="h-dvh overflow-hidden p-2  dark:bg-DarkBg bg-lightBg transition-all duration-700 origin-top cursor-none">

<motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-DarkBg dark:bg-rose rounded-full pointer-events-none z-50"
        style={{
          x: cursorPosition.x,
          y: cursorPosition.y,
        }}
        animate={{
          scale: [1, 1.6, 1], // Subtle pulsing effect
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />


    <DarkModeProvider>
   
   
    <TopHead/>
  
   <Usabout/>

   
   
   
   
  
  
  
   <DarkModeToggle/>
   
   
   
   </DarkModeProvider>

   </div>
  )
}

export default App
