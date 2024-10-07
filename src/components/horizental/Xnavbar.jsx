import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import use1 from "../../assets/use1.svg";
import use2 from "../../assets/use2.svg";
import use3 from "../../assets/use3.svg";
import use4 from "../../assets/use4.svg";
import use5 from "../../assets/use5.svg";

const Xnavbar = () => {
  const [selectedFeature, setSelectedFeature] = useState("Bot Studio"); // Default to "Bot Studio"

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <button className="flex justify-center text-yellow-200 align-middle items-center mt-12 border border-yellow-200 w-44 h-12 rounded-3xl mx-auto">
        <FaStar color="#848a99" className="!text-yellow-200" />
        <span className="ml-2 text-base tracking-wide">FEATURES</span>
        <FaStar color="#848a99" className="ml-2" />
      </button>

      <h1 className="text-white text-center mt-7 mb-4 font-semibold text-4xl">
        Features of The ADA Platform
      </h1>

      <p className="text-yellow-200 text-lg text-center mb-6 mt-7 leading-relaxed">
        LLMate provides a robust and user-friendly platform to empower your data analysis
        <br />
        journey. Here are some of the key features:
      </p>

      <div className="flex flex-col md:flex-row h-full">
        {/* Navbar */}
        <div className="md:w-1/4 w-full h-full md:h-full p-4">
          <div className="mt-10 border-black md:border-r-2">
            {/* Horizontal scroll on small screens, vertical scroll on larger screens */}
            <div className="overflow-x-auto md:overflow-y-auto md:h-64">
              <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2">
                {[
                  "Bot Studio",
                  "Analyst Assist",
                  "Seamless Integration",
                  "Conversational AI",
                  "Reporting Manager",
                ].map((feature) => (
                  <li
                    key={feature}
                    className={`text-yellow-200 flex-shrink-0 md:flex-shrink cursor-pointer py-2 px-4 transition-all duration-200 ${
                      selectedFeature === feature
                        ? "border-b-2 md:border-b-0 md:border-r-2 border-blue-500 !text-white "
                        : "border-b-2 md:border-b-0 md:border-r-2 border-transparent "
                    }`}
                    onClick={() => handleFeatureClick(feature)}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Component Display Area */}
        <div className="flex-1 pl-4">
          {selectedFeature === "Bot Studio" && (
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
              <img src={use1} alt="Bot Studio" className="w-full md:w-auto" />
              <p className="text-white  tracking-wider md:!mt-32 text-center md:text-left">
                Build custom AI data analysts tailored to your specific needs. No coding experience required!
              </p>
            </div>
          )}
          {selectedFeature === "Analyst Assist" && (
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
              <img src={use2} alt="Analyst Assist" className="w-full md:w-auto" />
              <p className="text-white  tracking-wider md:!mt-32 text-center md:text-left">
                Get assistance in analyzing your data effectively with our Analyst Assist feature.
              </p>
            </div>
          )}
          {selectedFeature === "Seamless Integration" && (
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
              <img src={use3} alt="Seamless Integration" className="w-full md:w-auto" />
              <p className="text-white  tracking-wider md:!mt-32 text-center md:text-left">
                Integrate your existing systems with LLMate effortlessly.
              </p>
            </div>
          )}
          {selectedFeature === "Conversational AI" && (
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
              <img src={use4} alt="Conversational AI" className="w-full md:w-auto" />
              <p className="text-white  tracking-wider md:!mt-32 text-center md:text-left ">
                Enhance user interactions with our conversational AI capabilities.
              </p>
            </div>
          )}
          {selectedFeature === "Reporting Manager" && (
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
              <img src={use5} alt="Reporting Manager" className="w-full md:w-auto" />
              <p className="text-white  tracking-wider md:!mt-32 text-center md:text-left">
                Manage and generate reports easily with our Reporting Manager feature.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Xnavbar;
