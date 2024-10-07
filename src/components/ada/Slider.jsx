import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "LLMate's AI engine is a revelation, turning endless data streams into instant, actionable answers. It's like having a supercharged assistant at our fingertips, enabling our customers to find what they need without delay. Truly a cornerstone for self-service and rapid query resolution.",
      description: "Founder and CEO",
	  bottom:"Amazon Ads Intelligence provider",
    },
    {
      id: 2,
      title: "Our marketing has never been more efficient. Thanks to LLMate, we've seen a 15% increase in our Amazon ads' ROI and a 50% reduction in reporting time. This platform hasn't just optimized our campaigns; it's transformed our entire approach to digital advertising.",
      description: "Chief Marketing Officer",
	  bottom:"Leading E-commerce Platform"
    },
    {
      id: 3,
      title: "LLMate has redefined customer interaction for our K-Beauty brand, lifting engagement and sales to new heights with a 20% surge in browsing time. Their AI doesn't just understand our needs; it anticipates them, creating a personalized shopping experience like no other.",
      description: "Director of E-commerce",
	  bottom:"Global K-Beauty Brand",
    },
	{
		id: 4,
		title: "Digging through data for insights used to be a chore until LLMate. Now, not only can I find the information I need swiftly, but I also craft outreach emails that stand out. The result? Higher open rates, better engagement, and emails that recipients actually look forward to receiving.",
		description: "Head of Digital Marketing",
		bottom:"Tech Startup",
	  },
	  {
		id: 5,
		title: "LLMate has transformed our customer service, making self-help not just an option but a preference for our users. The AI-powered engine delivers precise, relevant answers, drastically reducing our response times and empowering users like never before.",
		description: "Customer Service Director",
		bottom:"Online Retail Giant",
	  },
	  {
		id: 6,
		title: "With LLMate, our productivity has skyrocketed. Streamlining processes, reducing manual tasks, and providing deep insights, the platform has unlocked new levels of growth and efficiency for our team.",
		description: "Operations Manager",
		bottom:"Fast-Growing SaaS Company",
	  },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 9000); // Slide every 3 seconds

    return () => clearInterval(slideInterval); // Clean up interval on unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="flex flex-row transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[500px] flex items-center justify-center bg-yellow-400"
          >
            <div className="text-center text-white ">
              <h1 className="text-2xl text-white leading-relaxed tracking-wide ">{slide.title}</h1>
              <p className="text-white pt-12 mt-12">{slide.description}</p>
			  <p className="text-yellow-200 mt-5">{slide.bottom}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-2 rounded-full ${
              index === currentSlide ? "bg-yellow-300" : "bg-yellow-100"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Next/Prev Controls */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={() =>
          setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        }
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={() =>
          setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
        }
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
