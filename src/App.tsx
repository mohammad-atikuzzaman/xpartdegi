import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BrandValues from './components/BrandValues';
import Construction from './components/Construction';
import WhatWeDo from './components/WhatWeDo';
import AdditionalSections from './components/AdditionalSections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <Portfolio />
      <BrandValues />
      <Construction />
      <WhatWeDo />
      <AdditionalSections />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;