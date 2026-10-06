import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./anime.css";

interface ChatProps {
  question: string;
  answer: string;
}

const Chat: React.FC<ChatProps> = ({ question, answer }) => {
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
  }, [question, answer]);

  return (
    <div key={question} className="flex flex-col space-y-4 p-4">
      <motion.div
        className="flex flex-row space-x-2 max-w-xs self-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-end space-y-1 max-w-xs">
          <div className="text-xs text-gray-500 mr-4">Me</div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs md:text-base font-light p-4 rounded-xl shadow-lg">
            {question}
          </div>
        </div>
        <img
          src="/assets/Img/User.jpg"
          alt="User"
          className="w-10 h-10 rounded-full my-2"
        />
      </motion.div>

      {showAnswer && (
        <motion.div
          className="flex flex-row space-x-2 max-w-xs self-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/assets/Img/Lucia.png"
            alt="Lucia"
            className="w-10 h-10 rounded-full my-2"
          />
          <Answer showGenerating={showGenerating} answer={answer} />
        </motion.div>
      )}
    </div>
  );
};

interface AnswerProps {
  showGenerating: boolean;
  answer: string;
}

const Answer: React.FC<AnswerProps> = ({ showGenerating, answer }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!showGenerating) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < answer.length - 1) {
          setDisplayedText((prev) => prev + answer[currentIndex]);
          currentIndex++;
        } else if (currentIndex === answer.length - 1) {
          clearInterval(intervalId);
          setCompleted(true);
        }
      }, 25);

      return () => clearInterval(intervalId);
    } else {
      setDisplayedText("");
    }
  }, [showGenerating, answer]);

  return (
    <div className="flex flex-col items-start space-y-1 max-w-xs">
      <div className="text-xs text-gray-500 ml-4">IEEE SRM</div>
      <div
        className="answer-content bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 text-sm md:text-base p-4 rounded-xl shadow-lg"
        style={{ maxHeight: "200px", minWidth: "200px" }}
      >
        {showGenerating ? (
          <span>⚫</span>
        ) : (
          <div>
            {displayedText}
            {!completed ? <span>⚫</span> : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;