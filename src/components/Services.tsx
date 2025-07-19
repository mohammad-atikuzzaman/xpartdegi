import React from 'react';
import { Palette, Code, Smartphone, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your audience effectively."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Development",
      description: "Modern, responsive websites built with the latest technologies for optimal performance."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Mobile-optimized experiences that work seamlessly across all devices and platforms."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast Performance",
      description: "Lightning-fast websites optimized for speed, SEO, and exceptional user experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Epic design and engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We plan and design amazing websites, making feature that of design to 
            perfect user experience. Let's craft digital experiences together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                index === 3 ? 'bg-yellow-500 text-white' : 'bg-gray-50 hover:bg-white'
              }`}
            >
              <div className={`mb-6 ${index === 3 ? 'text-white' : 'text-yellow-600'}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${index === 3 ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${index === 3 ? 'text-yellow-100' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;