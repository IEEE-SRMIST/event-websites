import React from 'react';
import TimelineInfo from './timeline_info';
import Image from "next/image";

const Timeline = () => {

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

  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          
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
                <h3 className="text-brightYellow text-xs font-medium uppercase">Flow of Events</h3>
              </div>

              {TimelineData.map((timeline, index) => {
                return (
                  <TimelineInfo key={index} index={index} title={timeline.title} description={timeline.description} />
                )
              })}

              <div className="flex justify-center mt-8">
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-brightYellow font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={29}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    />
                  </svg>
                  Register Now!
                </a>
              </div>

            </div>

          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default Timeline;
