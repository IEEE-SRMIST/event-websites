import React from 'react';;
import Navbar from '../navbar/navbar';

const Hero: React.FC = () => {
  return (
    <>
      <header
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_section.jpg')" }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36">
          <h1 className="mt-28 mb-8 lg:mb-10 font-sans font-bold text-white text-6xl md:text-8xl xl:text-10xl 2xl:text-[12rem]">
            E-VOLVE
          </h1>
          <p className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl">
            CONCEPTS TO CREATIONS
          </p>
          <p className="mb-8 font-sans font-medium text-cyan-400 text-lg sm:text-2xl">
            A Gen-AI Workshop
          </p>
          <p className="font-sans font-medium text-cyan-400 mb-4 text-lg sm:text-2xl">
            Lucia will assisting you with the informations
          </p>
        </div>
      </header>
    </>
  );
};

export default Hero;