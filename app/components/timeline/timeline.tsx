import React, { useState, useEffect, useRef } from 'react';
import TimelineInfo from './timeline_info';

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
      <div className="gradient-border-container mx-auto max-w-5xl px-4 xl:px-0 py-10 lg:py-20">
        <div className="gradient-border-wrapper">
          <div ref={containerRef} className="gradient-border-content">
            <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Timeline
              </h2>
              <p className="mt-2 text-neutral-400">
                Experience a day of focused learning and hands-on tech exploration. Each session is crafted to empower you with practical skills and insights. Let's dive in!
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="mb-6">
                  <h3 className="text-neonCyan text-sm font-medium uppercase text-center">
                    Flow of Events
                  </h3>
                </div>

                <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
