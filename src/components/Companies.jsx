import React, { useEffect, useRef } from 'react';
import accel from '../assets/accel.svg'
import cashprop from '../assets/cashprop.svg'
import hector from '../assets/hector.svg'
import limese from '../assets/limese.svg'
import qubit from '../assets/qubit.svg'
const Companies = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = 1; // Scroll speed
    const scrollInterval = 20; // Scroll interval in milliseconds

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        // When reaching the end, reset to the beginning smoothly
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    // Set an interval for auto-scrolling
    const scrollIntervalId = setInterval(autoScroll, scrollInterval);

    // Clean up the interval when component unmounts
    return () => clearInterval(scrollIntervalId);
  }, []);

  return (
    <section className='!bg-yellow-400 h-52 '>
      <div className='flex flex-col items-center justify-center text-center mt-16 sm:mt-24 px-4 space-y-6 sm:space-y-10'>
        <h1 className='text-2xl sm:text-3xl md:text-2xl mt-6 !leading-snug sm:leading-normal font-medium  text-white'>
        Trusted by brands and Engineers at
        </h1>

        {/* Automatic Horizontal Scroll Section */}
        <div
          className="w-full overflow-x-auto mt-12 scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="flex space-x-16 px-2 whitespace-nowrap">
            {/* Duplicate content to create the loop */}
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="min-w-[200px] h-24   flex items-center justify-center">
                  <img className="h-12" src={accel} alt="" />
                </div>
                <div className="min-w-[200px] h-24  flex items-center justify-center">
				<img className="h-12" src={cashprop} alt="" />
                </div>
                <div className="min-w-[200px] h-24  flex items-center justify-center">
				<img className="h-12" src={hector} alt="" />
                </div>
                <div className="min-w-[200px] h-24  rounded-lg flex items-center justify-center">
				<img className="h-12" src={limese} alt="" />
                </div>
                <div className="min-w-[200px] h-24  rounded-lg flex items-center justify-center">
				<img className="h-12" src={qubit} alt="" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
