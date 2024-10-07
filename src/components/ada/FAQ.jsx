import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is AI Workforce?',
      answer: 'AI Workforce is a cutting-edge solution that helps businesses automate repetitive tasks, optimize resources, and reduce operational costs using artificial intelligence.',
    },
    {
      question: 'How does AI Workforce improve productivity?',
      answer: 'By automating routine tasks and providing actionable insights, AI Workforce frees up your team to focus on more strategic activities, thus enhancing overall productivity.',
    },
    {
      question: 'Is the AI solution customizable?',
      answer: 'Yes, AI Workforce can be tailored to suit specific business requirements, ensuring a perfect fit for your organizational needs.',
    },
    {
      question: 'What kind of businesses can use AI Workforce?',
      answer: 'AI Workforce is versatile and can be used by a wide range of industries, from e-commerce and retail to finance and healthcare.',
    },
    {
      question: 'How secure is my data with AI Workforce?',
      answer: 'We prioritize data privacy and security, following industry-standard practices to ensure your data is protected at all times.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-screen flex flex-col items-center justify-start pt-16 px-4">
      <h1 className="text-4xl font-semibold text-white mb-8">Frequently Asked Questions</h1>
      <div className="w-screen px-6 space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none text-white"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="ml-2">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="px-4 pb-4 text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
