"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import components
import Hero from './components/hero/hero';
import About from './components/about/about';
import Speakers from './components/speakers/speakers';
import Timeline from './components/timeline/timeline';
import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  const [isSpeakersGenerated, setIsSpeakersGenerated] = useState(true); // change to false when speaker is updated
  const [isTimelineGenerated, setIsTimelineGenerated] = useState(false);

  const { ref: aboutRef, inView: isAboutVisible } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: speakersRef, inView: isSpeakersVisible } = useInView({ triggerOnce: true, threshold: 0.7 });
  const { ref: timelineRef, inView: isTimelineVisible } = useInView({ triggerOnce: true, threshold: 0.7 });
  const { ref: faqRef, inView: isFaqVisible } = useInView({ triggerOnce: true, threshold: 0.6 });

  // Slide and fade-in animation
  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-black">

      <Head>
        <title>GenAI Workshop | IEEE SRMIST</title>
        <meta
          name="description"
          content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions."
        />
        <meta
          name="keywords"
          content="GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop"
        />
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>

      <Hero />

      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={isAboutVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <About />
      </motion.div>

      {/* change isSpeakersGenerated to false before uncommenting the code */}

      {/* <motion.div
        ref={speakersRef}
        initial="hidden"
        animate={isSpeakersVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <Speakers onGenerationComplete={() => setIsSpeakersGenerated(true)} />
      </motion.div> */}
      
      {isSpeakersGenerated && (
        <motion.div
          ref={timelineRef}
          initial="hidden"
          animate={isTimelineVisible ? "visible" : "hidden"}
          variants={slideInFromBottom}
        >
          <Timeline onGenerationComplete={() => setIsTimelineGenerated(true)} />
        </motion.div>
      )}

      {isTimelineGenerated && (<motion.div
        ref={faqRef}
        initial="hidden"
        animate={isFaqVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <FAQ />
      </motion.div>)}

      <Footer />

    </div>
  );
};

export default HomePage;
