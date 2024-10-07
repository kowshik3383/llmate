import React from 'react';

const Get = () => {
  return (
    <section className='  w-screen mx-auto mt-32 rounded-2xl bg-[#8BBDF8] px-4 py-6 md:py-10 space-y-8'>
      {/* Header */}
      <h1 className='text-2xl md:text-3xl font-bold text-center text-black'>
        Start Making Smarter Decisions Today
      </h1>
      
      {/* Description */}
      <p className='text-sm md:text-base font-normal max-w-3xl w-full mx-auto text-center text-[#141414] leading-relaxed'>
        ADA is your one-stop solution for streamlined data analysis and insightful reporting. Experience the power <br className="hidden md:block" /> 
        of AI-driven data intelligence and transform your decision-making process.
      </p>
      
      {/* Button */}
      <div className="flex justify-center">
        <button className='px-6 py-3 text-xs md:text-sm font-medium bg-[#295ef4] rounded-lg text-white'>
          Get started with a free trial today!
        </button>
      </div>
    </section>
  );
}

export default Get;
