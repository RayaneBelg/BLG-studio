import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Cards({ infos }) {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 + infos.id * 0.2 }}
      onClick={() => setSelected(infos)}
      className="shadow-md shadow-black p-2 flex flex-col bg-lightBg dark:bg-DarkBg text-lightText dark:text-darkText font-teko"
    >
      {/* Card Content */}
      <div className="flex justify-center">
        <img className="h-[10vh]" src={infos.img} alt={infos.title} />
      </div>
      <div className="font-bold uppercase text-xl">
        <h1>{infos.title}</h1>
      </div>
      <div className="font-bold uppercase text-xl">
        <h1>{infos.service}</h1>
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
              className="bg-lightBg dark:bg-DarkBg p-6  overflow-y-auto shadow-xl text-center opacity-100 shadow-lightText h-[60vh] w-[70%] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling to close modal
            >
              <h1 className="text-xl font-bold">{infos.title}</h1>
              
              <div className="flex md:flex-row flex-col justify-between border-2 w-[90%] md:h-[90%]">
             
              
                        <div className="flex flex-col justify-start md:w-[50%] border-2 ">
                        <img className="" src={infos.phone} alt={infos.title} />
                        </div>
                        
                        <div className="flex flex-col justify-start md:w-[50%] border-2 items-start">
                            <h1>Boutique E-commerce</h1>
                            <p> service : {infos.service}</p>
                            <p> service : {infos.stack}</p>
                            <p className="text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam sunt sed unde distinctio in ipsam praesentium provident nobis, saepe impedit, possimus nulla soluta, ea dolorum non labore. Nisi, quis.</p>
                        
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
