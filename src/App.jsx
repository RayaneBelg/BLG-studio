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

function App() {
  

  return (
   

   <div className="h-screen overflow-hidden p-2  dark:bg-DarkBg bg-lightBg">

   


    <DarkModeProvider>
   
   
    
  
   <Usabout/>

   
   
   
   
  
  
  
   <DarkModeToggle/>
   
   
   
   </DarkModeProvider>

   </div>
  )
}

export default App
