import React from "react";
import { motion } from "framer-motion";

interface QueryProps {
  question: string;
  handleClick: () => void;
}

const Query: React.FC<QueryProps> = ({ question, handleClick }) => {
  return (
    <motion.div
      onClick={handleClick}
      className="flex items-center justify-start p-2 cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="bg-gray-800 text-white p-3 rounded-lg relative"
        style={{ width: '200px', height: '150px' }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute -top-2 left-2 w-0 h-0 border-l-8 border-l-gray-800 border-t-8 border-t-transparent border-r-8 border-r-transparent border-b-8 border-b-transparent"></div>
        <p className="text-sm md:text-base font-normal">{question}</p>
      </motion.div>
    </motion.div>
  );
};

export default Query;