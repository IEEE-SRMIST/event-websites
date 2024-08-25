import React, { useState, useEffect } from 'react';
import './anime.css';

interface ChatProps {
  key: number;
  question: string;
  answer: string;
}

const Chat: React.FC<ChatProps> = ({ key, question, answer }) => {
  const [showGenerating, setShowGenerating] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {

        const answerTimer = setTimeout(() => {
            setShowGenerating(true);
            setShowAnswer(true);
        }, 400);

        const generatingTimer = setTimeout(() => {
            setShowGenerating(false);
        }, 2000);

        return () => {
            clearTimeout(answerTimer);
            clearTimeout(generatingTimer);
        };
    }, []);

  return (
    <div key={key} className="flex flex-col space-y-2">
      
        <div className='flex flex-row space-x-2 max-w-xs self-end fade-in-right'>
        <div className="flex flex-col items-end space-y-1 max-w-xs">
          <div className="text-xs text-gray-500 mr-4">User</div>
          <div className="bg-[#2f2f2f] text-white text-xs md:text-base font-light p-3 rounded-3xl">
            {question}
          </div>
        </div>
        <img src='/images/characters/user.jpg' alt="Logo" className="w-8 h-8 rounded-full my-3" />
      </div>

      {showAnswer && (
        <div className='flex flex-row space-x-2 max-w-xs self-start fade-in-left'>
          <img src='/images/characters/lucia.jpg' alt="Logo" className="w-8 h-8 rounded-full my-3" />
          <Answer key={key} showGenerating={showGenerating} answer={answer} />
        </div>
      )}

    </div>
  );
}

interface AnswerProps {
    key: number;
    showGenerating: boolean;
    answer: string;
}
  
const Answer: React.FC<AnswerProps> = ({ key, showGenerating, answer }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [completed, setCompleted] = useState(false);
  
    useEffect(() => {
        if (!showGenerating) {
          let currentIndex = 0;
          const intervalId = setInterval(() => {

            if (currentIndex < answer.length - 1) {
              setDisplayedText((prev) => prev + answer[currentIndex]);
              currentIndex++;
            }
            
            else if (currentIndex === answer.length - 1) {
              clearInterval(intervalId);
              setCompleted(true);
            }
          }, 25);
      
          return () => clearInterval(intervalId);
        } else {
          setDisplayedText('');
        }
      }, [showGenerating, answer]);
  
    return (
      <div className="flex flex-col items-start space-y-1 max-w-xs">
        <div className="text-xs text-gray-500 ml-4">Lucia</div>
        <div
          key={key}
          className="answer-content bg-gray-300 text-gray-800 text-sm md:text-base p-3 rounded-3xl my-4"
          style={{ maxHeight: '200px', minWidth: '200px' }}
        >
          {showGenerating 
              ? (<span>⚫</span>)
              : (<div>{displayedText}{!completed ? <span>⚫</span> : null}</div>)
          }
        </div>
      </div>
    );
  };

export default Chat;
