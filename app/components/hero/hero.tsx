import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-black text-white h-auto flex items-center justify-center py-8 px-8">
      <div className="absolute inset-0 overflow-hidden">

      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-center text-center md:text-left">

      <div className="md:w-1/2 md:pr-8">
          <Image 
            src="/images/hero_image3.jpeg" 
            alt="E-volve Hero Image" 
            width={500}
            height={500}
            className="mx-auto mb-8 md:mb-0 fade-border" 
          />
        </div>

        <div className="md:w-1/2">

          <h1 className="text-5xl text-white mb-0">
            <span className="font-light">E-</span>
            <span className="font-bold">VOLVE</span>
          </h1>
          
          <p className="text-lg font-roboto text-neonCyan mb-4">A Gen-AI Workshop</p>

          <p className="text-lg font-roboto text-lightYellow mb-8">Concepts to Creations</p>
          

          <a 
            href=" " 
            className="bg-brightYellow text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
          >
            Register
          </a>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;
