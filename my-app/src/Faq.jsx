import React, { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 rounded-xl my-3 p-4 transition-all duration-300">
      {/* Question Row */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <div className="text-base sm:text-lg font-normal">{question}</div>
        <button className="text-xl font-bold bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {/* Answer Content */}
      {isOpen && (
        <p className="mt-3 text-gray-700 text-sm sm:text-base transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;

