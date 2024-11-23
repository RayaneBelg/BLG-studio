import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SLIDE } from "../assets/data";

const HorizontalCardScroll = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    
    <div className="h-[65vh] flex items-center justify-center w-full overflow-x-auto">
      {/* Horizontal Scrolling Cards */}
      <div className="relative flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-gray-400 scrollbar-track-gray-200 space-x-8 px-4 h-full items-center p-4 w-full">
        {SLIDE.map((project) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[80%] md:w-[60%] lg:w-[40%] h-[500px] snap-center bg-slate-200 shadow-lg shadow-black border border-black flex flex-col items-center justify-start text-center p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)} // Open modal
          >
            <h1 className="text-2xl text-[#F5004F] font-serif uppercase">
              {project.id}/{SLIDE.length} : {project.title}
            </h1>
            <img className="h-[20vh]" src={project.img} alt={project.title} />
            <h3 className="text-2xl font-bold uppercase font-serif">Services</h3>
            <p className="mt-2 text-gray-600">{project.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close when clicking on the backdrop
          >
            <motion.div
              className="bg-slate-200 rounded-lg shadow-lg p-6 w-[90%] md:w-[50%] h-[80vh] overflow-y-auto"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on content click
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-3xl text-[#F5004F] font-serif uppercase">
                {selectedProject.title}
              </h2>
              <img
                className="w-auto h-48 object-cover mt-4 rounded-lg"
                src={selectedProject.img}
                alt={selectedProject.title}
              />
                 <img
                className="w-auto h-48 object-cover mt-4 rounded-lg"
                src={selectedProject.img}
                alt={selectedProject.title}
              />
                 <img
                className="w-auto h-48 object-cover mt-4 rounded-lg"
                src={selectedProject.img}
                alt={selectedProject.title}
              />
                 <img
                className="w-auto h-48 object-cover mt-4 rounded-lg"
                src={selectedProject.img}
                alt={selectedProject.title}
              />
                 <img
                className="w-auto h-48 object-cover mt-4 rounded-lg"
                src={selectedProject.img}
                alt={selectedProject.title}
              />
              
              <p className="mt-4 text-gray-700">{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HorizontalCardScroll;
