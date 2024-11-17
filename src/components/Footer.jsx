import React from 'react';
import llmate from '../assets/llmate.png';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Importing the icons

const Footer = () => {
  return (
    <footer className="shadow-sm bg-skin-secondary">
      <div className='px-4 py-6 sm:py-10'>
        <div className="w-full max-w-6xl 2xl:max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 space-y-2 sm:col-span-7">
              <p className="text-lg font-bold tracking-wide select-none 2xl:text-xl text-white">Join our newsletter</p>
              <p className="text-sm font-normal tracking-wide 2xl:text-base text-yellow-200">Stay up to date with the latest news, announcements, and articles.</p>
            </div>
            <div className="col-span-12 sm:col-span-5">
              <div className="flex flex-col items-start justify-center space-y-4 md:items-end md:space-y-2">
                <div className="flex flex-col w-full max-w-xs space-y-4">
                  <div className="flex flex-col items-center w-full gap-2 sm:flex-row sm:justify-end">
                    <input
                      type="email"
                      className="w-full max-w-xs rounded-full bg-skin-primary px-4 py-2.5 text-sm text-color-primary outline-none placeholder:text-color-primary"
                      placeholder="Enter your email"
                    />
                    <button className="w-full rounded-full bg-skin-primary px-4 py-2.5 text-sm font-semibold tracking-wide text-white sm:w-auto disabled:opacity-50">
                      Subscribe
                    </button>
                  </div>
                  <p className="ml-2 text-xs font-normal tracking-wide text-yellow-200">
                    By subscribing you agree to our <a href="/" className="underline cursor-pointer !text-white">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between mt-12 ml-6 sm:px-12">
        {/* Resources and Support Section */}
        <div className="flex space-x-12 sm:space-x-32 mb-8 sm:mb-0">
          <div className="text-white space-y-4">
            <h1 className='text-white font-medium text-lg'>Resources</h1>
            <p className='text-yellow-200'>Blog</p>
            <p className='text-yellow-200'>Docs</p>
            <p className='text-yellow-200'>API Docs</p>
          </div>
          <div className="text-white space-y-4">
            <h1 className='text-white font-medium text-lg' >Support</h1>
            <p className='text-yellow-200'>About Us</p>
            <p className='text-yellow-200'>Team</p>
            <p className='text-yellow-200'>Terms & Conditions</p>
            <p className='text-yellow-200'>Privacy Policy</p>
          </div>
        </div>

        {/* Owned and Maintained Section */}
      
      </div>

      {/* Social Media and Logo Section */}
      <div className="flex flex-col items-center justify-between sm:flex-row mt-12 px-4 sm:px-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={llmate} alt="logo" className="h-12 w-12" />
          <h1 className="text-white text-lg font-sans">Data Gram</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://linkedin.com" className="text-white text-xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" className="text-white text-xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://facebook.com" className="text-white text-xl" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
