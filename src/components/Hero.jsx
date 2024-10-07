import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
	<div><div className='flex flex-col items-center justify-center text-center mt-24 px-4 space-y-10'>
	<h1 className='text-3xl sm:text-4xl md:text-[54px] space-y-8  !leading-normal font-semibold text-white'>
	  Data Analysis Made Easy with ADA
	  <br />
	  <span className="text-xl sm:text-2xl mt-6 pt-32 md:text-5xl ">(AI Data Assistant)</span>
	</h1>
	<p className="mt-2 max-w-2xl text-yellow-200 sm:text-base md:text-xl !leading-relaxed">
	  ADA empowers you to streamline your data journey, from preparation and analysis to reporting and presentation.
	  Our comprehensive suite of tools simplifies complex tasks and unlocks valuable insights to fuel informed decision-making across your organization.
	</p>
	<Link to="/" className='mt-6 bg-yellow-300 rounded-lg h-9 px-5 flex items-center justify-center md:text-sm sm:text-base text-white drop-shadow-2xl shadow-xl'>
	  Start Free Trial
	</Link>
  </div></div>
  )
}

export default Hero