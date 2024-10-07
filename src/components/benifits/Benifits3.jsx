import React from 'react';
import blue from '../../assets/blue.svg';
import benefits3 from '../../assets/benefits3.svg';

const Benifits3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-4 mt-20">
      <div className="md:w-5/12 space-y-6 leading-loose tracking-wide">
        <h1 className="text-xl font-bold mb-4 text-white">Effortless Insight Generation</h1>
        <p className="mb-4 text-yellow-200">
          Save valuable time and resources with LLMate's automated data insight tools. Our AI assistant seamlessly ingests data and builds a semantic layer, metric layer, and data dictionary to power.
        </p>
        <div className="flex items-start mb-4">
          <img src={blue} alt="" className="mr-2 mt-2" />
          <p className="text-yellow-200">Ad hoc on the go: Let ADA extract and analyze data to get your answers along with AI logic and query.</p>
        </div>
        <div className="flex items-start mb-4">
          <img src={blue} alt="" className="mr-2 mt-2" />
          <p className="text-yellow-200">Whether data is structured or unstructured, on-premises or in the cloud, ADA can easily connect and fetch insights.</p>
        </div>
        <div className="flex items-start mb-4">
          <img src={blue} alt="" className="mr-2 mt-2" />
          <p className="text-yellow-200">ADA works with you to clarify and ensure that you get your right answers in minutes. The more you use it, the better it gets.</p>
        </div>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 flex items-start sm:w-full">
        <img src={benefits3} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Benifits3;
