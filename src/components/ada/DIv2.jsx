import React from 'react';
import { FaStar } from 'react-icons/fa6';
import div3 from '../../assets/div3.svg';

const DIv2 = () => {
  return (
    <section className="">
      <div className="flex justify-center mt-12 border border-yellow-200 w-44 h-12 rounded-3xl mx-auto">
        <button className="text-yellow-200 text-center text-2xl flex justify-center items-center">
          <FaStar color='#848a99' className='!text-yellow-200' />
          <span className="ml-2 text-base tracking-wide">BENEFITS</span>
          <FaStar color='#848a99' className='ml-2' />
        </button>
      </div>
      
      {/* Section 1 */}
      <div className="flex flex-col-reverse md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/4 w-full md:pl-9 !leading-relaxed">
          <h1 className="font-medium text-white tracking-wide text-lg sm:text-xl">
            Domain-specific models built for business conversations
          </h1>
          <p className="text-yellow-200 pt-4 md:pt-6 tracking-wider text-base sm:text-lg">
            Business conversations need to meet a higher standard of accuracy,
            context, and relevance. Every response needs to be rooted in facts
            and based on valid, real data sources.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col-reverse sm:flex-col md:flex-row justify-center">
          <img src={div3} alt="Business Conversations" className="w-full mr-7 max-w-xs md:max-w-none" />
        </div>
      </div>

      {/* Section 2 with image at the top on small screens */}
      <div className="flex flex-col md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Image Section */}
        <div className="flex justify-center order-first md:order-none">
          <img src={div3} alt="Business Conversations" className="w-full mr-7 max-w-xs md:max-w-none" />
        </div>

        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/4 w-full md:pl-9 !leading-relaxed">
          <h1 className="font-medium text-white tracking-wide text-lg sm:text-xl">
            Domain-specific models built for business conversations
          </h1>
          <p className="text-yellow-200 pt-4 md:pt-6 tracking-wider text-base sm:text-lg">
            Business conversations need to meet a higher standard of accuracy,
            context, and relevance. Every response needs to be rooted in facts
            and based on valid, real data sources.
          </p>
        </div>
      </div>
	  <div className="flex flex-col-reverse md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/4 w-full md:pl-9 !leading-relaxed">
          <h1 className="font-medium text-white tracking-wide text-lg sm:text-xl">
            Domain-specific models built for business conversations
          </h1>
          <p className="text-yellow-200 pt-4 md:pt-6 tracking-wider text-base sm:text-lg">
            Business conversations need to meet a higher standard of accuracy,
            context, and relevance. Every response needs to be rooted in facts
            and based on valid, real data sources.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col-reverse sm:flex-col md:flex-row justify-center">
          <img src={div3} alt="Business Conversations" className="w-full mr-7 max-w-xs md:max-w-none" />
        </div>
      </div>

      {/* Section 2 with image at the top on small screens */}
      <div className="flex flex-col md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Image Section */}
        <div className="flex justify-center order-first md:order-none">
          <img src={div3} alt="Business Conversations" className="w-full mr-7 max-w-xs md:max-w-none" />
        </div>

        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/4 w-full md:pl-9 !leading-relaxed">
          <h1 className="font-medium text-white tracking-wide text-lg sm:text-xl">
            Domain-specific models built for business conversations
          </h1>
          <p className="text-yellow-200 pt-4 md:pt-6 tracking-wider text-base sm:text-lg">
            Business conversations need to meet a higher standard of accuracy,
            context, and relevance. Every response needs to be rooted in facts
            and based on valid, real data sources.
          </p>
        </div>
      </div>
	  <div className="flex flex-col-reverse md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/4 w-full md:pl-9 !leading-relaxed">
          <h1 className="font-medium text-white tracking-wide text-lg sm:text-xl">
            Domain-specific models built for business conversations
          </h1>
          <p className="text-yellow-200 pt-4 md:pt-6 tracking-wider text-base sm:text-lg">
            Business conversations need to meet a higher standard of accuracy,
            context, and relevance. Every response needs to be rooted in facts
            and based on valid, real data sources.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col-reverse sm:flex-col md:flex-row justify-center">
          <img src={div3} alt="Business Conversations" className="w-full mr-7 max-w-xs md:max-w-none" />
        </div>
      </div>

 
      
	  
	  
    </section>
  );
};

export default DIv2;
