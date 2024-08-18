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
    {
      no: 1,
      question: "What is the purpose of this website?",
      answer: "This website serves as a platform for showcasing our services and providing information to our users.",
    },
    {
      no: 2,
      question: "How can I register for the event?",
      answer: "You can register for the event by clicking on the 'Register' button on the homepage or navigating to the registration page.",
    },
    {
      no: 3,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      no: 4,
      question: "How can I contact customer support?",
      answer: "You can reach out to our customer support team via the 'Contact Us' page or by emailing support@website.com.",
    },
    {
      no: 5,
      question: "Can I cancel my registration?",
      answer: "Yes, you can cancel your registration by contacting our support team within 48 hours of registration.",
    },
  ]);

  const [chatScreen, setChatScreen] = useState<Faq[]>([]);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleFaqClick = (faq: Faq, index: number) => {
    setExitingIndex(index);
    setTimeout(() => {
      setChatScreen([...chatScreen, faq]);
      setFaqs(faqs.filter((_, i) => i !== index));
      setExitingIndex(null);
    }, 500); // Match this duration with your CSS animation duration
  };

  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            What queries do you have?
          </p>
        </div>

        <div className="p-4 max-w-xl mx-auto rounded-lg shadow-md">
          <div className="space-y-4">
            {chatScreen.map((chat, index) => (
              <Chat key={index} question={chat.question} answer={chat.answer} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center h-auto">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
              {faqs.length === 0 ? (
                <div className="flex items-center justify-center mt-6">
                  <p className="text-center text-neonCyan">All questions have been answered!</p>
                </div>
              ) : (
                faqs.map((faq, index) => (
                  <Query
                    key={faq.no}
                    question={faq.question}
                    handleClick={() => handleFaqClick(faq, index)}
                    className={index === exitingIndex ? 'fade-out-left' : 'fade-in-left'}
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
