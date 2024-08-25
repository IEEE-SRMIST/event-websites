import React from 'react';;
import Navbar from '../navbar/navbar';

const Hero: React.FC = () => {
  return (
    <>
      <header
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero-img-1.jpg')" }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36">
          <h1 className="mt-28 mb-8 lg:mb-12 font-sans font-bold text-white text-6xl xl:text-10xl 2xl:text-14xl">
            E-VOLVE
          </h1>
          <p className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl">
            CONCEPTS TO CREATIONS
          </p>
          <p className="mb-8 font-sans font-medium text-cyan-400 text-lg sm:text-2xl">
            A Gen-AI Workshop
          </p>
          <p className="font-sans font-medium text-cyan-400 pb-4 text-lg sm:text-2xl">
            Lucia will assisting you with the informations
          </p>
        </div>
      </header>
    </>
  );
};

export default Hero;