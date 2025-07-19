import React from 'react';

const WhatWeDo: React.FC = () => {
  const services = {
    strategy: [
      "Business Analysis",
      "Market Research", 
      "User Research",
      "UX Consultation",
      "Digital Strategy"
    ],
    design: [
      "UI/UX Design",
      "Brand Design",
      "Logo Design",
      "Product Design",
      "Visual Identity"
    ],
    development: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Mobile Apps",
      "WordPress Development"
    ]
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-500">Strategy</h3>
            <ul className="space-y-3">
              {services.strategy.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-500">Design</h3>
            <ul className="space-y-3">
              {services.design.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-500">Development</h3>
            <ul className="space-y-3">
              {services.development.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;