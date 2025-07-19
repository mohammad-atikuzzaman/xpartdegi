import React from 'react';
import { ArrowRight } from 'lucide-react';

const AdditionalSections: React.FC = () => {
  return (
    <>
      {/* Branding Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Branding Strategy
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive brand development that creates lasting impressions and drives 
                  business growth through strategic positioning and visual identity.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Brand Identity</h4>
                  <p className="text-gray-600 text-sm">Creating cohesive visual systems that represent your values</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Digital Logic</h4>
                  <p className="text-gray-600 text-sm">Strategic digital approaches for modern businesses</p>
                </div>
              </div>

              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
                Explore Brands
              </button>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="text-6xl font-bold text-gray-200 mb-4">MOCKUP</div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-yellow-500 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Digital Experiences */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Crafting digital experiences"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Crafting digital experiences
                </h2>
                <p className="text-xl text-yellow-100 leading-relaxed">
                  We create digital experiences that engage, inspire, and convert. 
                  Every pixel is crafted with purpose and every interaction is designed 
                  to delight your users.
                </p>
              </div>

              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center group">
                View Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;