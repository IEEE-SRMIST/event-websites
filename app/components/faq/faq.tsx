import React, { useState } from 'react';
import './anime.css';
import Query from './query';
import Chat from './chat';

const FAQ = () => {
  interface Faq {
    no: number
    question: string;
    answer: string;
  }

  const [faqs, setFaqs] = useState<Faq[]>([
    //add second letter twice for the answer
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
      question: "Will I receive a certificate for participating?",
      answer: "Yees, all participants who attend the event will receive a certificate of participation, which will be emailed to you after the event."
    },
    {
      no: 5,
      question: "Do I need any prior knowledge or experience to attend the E-volve event?",
      answer: "Noo prerequisites are required to attend the E-volve event. The sessions are designed to be beginner-friendly, making them accessible to all students regardless of their background or experience level."
    }
  ]);

  const [chatScreen, setChatScreen] = useState<Faq[]>([]);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleFaqClick = (faq: Faq, index: number) => {
    setExitingIndex(index);
    setTimeout(() => {
      setChatScreen([...chatScreen, faq]);
      setFaqs(faqs.filter((_, i) => i !== index));
      setExitingIndex(null);
    }, 200);
  };

  return (
    <section>
      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-neutral-400">
            Have questions about the E-volve event? I am here to guide you through everything you need to know. Let's explore some common queries!
          </p>
        </div>

        {chatScreen.length === 0 ? null : (<div className="p-4 max-w-xl mx-auto rounded-lg shadow-md">
          <div className="space-y-4">
            {chatScreen.map((chat, index) => (
              <Chat key={index} question={chat.question} answer={chat.answer} />
            ))}
          </div>
        </div>)}

        <div className="flex items-center justify-center h-auto">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
              {faqs.length === 0 ? (
                <div className="flex items-center justify-center col-span-full mt-6">
                  <p className="text-center text-neonCyan">All questions have been answered!</p>
                </div>
              ) : (
                faqs.map((faq, index) => (
                  <Query
                    key={faq.no}
                    question={faq.question}
                    handleClick={() => handleFaqClick(faq, index)}
                    className={index === exitingIndex ? 'shrink' : 'grow'}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
