import React from 'react'
import SpeakerInfo from './speaker_info'

const Speakers = () => {

  const speakerData = [
    {
      title: 'Market Research and Analysis',
      description: 'Identify your target audience and understand their needs, preferences, and behaviors.',
    },
    {
      title: 'Product Development and Testing',
      description: 'Develop digital products or services that address the needs and preferences of your target audience.',
    },
    {
      title: 'Marketing and Promotion',
      description: 'Develop a comprehensive marketing strategy to promote your digital products or services.',
    },
    {
      title: 'Launch and Optimization',
      description: 'Launch your digital products or services to the market, closely monitoring their performance and user feedback.',
    },
  ];

  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Our Speakers
            </h2>
            <p className="mt-1 text-neutral-400">
              Meet the brilliant minds shaping the future. 
              Our speakers are industry leaders and visionaries who 
              will delve deep into the world of Generative AI. Discover 
              how these groundbreaking technologies are revolutionizing 
              industries, from healthcare and finance to art and entertainment. 
              Gain invaluable insights into the latest advancements, 
              challenges, and opportunities in this rapidly evolving field. 
              Prepare to be inspired as our experts share their expertise and ignite your imagination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Features Image"
              />
            </div>
            
            <div>

              <div className="mb-4">
                <h3 className="text-brightYellow text-xs font-medium uppercase">Speakers</h3>
              </div>

              {speakerData.map((speaker, index) => {
                return (
                  <SpeakerInfo index={index} title={speaker.title} description={speaker.description} />
                )
              })}

              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-brightYellow font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
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
                Register
              </a>
            </div>

          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default Speakers