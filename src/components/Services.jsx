import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  // Variantes du parent (stagger = enchaîner les animations des enfants)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes de chaque bloc (fade-in + léger mouvement)
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premier bloc */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-md border-2 border-[#3FCF8E] bg-[#0C0F1A] p-2"
      >
        <h2 className="text-2xl font-bold text-white mb-2 uppercase">
          Création de Site sur mesure
        </h2>
        <p className="mb-1 text-rose font-semibold">
          E-commerce ou vitrine dans la technologie adaptée à votre projet
        </p>
        <p className="text-sm text-white">
          Wordpress, WooCommerce, Shopify, React js, Next js
        </p>
      </motion.div>

      {/* Deuxième bloc */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-md border-2 border-[#3FCF8E] bg-[#0C0F1A] p-2"
      >
        <h2 className="text-2xl font-bold text-white  mb-2 uppercase">
          Marketing Digital
        </h2>
        <p className="mb-1 text-rose font-semibold">
          Audit global et optimisations de vos performances digitales
        </p>
        <p className="text-sm text-white">
          Référencement Naturel – Campagnes Réseaux sociaux – E-mailing automatisé - Référencement payant
        </p>
      </motion.div>
    </motion.div>
  );
}
