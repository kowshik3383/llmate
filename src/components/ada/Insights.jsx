import React, { useEffect, useRef } from 'react';

const Insights = () => {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  useEffect(() => {
    const scrollStep = 1;
    const scrollInterval = 20;

    const autoScroll = (scrollContainer, direction = 1) => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += direction * scrollStep;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
    };

    const scrollIntervalId1 = setInterval(() => autoScroll(scrollContainerRef1.current), scrollInterval);
    const scrollIntervalId2 = setInterval(() => autoScroll(scrollContainerRef2.current, -1), scrollInterval);

    return () => {
      clearInterval(scrollIntervalId1);
      clearInterval(scrollIntervalId2);
    };
  }, []);

  return (
    <section className=" py-12">
      <div className="flex flex-col items-center text-center px-4 space-y-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Our Partner Companies
        </h1>

        {/* First Auto-Scrolling Section */}
        <div
          className="w-full overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef1}
        >
          <div className="flex space-x-8 px-4 whitespace-nowrap">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-full p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    Our Amazon ads' ROI increased by 15% and reporting time halved, thanks to LLMate's transformative AI.
                  </h1>
                </div>
                <div className="w-full p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    LLMate's AI-enhanced browsing boosted our K-Beauty sales by 20%, redefining customer engagement.
                  </h1>
                </div>
                <div className="w-full p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    LLMate's smart AI drastically cuts response times, making self-service the go-to for our customers.
                  </h1>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Second Auto-Scrolling Section (Opposite Direction) */}
        <div
          className="w-full overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef2}
        >
          <div className="flex space-x-8 px-4 whitespace-nowrap">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="w-full p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    LLMate's smart AI drastically cuts response times, making self-service the go-to for our customers.
                  </h1>
                </div>
                <div className="w-full  p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    LLMate's AI-enhanced browsing boosted our K-Beauty sales by 20%, redefining customer engagement.
                  </h1>
                </div>
                <div className="w-full p-4 bg-yellow-400 rounded-lg flex items-center justify-center text-center text-yellow-200 font-semibold">
                  <h1 className='text-yellow-200'>
                    Our Amazon ads' ROI increased by 15% and reporting time halved, thanks to LLMate's transformative AI.
                  </h1>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
