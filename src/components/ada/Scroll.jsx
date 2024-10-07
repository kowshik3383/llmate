import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import use1 from "../../assets/use1.svg";
import use2 from "../../assets/use2.svg"; 

const Scroll = () => {
  const [selectedCategory, setSelectedCategory] = useState("By Function"); // Default to "By Function"
  const [selectedFeature, setSelectedFeature] = useState("Bot Studio"); // Default to "Bot Studio"

  const featuresByCategory = {
    "By Function": [
      "Bot Studio",
      "Analyst Assist",
      "Seamless Integration",
      "Conversational AI",
      "Reporting Manager",
    ],
    "By Industry": [
      "Healthcare",
      "Finance",
      "Retail",
      "Education",
      "Technology",
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Set the first feature as default when changing the category
    if (category === "By Function") {
      setSelectedFeature("Bot Studio");
    } else if (category === "By Industry") {
      setSelectedFeature("Healthcare"); // Set default for "By Industry"
    }
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      {/* Button for Features */}
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

      {/* Navbar */}
      <div className="w-full p-4">
        <div className="mt-10">
          {/* Horizontal scroll on small screens */}
          <div className="overflow-x-auto md:overflow-y-auto">
            <ul className="flex justify-center  md:justify-center space-x-4 md:space-x-0 px-2 md:px-0">
              {["By Function", "By Industry"].map((category) => (
                <li
                  key={category}
                  className={`text-yellow-200 cursor-pointer px-4 transition-all duration-200 ${
                    selectedCategory === category
                      ? "border-b-2 border-blue-500 !text-white"
                      : "border-b-2 border-transparent"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full">
        {/* Navbar */}
        <div className="md:w-1/4 w-full h-full md:h-full p-4">
          <div className="mt-10 border-black md:border-r-2">
            <div className="overflow-x-auto md:overflow-y-auto md:h-64">
              <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2">
                {featuresByCategory[selectedCategory].map((feature) => (
                  <li
                    key={feature}
                    className={`text-yellow-200 flex-shrink-0 md:flex-shrink cursor-pointer py-2 px-4 transition-all duration-200 ${
                      selectedFeature === feature
                        ? "border-b-2 md:border-b-0 md:border-r-2 border-blue-500 !text-white"
                        : "border-b-2 md:border-b-0 md:border-r-2 border-transparent"
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
          {selectedCategory === "By Function" && (
            <>
              {selectedFeature === "Bot Studio" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Bot Studio" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Create chatbots without writing a single line of code with Bot Studio!
                  </p>
                </div>
              )}

              {selectedFeature === "Analyst Assist" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use2} alt="Analyst Assist" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Get help from AI to analyze your data and generate insights.
                  </p>
                </div>
              )}

              {selectedFeature === "Seamless Integration" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Seamless Integration" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Integrate effortlessly with existing systems for smooth workflows.
                  </p>
                </div>
              )}

              {selectedFeature === "Conversational AI" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Conversational AI" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Engage with users using natural language for better interaction.
                  </p>
                </div>
              )}

              {selectedFeature === "Reporting Manager" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Reporting Manager" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Generate detailed reports easily with our reporting tools.
                  </p>
                </div>
              )}
            </>
          )}
          {selectedCategory === "By Industry" && (
            <>
              {selectedFeature === "Healthcare" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Healthcare" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Tailored solutions for the healthcare industry.
                  </p>
                </div>
              )}

              {selectedFeature === "Finance" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use2} alt="Finance" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Financial insights and analytics to drive your business forward.
                  </p>
                </div>
              )}

              {selectedFeature === "Retail" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Retail" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Solutions designed for retail business optimization.
                  </p>
                </div>
              )}

              {selectedFeature === "Education" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Education" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Empowering educational institutions with innovative tools.
                  </p>
                </div>
              )}

              {selectedFeature === "Technology" && (
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-9">
                  <img src={use1} alt="Technology" className="w-full md:w-auto" />
                  <p className="text-white tracking-wider md:!mt-32 text-center md:text-left">
                    Cutting-edge technology solutions for businesses.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Scroll;
 