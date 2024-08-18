import React from 'react'

const Chat = ({index, question, answer}: {index:number; question:string; answer:string;}) => {
  return (
    <div key={index} className="flex flex-col space-y-2">

        <div className='flex flex-row space-x-2 max-w-xs self-end'>
            <div className="bg-[#2f2f2f] text-white text-base font-light p-3 rounded-3xl my-2">
                {question}
            </div>
            <img src='/images/hero_image.png' alt="Logo" className="w-8 h-8 rounded-full my-3" />
        </div>

        <div className='flex flex-row space-x-2 max-w-xs self-start'>
            <img src='/images/hero_image.png' alt="Logo" className="w-8 h-8 rounded-full my-3" />
            <div className="bg-gray-300 text-gray-800 p-3 rounded-3xl my-4">
                {answer}
            </div>
        </div>

    </div>
  )
}

export default Chat