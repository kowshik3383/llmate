import React from 'react';
import { FaStar } from "react-icons/fa6";
import Benifits1 from './Benifits1';
import Benifits2 from './Benifits2';
import Benifits3 from './Benifits3';

const Benifit = () => {
  return (
    <section className="p-4">
      <div className="flex justify-center mt-12 border border-yellow-200 w-44 h-12 rounded-3xl mx-auto">
        <button className="text-yellow-200 text-center text-2xl flex justify-center items-center">
          <FaStar color='#848a99' className='!text-yellow-200' />
          <span className="ml-2 text-base tracking-wide">BENEFITS</span>
          <FaStar color='#848a99' className='ml-2' />
        </button>
      </div>
      <Benifits1 />
	  <Benifits2/>
	  <Benifits3/>
    </section>
  );
}

export default Benifit;
