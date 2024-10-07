import React from 'react';
import { Link } from 'react-router-dom';

const Hero1 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-24 px-4 space-y-10">
      <h1 className="text-3xl sm:text-4xl md:text-[54px] !leading-tight font-semibold text-white">
        Uncover Hidden Insights and Accelerate <br /> Business Growth
        <br />
        
      </h1>
      <p className="mt-2 max-w-2xl mx-auto text-yellow-200 sm:text-base md:text-xl leading-relaxed">
        Make faster decisions with an LLM designed to cater to your domain, function, and
        audience, while meeting data privacy and  requirements.
      </p>
      <Link
        to="/"
        className="mt-6 bg-yellow-300 rounded-lg h-12 px-6 flex items-center justify-center text-base md:text-lg text-white shadow-xl transition duration-300 hover:bg-yellow-400"
      >
        Start Free Trial
      </Link>
    </div>
  );
};

export default Hero1;
