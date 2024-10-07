import React from 'react';
import Navbar from './Navbar';

import Hero from './Hero';
import Image from './Image';
import Companies from './Companies';
import Benifit from './benifits/Benifit';
import Xnavbar from './horizental/Xnavbar';
import Use from './horizental/Use'
import Get from './Get';
import Footer from './Footer';
const Home = () => {
  return (
    <section className=''>
      <Navbar />
      <Hero/>
      <Image/>
      <Companies/>
      <Benifit/>
      <Xnavbar/>
      <Use/>
      <Get/>
      <Footer/>
    </section>
  );
}

export default Home;
