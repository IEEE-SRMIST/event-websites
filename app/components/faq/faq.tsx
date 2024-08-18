import React, { useState } from 'react'
import Query from './query'
import Chat from './chat'

const FAQ = () => {

  interface Faq {
    question: string;
    answer: string;
  }

  const [faqs, setFaqs] = useState([
    {
      question: "What is the purpose of this website?",
      answer: "This website serves as a platform for showcasing our services and providing information to our users.",
    },
    {
      question: "How can I register for the event?",
      answer: "You can register for the event by clicking on the 'Register' button on the homepage or navigating to the registration page.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach out to our customer support team via the 'Contact Us' page or by emailing support@website.com.",
    },
    {
      question: "Can I cancel my registration?",
      answer: "Yes, you can cancel your registration by contacting our support team within 48 hours of registration.",
    },
  ]);

  const [chatScreen, setChatScreen] = useState<Faq[]>([]);

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
              <Chat index={index} question={chat.question} answer={chat.answer} />
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center h-auto">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
              {faqs.map((faq, index) => {
                return (
                  <Query question={faq.question} answer={faq.answer} handleClick={() => {
                    setChatScreen([...chatScreen, faq]);
                    setFaqs(faqs.filter((_, i) => i !== index));
                  }} />
                )
              })}
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default FAQ