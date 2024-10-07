import React, { useState } from "react";
import blue from "../../assets/blue.svg";
import { FaStar } from "react-icons/fa6";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import user5 from "../../assets/user5.svg";

const Use = () => {
  const [selectedFeature, setSelectedFeature] = useState("Sales"); // Default to "Sales"

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      {/* Button for Use Cases */}
      <button className="flex justify-center text-yellow-200 align-middle items-center mt-12 border border-yellow-200 w-44 h-12 rounded-3xl mx-auto">
        <FaStar color="#848a99" className="!text-yellow-200" />
        <span className="ml-2 text-base tracking-wide">USE CASES</span>
        <FaStar color="#848a99" className="ml-2" />
      </button>

      {/* Header */}
      <h1 className="text-white text-center mt-7 mb-4 font-semibold text-2xl md:text-4xl">
        AI Data Analyst for Internal Teams
      </h1>

      {/* Navbar */}
      <div className="w-full p-4">
        <div className="mt-10">
          {/* Horizontal scroll on small screens */}
          <div className="overflow-x-auto md:overflow-y-auto">
            <ul className="flex justify-start md:justify-center space-x-4 md:space-x-0 px-2 md:px-0">
              {["Sales", "Marketing", "HR", "Finance", "Customer Support"].map(
                (feature) => (
                  <li
                    key={feature}
                    className={`text-yellow-200 cursor-pointer px-4 transition-all duration-200 ${
                      selectedFeature === feature
                        ? "border-b-2 border-blue-500 !text-white"
                        : "border-b-2 border-transparent"
                    }`}
                    onClick={() => handleFeatureClick(feature)}
                  >
                    {feature}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Display based on selected feature */}
      <div className="flex flex-col items-center justify-center mx-4 md:mx-8 lg:mx-12">
        {selectedFeature === "Sales" && (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg border-[0.25px] border-gray-800 shadow-2xl space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-6 bg-yellow-400 rounded-lg">
            {/* Text and Features Section */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-12">
              {/* Lead Prioritization */}
              <div className="flex items-start space-x-4">
                <img src={blue} alt="Lead Prioritization" className="w-10 h-10 object-cover" />
                <div>
                  <p className="text-lg font-semibold text-white">Lead Prioritization</p>
                  <p className="text-sm text-gray-300">Identify high-value leads based on past conversion data.</p>
                </div>
              </div>

              {/* Sales Planning */}
              <div className="flex items-start space-x-4">
                <img src={blue} alt="Sales Planning" className="w-10 h-10 object-cover" />
                <div>
                  <p className="text-lg font-semibold text-white">Sales Planning</p>
                  <p className="text-sm text-gray-300">Optimize sales strategies with trend analysis on historical data.</p>
                </div>
              </div>

              {/* Customer Buying Patterns */}
              <div className="flex items-start space-x-4">
                <img src={blue} alt="Customer Buying Patterns" className="w-10 h-10 object-cover" />
                <div>
                  <p className="text-lg font-semibold text-white">Customer Buying Patterns</p>
                  <p className="text-sm text-gray-300">Uncover insights into customer preferences for personalized outreach.</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center w-full md:w-1/2">
              <img src={user1} alt="Customer Insights" className="object-cover rounded-lg shadow-lg w-full md:w-auto" />
            </div>
          </div>
        )}

        {selectedFeature === "Marketing" && (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg border-[0.25px] border-gray-800 shadow-2xl space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-6 bg-yellow-400 rounded-lg">
          {/* Text and Features Section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-12">
            {/* Lead Prioritization */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Lead Prioritization" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Lead Prioritization</p>
                <p className="text-sm text-gray-300">Identify high-value leads based on past conversion data.</p>
              </div>
            </div>

            {/* Sales Planning */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Sales Planning" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Sales Planning</p>
                <p className="text-sm text-gray-300">Optimize sales strategies with trend analysis on historical data.</p>
              </div>
            </div>

            {/* Customer Buying Patterns */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Customer Buying Patterns" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Customer Buying Patterns</p>
                <p className="text-sm text-gray-300">Uncover insights into customer preferences for personalized outreach.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img src={user2} alt="Customer Insights" className="object-cover rounded-lg shadow-lg w-full md:w-auto" />
          </div>
        </div>
        )}
        {selectedFeature === "HR" && (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg border-[0.25px] border-gray-800 shadow-2xl space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-6 bg-yellow-400 rounded-lg">
          {/* Text and Features Section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-12">
            {/* Lead Prioritization */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Lead Prioritization" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Lead Prioritization</p>
                <p className="text-sm text-gray-300">Identify high-value leads based on past conversion data.</p>
              </div>
            </div>

            {/* Sales Planning */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Sales Planning" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Sales Planning</p>
                <p className="text-sm text-gray-300">Optimize sales strategies with trend analysis on historical data.</p>
              </div>
            </div>

            {/* Customer Buying Patterns */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Customer Buying Patterns" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Customer Buying Patterns</p>
                <p className="text-sm text-gray-300">Uncover insights into customer preferences for personalized outreach.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img src={user4} alt="Customer Insights" className="object-cover rounded-lg shadow-lg w-full md:w-auto" />
          </div>
        </div>
        )}
        {selectedFeature === "Finance" && (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg border-[0.25px] border-gray-800 shadow-2xl space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-6 bg-yellow-400 rounded-lg">
          {/* Text and Features Section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-12">
            {/* Lead Prioritization */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Lead Prioritization" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Lead Prioritization</p>
                <p className="text-sm text-gray-300">Identify high-value leads based on past conversion data.</p>
              </div>
            </div>

            {/* Sales Planning */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Sales Planning" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Sales Planning</p>
                <p className="text-sm text-gray-300">Optimize sales strategies with trend analysis on historical data.</p>
              </div>
            </div>

            {/* Customer Buying Patterns */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Customer Buying Patterns" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Customer Buying Patterns</p>
                <p className="text-sm text-gray-300">Uncover insights into customer preferences for personalized outreach.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img src={user3} alt="Customer Insights" className="object-cover rounded-lg shadow-lg w-full md:w-auto" />
          </div>
        </div>
        )}
        {selectedFeature === "Customer Support" && (
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg border-[0.25px] border-gray-800 shadow-2xl space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-6 bg-yellow-400 rounded-lg">
          {/* Text and Features Section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-12">
            {/* Lead Prioritization */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Lead Prioritization" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Lead Prioritization</p>
                <p className="text-sm text-gray-300">Identify high-value leads based on past conversion data.</p>
              </div>
            </div>

            {/* Sales Planning */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Sales Planning" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Sales Planning</p>
                <p className="text-sm text-gray-300">Optimize sales strategies with trend analysis on historical data.</p>
              </div>
            </div>

            {/* Customer Buying Patterns */}
            <div className="flex items-start space-x-4">
              <img src={blue} alt="Customer Buying Patterns" className="w-10 h-10 object-cover" />
              <div>
                <p className="text-lg font-semibold text-white">Customer Buying Patterns</p>
                <p className="text-sm text-gray-300">Uncover insights into customer preferences for personalized outreach.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img src={user5} alt="Customer Insights" className="object-cover rounded-lg shadow-lg w-full md:w-auto" />
          </div>
        </div>
        )}

        {/* Additional feature sections for HR, Finance, and Customer Support... */}
      </div>
    </>
  );
};

export default Use;
