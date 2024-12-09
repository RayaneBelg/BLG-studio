import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiWoocommerce } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { DarkModeContext } from "./DarkModeProvider";
import { useContext } from "react";

export default function Cards({ infos }) {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0); // Current index for the slider

  const closeModal = () => {setSelected(null)};
const {darkMode} =useContext(DarkModeContext);
  // Handle slider navigation
  const handlePrev = () => {
    if (infos.slide && infos.slide.length) {
      setImageIndex((prev) => (prev === 0 ? infos.slide.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (infos.slide && infos.slide.length) {
      setImageIndex((prev) => (prev === infos.slide.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 + infos.id * 0.2 }}
      onClick={() => setSelected(infos)}
    
      className={`${ infos.id  === 1 || infos.id  === 4 || infos.id  === 5 ?   'md:col-span-2 ' : 'col-span-1'}  text-center shadow-md shadow-black p-2 flex flex-col bg-lightBg dark:bg-DarkBg text-lightText dark:text-darkText font-teko `}
    >
      {/* Card Content */}
      <div className="flex justify-center my-1">
        <img className="h-[10vh] " src={   darkMode ? infos.imgdark : infos.img} alt={infos.title} />
      </div>
   
      <div className="font-bold uppercase md:text-xl text-[2ch]">
        <h1> <span className="dark:text-rose"> {infos.id}. </span>{infos.desc}</h1>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
          onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-lightText dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 "
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-lightBg dark:bg-DarkBg  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-[65%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 dark:border-rose border border-lightText  "
              onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling to close modal
            >
               
            
              {/* Slider Section */}
              <div className="flex lg:flex-row flex-col justify-between  lg:items-center  w-[95%] lg:h-[100%]  ">
                {/* Slider */}
              {/* Slider Section */}
<div className="flex flex-col justify-center items-center lg:w-[50%] h-[min-content] relative   overflow-x-hidden ">
  {/* Left Arrow */}
 

  {/* Slide Image */}
  {infos.slide && infos.slide.length > 0 && (
    <motion.img
      key={imageIndex} // Ensure animations are tied to the current slide
      src={infos.slide[imageIndex]}
      alt={`Slide ${imageIndex}`}
      className="h-[45vh]  object-contain "
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
  )}

  {/* Right Arrow */}
  <motion.div
    
    
    className=" flex dark:text-rose text-lightText cursor-pointer  w-[50%] justify-between"
    
  >
     <motion.button
    
    
    className=" dark:text-rose text-lightText cursor-pointer border-4 border-lightText dark:border-rose p-1"
    onClick={handlePrev}
  >
    <BsChevronLeft className="text-2xl md:text-3xl" />
  </motion.button>
  <motion.div
    
    
     className=" dark:text-rose text-lightText cursor-pointer border-4  border-lightText dark:border-rose p-1"
    onClick={handleNext}
  >
    <BsChevronRight  className=" text-2xl md:text-3xl" />
  </motion.div>
    
  </motion.div>
</div>


                {/* Info Section */}
                <motion.div  initial={{opacity : 0}}
              animate={{opacity : 1}}
              transition={{duration : .8 , delay : .8}} className="flex flex-col justify-around gap-3 md:gap-5 lg:w-[50%] items-start p-2    lg:h-[50vh]">
                  <motion.h1 
           
              className=" text-4xl uppercase font-extrabold underline-offset-4 underline mt-4 flex gap-2"> {infos.id}. {infos.title}   <a href={infos.url} target="_blank" rel="noopener noreferrer">
              <HiLink color="#8dbe22" size={30} />
            </a> 
              
              <img  className="h-[3vh]" src={   darkMode ? infos.imgdark : infos.img}></img>
              </motion.h1>
                 
                <h1 className="text-2xl uppercase font-bold dark:text-rose">{infos.desc}</h1>


                <div className="flex flex-col items-start">
                <span className="text-2xl font-bold uppercase dark:text-rose"> About :</span>
                <p className=" text-justify text-2xl ">
                   {infos.extend}
                  </p>

                </div>
               

  <p className="flex flex-col items-start">
    <span className="text-lg font-bold uppercase dark:text-rose"> stack :</span>
    <p className=" text-justify text-lg flex gap-6">
  {infos.stack && infos.stack.map((Icon, index) => (
    <Icon key={index} size={45} />
  ))}
  </p>
</p>   
<p className="flex gap-2 items-center text-lg">
    <span className="text-lg font-bold uppercase dark:text-rose"> Services:</span>
{infos.service}
</p> 

                 
                
                </motion.div>

              </div>

              <button
                onClick={closeModal}
                className=" absolute right-2 text-xl  md:text-3xl font-extrabold  text-rose p-2 top-2 "
              >
                <ImCross/>
              </button>
           
            </motion.div>
         
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
