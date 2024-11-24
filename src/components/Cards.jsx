import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
      className="shadow-md shadow-black p-2 flex flex-col bg-lightBg dark:bg-DarkBg text-lightText dark:text-darkText font-teko "
    >
      {/* Card Content */}
      <div className="flex justify-center">
        <img className="h-[10vh]" src={infos.img} alt={infos.title} />
      </div>
      <div className="font-bold uppercase text-xl">
        <h1>{infos.title}</h1>
      </div>
      <div className="font-bold uppercase text-xl">
        <h1>{infos.desc}</h1>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={closeModal}
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
              className="bg-lightBg dark:bg-DarkBg p-2 overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[70vh] w-[85%] md:w-[70%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700"
              onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling to close modal
            >
              <h1 className="text-xl font-bold">{infos.title}</h1>

              {/* Slider Section */}
              <div className="flex md:flex-row flex-col justify-between  md:items-center border-2 w-[90%] md:h-[90%]">
                {/* Slider */}
                <div className="flex flex-col justify-center items-center md:w-[50%] h-[min-content] relative">
                  <BsChevronLeft
                    size={30}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 dark:text-rose text-lightText cursor-pointer"
                    onClick={handlePrev}
                  />
                  {infos.slide && infos.slide.length > 0 && (
                    <img
                      className="h-[40vh] object-contain"
                      src={infos.slide[imageIndex]}
                      alt={`Slide ${imageIndex}`}
                    />
                  )}
                  <BsChevronRight
                    size={30}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 dark:text-rose text-lightText cursor-pointer"
                    onClick={handleNext}
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-start md:w-[50%] items-start">
                  <h1 className="text-3xl">Fashion Designer Brand</h1>
                  <p>Service: {infos.service}</p>
                  <p>
                    <span className="text-2xl font-bold">Stack</span>:{" "}
                    {infos.stack}
                  </p>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime nam sunt sed unde distinctio in ipsam praesentium
                    provident nobis, saepe impedit, possimus nulla soluta, ea
                    dolorum non labore. Nisi, quis.
                  </p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="mt-4 bg-rose text-white p-2 top-2"
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
