import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiWoocommerce } from "react-icons/si";


export default function Cards({ infos }) {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0); // Current index for the slider

  const closeModal = () => setSelected(null);

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
    
      className={`${ infos.id % 3 === 0 ?   'col-span-2 ' : 'col-span-1'}  text-center shadow-md shadow-black p-2 flex flex-col bg-lightBg dark:bg-DarkBg text-lightText dark:text-darkText font-teko  `}
    >
      {/* Card Content */}
      <div className="flex justify-center my-1">
        <img className="h-[10vh] " src={infos.img} alt={infos.title} />
      </div>
   
      <div className="font-bold uppercase md:text-xl text-[2ch]">
        <h1> <span className="dark:text-rose"> {infos.id}. </span>{infos.desc}</h1>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
          onClick={(e) => {
            console.log("Modal background clicked");
            e.closeModal();
          }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-DarkBg dark:bg-lightBg flex items-center justify-center bg-opacity-50 dark:bg-opacity-50"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-lightBg dark:bg-DarkBg  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] md:h-[60vh] w-[90%] md:w-[55%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700"
              onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling to close modal
            >
            
              {/* Slider Section */}
              <div className="flex md:flex-row flex-col justify-between  md:items-center  w-[95%] md:h-[90%]  ">
                {/* Slider */}
              {/* Slider Section */}
<div className="flex flex-col justify-center items-center md:w-[50%] h-[min-content] relative  md:h-[100%] overflow-x-hidden">
  {/* Left Arrow */}
  <motion.div
    whileHover={{ scale: 1.3 }} // Hover effect
    transition={{ type: "spring", stiffness: 300 }}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 dark:text-rose text-lightText cursor-pointer"
    onClick={handlePrev}
  >
    <BsChevronLeft size={30} />
  </motion.div>

  {/* Slide Image */}
  {infos.slide && infos.slide.length > 0 && (
    <motion.img
      key={imageIndex} // Ensure animations are tied to the current slide
      src={infos.slide[imageIndex]}
      alt={`Slide ${imageIndex}`}
      className="h-[40vh]  object-contain "
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
    whileHover={{ scale: 1.3 }} // Hover effect
    transition={{ type: "spring", stiffness: 100 }}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 dark:text-rose text-lightText cursor-pointer"
    onClick={handleNext}
  >
    <BsChevronRight size={30} />
  </motion.div>
</div>


                {/* Info Section */}
                <motion.div  initial={{opacity : 0}}
              animate={{opacity : 1}}
              transition={{duration : .8 , delay : .8}} className="flex flex-col justify-center gap-3 md:gap-5 md:w-[50%] items-start  md:h-[100%]">
                  <motion.h1 
           
              className="md:text-3xl text-3xl uppercase font-extrabold underline-offset-4 underline mt-4">{infos.title}</motion.h1>
                 
                <h1 className="text-2xl uppercase font-bold ">{infos.desc}</h1>
                <p className=" text-lg text-justify font-bold">
                   {infos.extend}
                  </p>

  <p className="flex gap-2">
  {infos.stack && infos.stack.map((Icon, index) => (
    <Icon key={index} size={45} />
  ))}
</p>   
                 
                
                </motion.div>
              </div>

              <button
                onClick={closeModal}
                className=" absolute right-2  text-3xl font-extrabold  text-rose p-2 top-2 "
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
