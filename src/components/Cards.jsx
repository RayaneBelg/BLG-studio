import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { DarkModeContext } from "./DarkModeProvider";

export default function Cards({ infos }) {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { darkMode } = useContext(DarkModeContext);

  // Ferme le modal et réinitialise le slider
  const closeModal = () => {
    setSelected(null);
    setImageIndex(0);
  };

  // Navigation du slider
  const handlePrev = (e) => {
    e.stopPropagation();
    if (infos.slide && infos.slide.length) {
      setImageIndex((prev) =>
        prev === 0 ? infos.slide.length - 1 : prev - 1
      );
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (infos.slide && infos.slide.length) {
      setImageIndex((prev) =>
        prev === infos.slide.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <>
      {/* Carte */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 + infos.id * 0.2 }}
        onClick={() => setSelected(infos)}
        className={`${
          infos.id === 1 || infos.id === 4 || infos.id === 5
            ? "md:col-span-2"
            : "col-span-1"
        } border-violet border text-center shadow-sm shadow-black dark:shadow-violet p-2 flex flex-col bg-lightBg dark:bg-gradient-porto text-white font-teko z-10`}
      >
        <div className="flex justify-center my-1">
          <img
            className="h-[10vh]"
            src={darkMode ? infos.imgdark : infos.img}
            alt={infos.title}
          />
        </div>
        <div className="font-bold uppercase md:text-xl text-[2ch]">
          <h1 className="text-white">
            <span>{infos.id}. </span>
            {infos.desc}
          </h1>
        </div>
      </motion.div>

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
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-lightBg dark:bg-gradient-porto overflow-y-auto shadow-xl text-center shadow-white h-[70vh] md:h-[60vh] w-[90%] md:w-[65%] flex flex-col items-center scrollbar scrollbar-thumb-rose md:scrollbar-track-slate-700 border border-violet z-[99] "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,95,213,0.3)_0%,rgba(12,16,36,0)_70%)] pointer-events-none" />
              <div className="flex flex-col lg:flex-row justify-between items-center w-[95%] h-full">
                {/* Section Slider */}
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2 ">
                  <div className="relative w-full">
                    {infos.slide && infos.slide.length > 0 && (
                      <motion.img
                        key={imageIndex}
                        src={infos.slide[imageIndex]}
                        alt={`Slide ${imageIndex}`}
                        className="w-full h-[45vh] object-contain"
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
                    <div className="flex justify-center gap-14">
                    <motion.button
                      onClick={handlePrev}
                      className="border-4 border-lightText dark:border-rose text-rose p-1"
                    >
                      <BsChevronLeft className="text-2xl md:text-3xl" />
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="border-4 border-lightText dark:border-rose text-rose p-1"
                    >
                      <BsChevronRight className="text-2xl md:text-3xl" />
                    </motion.button>
                  </div>
                  </div>
                </div>

                {/* Section Infos */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col justify-start gap-3 md:gap-5 w-full lg:w-1/2 p-2 lg:h-[50vh] text-left"
                >
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      className="h-[6vh]"
                      src={darkMode ? infos.imgdark : infos.img}
                      alt={infos.title}
                    />
                    <a
                      href={infos.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose"
                    >
                      <HiLink size={30} />
                    </a>
                  </div>
                  <h1 className="text-xl uppercase font-bold text-rose">
                    {infos.desc}
                  </h1>
                  <p className="text-justify text-md text-white">
                    {infos.extend}
                  </p>
                  <div>
                    <span className="text-xl font-bold uppercase text-rose">
                      Technologies:
                    </span>
                    <div className="flex gap-6 mt-2">
                      {infos.stack &&
                        infos.stack.map((Icon, index) => (
                          <Icon key={index} size={45} className="text-white" />
                        ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-xl font-bold uppercase text-rose">
                      Services:
                    </span>
                    <p className="text-md text-white">{infos.service}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
