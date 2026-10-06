import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './anime.css';
import Query from './Query';
import Chat from './chat';

const FAQ = () => {
  interface FAQ {
    no: number;
    question: string;
    answer: string;
  }

  const [FAQs] = useState<FAQ[]>([
    {
      no: 1,
      question: "How do I register for the E-volve event?",
      answer: "Yoou can register for the E-volve event by clicking the 'Register' button on this website or scanning the provided QR code to access the registration page."
    },
    {
      no: 2,
      question: "Is there a registration fee for E-volve?",
      answer: "Noo, E-volve is a free event for all participants. However, registration is required to secure your spot."
    },
    {
      no: 3,
      question: "What should I bring to the event?",
      answer: "Wee recommend bringing a laptop for the hands-on workshop sessions, along with a notebook and pen for taking notes."
    },
    {
      no: 4,
      question: "Do I need any prior knowledge or experience to attend the E-volve event?",
      answer: "Noo prerequisites are required to attend the E-volve event. The sessions are designed to be beginner-friendly, making them accessible to all students regardless of their background or experience level."
    },
    {
      no: 5,
      question: "Will I receive a certificate for participating?",
      answer: "Yees, all participants who attend the event will receive a certificate of participation, which will be emailed to you after the event."
    },
    {
      no: 6,
      question: "Will I receive OD for participating?",
      answer: "Yees, all participants who attend the event will receive OD for participation, which will be emailed to you after the event."
    }
  ]);

  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);

  const handleFAQClick = (FAQ: FAQ) => {
    setSelectedFAQ(FAQ);
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust this value to control when the animation should trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref}>
      <motion.div
        className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="mx-auto mb-10 items-center justify-center text-center">
          <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
            Have questions about the E-volve event? I am here to guide you through everything you need to know. Let's explore some common queries!
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center h-auto">
          <motion.div
            className="mockup-phone mx-auto"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } },
            }}
          >
            <div className="camera" />
            <div className="display">
              <div
                className="artboard artboard-demo phone-1"
                style={{ backgroundImage: "url('/assets/Img/cyberpunk.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {selectedFAQ ? (
                  <Chat question={selectedFAQ.question} answer={selectedFAQ.answer} key={0} />
                ) : (
                  <div className="bg-gray-800 rounded-xl text-white text-center p-4">Select a question to see the answer.</div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 } },
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
              {FAQs.length === 0 ? (
                <div className="flex items-center justify-center col-span-full mt-6">
                  <p className="text-center text-neonCyan">All questions have been answered!</p>
                </div>
              ) : (
                FAQs.map((FAQ) => (
                  <Query
                    key={FAQ.no}
                    question={FAQ.question}
                    handleClick={() => handleFAQClick(FAQ)}
                  />
                ))
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;