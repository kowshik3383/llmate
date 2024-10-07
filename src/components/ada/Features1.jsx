import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Features1 = () => {
  return (
    <section className="bg-yellow-400 shadow-2xl min-h-screen py-12 px-4">
      <button className="flex justify-center text-yellow-200 align-middle items-center border border-yellow-200 w-44 h-12 rounded-3xl mx-auto hover:bg-yellow-500 transition duration-200">
        <FaStar color="#848a99" className="!text-yellow-200" />
        <span className="ml-2 text-base tracking-wide">FEATURES</span>
        <FaStar color="#848a99" className="ml-2" />
      </button>

      <div className="space-y-12 mt-10 text-center ">
        <h1 className="text-4xl font-bold text-white">Explore Our AI Agents' Innovative Features</h1>
        <p className="text-lg text-yellow-200 max-w-xl mx-auto leading-relaxed">
          Our AI-powered features unlock hidden insights and fuel smarter actions. Transform data into your decision-making superpower.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-yellow-100 rounded-xl shadow-2xl border border-gray-700 hover:bg-yellow-600 ease-in cursor-pointer">
          <h2 className="text-xl font-semibold text-white">Meets Enterprise-Grade Requirements</h2>
          <p className="text-yellow-200 mt-4">
            Looking to adopt LLMs, but feel limited by their security, compliance, and cost? ADA combines the power and performance of foundation LLMs while meeting enterprise needs.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl shadow-2xl  hover:bg-yellow-600 ease-in cursor-pointer border  border-gray-700">
          <h2 className="text-xl font-semibold text-white">Data Residency</h2>
          <p className="text-yellow-200 mt-4">
            Ensure compliance with local data residency regulations, storing data within a specific country or region.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl hover:bg-yellow-600 ease-in cursor-pointer shadow-2xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white">Cost-Efficient</h2>
          <p className="text-yellow-200 mt-4">
            Leverage both open and closed-source foundation models along with economies of scale to lower costs for your enterprise.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl hover:bg-yellow-600 ease-in cursor-pointer shadow-2xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white">Guardrails</h2>
          <p className="text-yellow-200 mt-4">
            Take control of LLM output by mitigating hallucinations and inappropriate answers, while defining response length and tone.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl hover:bg-yellow-600 ease-in cursor-pointer shadow-2xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white">Customizable</h2>
          <p className="text-yellow-200 mt-4">
            Get a personal model by customizing LLM to your organization, workflows, and knowledge base.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl shadow-2xl hover:bg-yellow-600 ease-in cursor-pointer border border-gray-700">
          <h2 className="text-xl font-semibold text-white">Latency</h2>
          <p className="text-yellow-200 mt-4">
            Enhance conversations with highly optimized models able to parallel process and operate at low response times.
          </p>
        </div>
        <div className="p-6 bg-yellow-100 rounded-xl hover:bg-yellow-600 ease-in cursor-pointer shadow-2xl border border-gray-700">
          <h2 className="text-xl font-semibold text-white">Data Privacy</h2>
          <p className="text-yellow-200 mt-4">
            Prevent unauthorized access, breaches, or data leaks with access controls, encryption, and secure storage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features1;
