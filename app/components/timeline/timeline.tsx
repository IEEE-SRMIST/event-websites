import React, { useState, useEffect, useRef } from 'react';
import TimelineInfo from './timeline_info';
import Image from "next/image";

const Timeline = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const TimelineData = [
    {
      title: 'Welcome & Orientation',
      description: "Begin your journey with a warm welcome to IEEE SRM SB, where you will discover the perks of membership. We will provide you with essential tips on building a strong professional profile using tools like LinkedIn and GitHub, and introduce you to exciting tech domains like Web Development, Machine Learning, and more."
    },
    {
      title: 'Introduction to GenAI',
      description: 'Dive into the world of Generative AI (GenAI) as we explore its fascinating history and real-world applications. Learn the basics of Machine Learning and get hands-on experience with Python programming, giving you a strong foundation in this cutting-edge field.',
    },
    {
      title: 'Project-Based Learning',
      description: 'Put your new knowledge into practice by working on a project using prebuilt models. Then, challenge yourself with a more advanced project, such as creating an image recognition system. These activities are designed to boost your confidence and skills in applying what you have learned.',
    },
    {
      title: 'Interactive Session & Feedback',
      description: 'Wrap up the day with a fun interactive session to connect with your peers and solidify what you’ve learned. Before you go, share your thoughts and suggestions through a feedback form to help us tailor future events to your needs.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div ref={containerRef} className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Timeline
          </h2>
          <p className="mt-1 text-neutral-400">
            Welcome to a day packed with learning, exploration, and hands-on experience! Whether you’re just starting your journey or looking to deepen your understanding of the latest technologies, this event is designed to inspire and empower you. From foundational insights to practical applications, each session is crafted to equip you with the tools and knowledge you need to thrive in today’s tech landscape. Get ready to dive into the world of Generative AI, tackle exciting projects, and connect with like-minded peers. Let’s make the most of this opportunity to grow, innovate, and shape your future!
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="relative lg:aspect-none">
            <Image 
              src="/images/gentimeline.png" 
              alt="E-volve timeline Image" 
              width={500}
              height={700}
              className="mx-auto mb-8 md:mb-0 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
          </div>
          
          <div>
            <div className="mb-4">
              <h3 className="text-brightYellow text-xs text-neonCyan font-medium uppercase">Flow of Events</h3>
            </div>

            {TimelineData.map((timeline, index) => (
              <TimelineInfo
                key={index}
                index={index}
                title={timeline.title}
                description={timeline.description}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}

          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Timeline;
