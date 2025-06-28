import React, { useState } from 'react';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 rounded-xl my-4 px-4  p-4" >
      <div className="flex justify-between items-center cursor-pointer px-14"  onClick={toggleFaq}>
        <div className="text-normal font-normal">{question}</div>
        <button className="text-xl font-bold  bg-gray-300 rounded-full p-2 px-5  focus:outline-none">
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {isOpen && (
        <p className="p-3 mt-2 text-gray-700 transition-all duration-300 ease-in-out max-w-90">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
