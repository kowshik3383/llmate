import React from "react";
import div1 from "../../assets/div1.svg";
import div2 from "../../assets/div2.svg";

const Div1 = () => {
  return (
    <section className="bg-yellow-400 shadow-2xl rounded-2xl">
      {/* Div 1 */}
      <div className="flex flex-col-reverse md:flex-row md:space-x-20 mt-12 pt-12 px-4 md:px-0">
        {/* Text Section */}
        <div className="text-white mt-6 md:mt-32 md:w-2/5 w-full md:pl-9 !leading-relaxed">
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
        <div className="flex justify-center">
          <img src={div1} alt="Business Conversations" className="w-full max-w-xs md:max-w-none" />
        </div>
      </div>

      {/* Div 2 */}
      <div className="flex flex-col-reverse pb-12 md:flex-row md:space-x-28 mt-12 pt-12 px-4 md:px-0">
        {/* Image Section - First on Small Screens and Left on Large Screens */}
        <div className="flex justify-center md:order-first sm:order-last">
          <img
            src={div2}
            alt="Business Conversations"
            className="w-full max-w-xs md:max-w-none"
          />
        </div>

        {/* Text Section */}
        <div className="text-white mt-6 md:mt-20 md:w-2/5 w-full md:pl-9 !leading-relaxed">
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
    </section>
  );
};

export default Div1;
