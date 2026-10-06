"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Hero from './components/Hero/Hero';
import EventCountdown from './components/EventCountdown/EventCountdown';
import AboutUs from './components/AboutUs/AboutUs';
import AboutEvent from './components/AboutEvent/AboutEvent';
import EventVideo from './components/EventVideo/EventVideo';
import Speaker from './components/Speaker/Speaker';
import Timeline from './components/Timeline/Timeline';
import EventHighlights from './components/EventHighlights/EventHighlights';
import Mentors from './components/Mentors/Mentors';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {

  const [isSpeakersGenerated, setIsSpeakersGenerated] = useState(false);
  const [isTimelineGenerated, setIsTimelineGenerated] = useState(false);

  const { ref: countdownRef, inView: isCountdownVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: aboutUsRef, inView: isAboutUsVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: aboutEventRef, inView: isAboutEventVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: eventVideoRef, inView: isEventVideoVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: speakerRef, inView: isSpeakerVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: highlightsRef, inView: isHighlightsVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: timelineRef, inView: isTimelineVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: mentorsRef, inView: isMentorsVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: faqRef, inView: isFaqVisible } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: ctaRef, inView: isCtaVisible } = useInView({ triggerOnce: true, threshold: 0.4 });

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const handleSpeakersGenerated = () => {
    setIsSpeakersGenerated(true);
  };

  const handleTimelineGenerated = () => {
    setIsTimelineGenerated(true);
  };

  return (
    <div className="bg-black">
      <Head>
        <title>E-VOLVE | IEEE SRMIST</title>
        <meta
          name="description"
          content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions."
        />
        <meta
          name="keywords"
          content="E-VOLVE, GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Hero />

      <motion.div
        ref={countdownRef}
        initial="hidden"
        animate={isCountdownVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <EventCountdown />
      </motion.div>

      <motion.div
        ref={aboutUsRef}
        initial="hidden"
        animate={isAboutUsVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        ref={aboutEventRef}
        initial="hidden"
        animate={isAboutEventVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <AboutEvent />
      </motion.div>

      <motion.div
        ref={eventVideoRef}
        initial="hidden"
        animate={isEventVideoVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <EventVideo />
      </motion.div>

      <motion.div
        ref={speakerRef}
        initial="hidden"
        animate={isSpeakerVisible ? "visible" : "hidden"}
        variants={slideInFromBottom}
      >
        <Speaker onGenerationComplete={handleSpeakersGenerated} />
      </motion.div>

      {isSpeakersGenerated && (
        <>
          <motion.div
            ref={highlightsRef}
            initial="hidden"
            animate={isHighlightsVisible ? "visible" : "hidden"}
            variants={slideInFromBottom}
          >
            <Timeline onGenerationComplete={handleTimelineGenerated} />
          </motion.div>
        </>
      )}

      {isTimelineGenerated && (
        <>
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={isTimelineVisible ? "visible" : "hidden"}
            variants={slideInFromBottom}
          >
            <EventHighlights />
          </motion.div>

          <motion.div
            ref={mentorsRef}
            initial="hidden"
            animate={isMentorsVisible ? "visible" : "hidden"}
            variants={slideInFromBottom}
          >
            <Mentors />
          </motion.div>

          <motion.div
            ref={faqRef}
            initial="hidden"
            animate={isFaqVisible ? "visible" : "hidden"}
            variants={slideInFromBottom}
          >
            <FAQ />
          </motion.div>

          <motion.div
            ref={ctaRef}
            initial="hidden"
            animate={isCtaVisible ? "visible" : "hidden"}
            variants={slideInFromBottom}
          >
            <CTA />
          </motion.div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
