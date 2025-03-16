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
    
      className={`${ infos.id  === 1 || infos.id  === 4 || infos.id  === 5 ?   'md:col-span-2 ' : 'col-span-1'} border-violet border  text-center shadow-sm shadow-black dark:shadow-violet p-2 flex flex-col bg-lightBg dark:bg-gradient-porto text-lightText dark:text-darkText font-teko   relative`}
    >
      {/* Card Content */}
      <div className="flex justify-center my-1">
        <img className="h-[10vh] " src={   darkMode ? infos.imgdark : infos.img} alt={infos.title} />
      </div>
   
      <div className="font-bold uppercase md:text-xl text-[2ch]">
        <h1> <span className="dark:text-rose"> {infos.id}. </span>{infos.desc}</h1>
      </div>

      {/* Modal */}
      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
          onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-lightText dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 z-40"
          >
            {/* Glow Effect - Placed only on the modal background */}
            
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-lightBg dark:bg-gradient-porto overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText  h-[70vh] md:h-[60vh] w-[90%] md:w-[65%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 dark:border-rose border border-lightText z-[99]"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,95,213,0.3)_0%,rgba(12,16,36,0)_70%)] pointer-events-none z-[-1]" />
              {/* Slider Section */}
              <div className="flex lg:flex-row flex-col justify-between lg:items-center w-[95%] lg:h-[100%] ">
                {/* Slider */}
                <div className="flex flex-col justify-center items-center lg:w-[50%] h-[min-content] relative overflow-x-hidden order-2">
                  {/* Slide Image */}
                  {infos.slide && infos.slide.length > 0 && (
                    <motion.img
                      key={imageIndex}
                      src={infos.slide[imageIndex]}
                      alt={`Slide ${imageIndex}`}
                      className="h-[45vh] object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 10,
                        mass: 0.5,
                        duration: 1.5,
                      }}
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  <motion.div className="flex dark:text-rose text-lightText cursor-pointer w-[50%] justify-between">
                    <motion.button
                      className="dark:text-rose text-lightText cursor-pointer border-4 border-lightText dark:border-rose p-1"
                      onClick={handlePrev}
                    >
                      <BsChevronLeft className="text-2xl md:text-3xl" />
                    </motion.button>
                    
                    <motion.button
                      className="dark:text-rose text-lightText cursor-pointer border-4 border-lightText dark:border-rose p-1"
                      onClick={handleNext}
                    >
                      <BsChevronRight className="text-2xl md:text-3xl" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Info Section */}
                <motion.div initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.8, delay: 0.8}}
                  className="flex flex-col justify-start gap-3 md:gap-5 lg:w- items-start p-2 lg:h-[50vh]"
                >
               
                  <div className=" flex items-center gap-4">
                  <motion.h1 className="md:text-4xl text-xl uppercase font-extrabold underline-offset-4 underline mt-4 flex gap-2">
                     <img className="h-[6vh]" src={darkMode ? infos.imgdark : infos.img} />
                    <a href={infos.url} target="_blank" rel="noopener noreferrer" className="text-rose">
                      <HiLink  size={30} />
                    </a> 
                  
                    
                  </motion.h1>
                
                  </div>
                  

                  <div className=" flex items-center gap-4">
                  <h1 className="text-xl uppercase font-bold dark:text-rose">{infos.desc} </h1>
                  
                 
                  </div>
                  
                  
                  <div className="flex flex-col items-start my-2 ">
                   
                    <p className="text-justify text-2xl ">{infos.extend}</p>
                  </div>

                  <p className="flex flex-col items-start my-2">
                    <span className="text-2xl font-bold uppercase dark:text-rose">Technologies :</span>
                    <p className="text-justify text-2xl flex gap-6">
                      {infos.stack && infos.stack.map((Icon, index) => (
                        <Icon key={index} size={45} />
                      ))}
                    </p>
                  </p>

                  <p className="flex flex-col gap-2 items-start text-2xl my-2">
                    <span className="text-2xl font-bold uppercase dark:text-rose">Services:</span>
                    {infos.service}
                  </p>

                  <button onClick={closeModal} className="absolute right-2 text-xl md:text-3xl font-extrabold text-rose p-2 top-2 z-50">
                <ImCross />
              </button>
                </motion.div>
              
              </div>

             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
