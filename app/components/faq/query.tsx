import React from "react";
import { FaStar } from 'react-icons/fa';

interface QueryProps {
  question: string;
  handleClick: () => void;
  className?: string;
}

const Query: React.FC<QueryProps> = ({ question, handleClick, className }) => {
  return (
    <div
      onClick={handleClick}
      className={`w-44 h-32 md:w-48 md:h-36 bg-[#212121] hover:bg-[#2f2f2f] rounded-lg relative flex justify-center items-center border border-white hover:border-neonCyan hover:cursor-pointer text-white transition-colors duration-300 ${className}`}
    >
      <div className="absolute top-2 left-2 text-base font-normal m-1">
        {question}
      </div>
      <FaStar className="absolute bottom-2 right-2 text-2xl" />
    </div>
  );
};

export default Query;
