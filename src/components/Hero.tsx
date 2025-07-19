import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                We Create
                <span className="block text-yellow-600">Websites</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We bring your digital vision to life with stunning, functional websites. 
                Business web development. Elegant and creative web solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-yellow-500 rounded-3xl p-8 shadow-2xl transform rotate-3">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Creative workspace with devices"
                className="w-full h-96 object-cover rounded-2xl transform -rotate-3"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;