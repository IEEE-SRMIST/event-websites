import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <header className="relative w-full h-screen bg-cover bg-center mb-8 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: "url('/assets/Img/hero_section.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full text-center p-4 lg:px-36 relative z-10">
                <motion.h1
                    className="mt-18 mb-8 lg:mb-10 font-sans font-bold text-white text-6xl md:text-8xl xl:text-10xl 2xl:text-[12rem]"
                    initial={{ opacity: 0, y: 100, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    transition={{
                        duration: 2.5,
                        ease: [0.6, -0.05, 0.2, 1.5],
                        delay: 0.5,
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: { duration: 0.3 },
                    }}
                >
                    E-VOLVE
                </motion.h1>
                <motion.p
                    className="mb-2 font-sans font-medium text-white text-lg sm:text-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                >
                    CONCEPTS TO CREATIONS
                </motion.p>
            </div>
            <img
                src="/assets/Img/splash.jpg"
                alt="Splash effect"
                className="splash"
            />
            <img
                src="/assets/Img/planet.jpg"
                alt="Planet effect"
                className="planet"
            />
        </header>
    );
};

export default Hero;