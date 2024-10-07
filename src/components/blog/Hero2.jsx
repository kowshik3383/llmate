import React from 'react';
import blue from '../../assets/blue.svg'; // Importing the image correctly

const Hero2 = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center space-y-7">
      {/* Heading Section */}
      <div className="flex justify-center ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl md:leading-[58px] max-w-4xl w-full font-semibold text-center text-white">
          Get things done faster, smarter, and <br /> cheaper with{' '}
          <span className="text-[#8BBDF8]">AI Workforce</span>
        </h1>
      </div>

      {/* Icons and Text Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-yellow-200 font-semibold">
        {/* Icon 1 */}
        <div className="flex flex-row items-center">
          <img src={blue} alt="Icon" className="w-7 mt-4 h-5 mb-4" />
          <p>Automate Repetitive Tasks</p>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-row items-center">
          <img src={blue} alt="Icon" className="w-7 mt-4 h-5 mb-4" />
          <p>Enhance Productivity</p>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-row items-center">
          <img src={blue} alt="Icon" className="w-7 mt-4 h-5 mb-4" />
          <p>Reduce Operational Costs</p>
        </div>
      </div>

      {/* Second Row of Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-yellow-200 font-semibold">
        {/* Icon 4 */}
        <div className="flex flex-row items-center">
          <img src={blue} alt="Icon" className="w-7 mt-4 h-5 mb-4" />
          <p>Optimize Resources</p>
        </div>

        {/* Icon 5 */}
        <div className="flex flex-row items-center">
          <img src={blue} alt="Icon" className="w-7 mt-4 h-5 mb-4" />
          <p>Streamline Workflows</p>
        </div>
      </div>
	  <button className='bg-yellow-300 text-white rounded-lg px-5 py-1 shadow-lg hover:bg-yellow-400 transition h-9'>Start Free Trail</button>
    </section>
  );
};

export default Hero2;
