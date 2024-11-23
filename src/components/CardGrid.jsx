import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: `This is the detailed content for Card ${i + 1}. Explore more about this amazing card!`,
  }));

  return (
    <div className="relative h-screen">
      {/* Card Grid */}
      <div className="grid grid-cols-4 gap-6 p-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setSelectedCard(card)}
            className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`card-${selectedCard.id}`}
              className="fixed inset-0 z-20 flex items-center justify-center"
            >
              <motion.div
                className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-8 rounded-xl shadow-2xl relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedCard.title}
                </h2>
                <p className="text-gray-600">{selectedCard.content}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardGrid;
