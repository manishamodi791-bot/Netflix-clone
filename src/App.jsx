import React from 'react';
import Hero from './Compnents/Hero';
import Trends from './Compnents/Trends';
import ReasonsSection from './Compnents/card';
import Faq from './Compnents/Faq';
import Newsletter from './Compnents/Newsletter';
import Footer from './Compnents/Footer';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Trends />
      <ReasonsSection />
      <Faq />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default App;