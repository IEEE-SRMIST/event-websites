import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8"
        >
            <div className="flex flex-col overflow-hidden bg-black sm:flex-row md:h-80">
                <div className="flex w-full flex-col items-center text-center sm:w-1/2 lg:w-2/5 sm:text-left sm:items-start">
                    <h2 className="mb-4 mt-4 md:mt-0 font-sans font-bold text-white text-2xl sm:text-4xl">
                        Have more questions?
                    </h2>
                    <p className="mb-4 mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                        Join us for hands-on learning and real-world applications in Generative AI.
                        <br />
                        Contact us at:
                        <a className="text-md text-white" href='mailto:ieee@srmist.edu.in'> ieee@srmist.edu.in</a>
                    </p>
                    <div className="mt-4">
                        <a
                            href="https://registrations.ieeesrmist.com/"
                            className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-neonCyan text-neutral-800 px-4 py-2 transition-transform transform hover:scale-105 focus:scale-105"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
                <div className="order-first h-48 w-full bg-black sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5 rounded-xl lg:rounded-2xl">
                    <img
                        src="/assets/Img/Tiger.jpg"
                        loading="lazy"
                        alt="Register Now"
                        className="h-full w-full object-cover object-center rounded-xl lg:rounded-2xl"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default CTA;