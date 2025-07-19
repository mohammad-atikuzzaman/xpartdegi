import React from 'react';

const BrandValues: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Brand Values
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in creating meaningful digital experiences that resonate with your 
                audience and drive real business results. Our approach combines creativity 
                with strategy to deliver exceptional outcomes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                  <p className="text-gray-600">We stay ahead of trends and implement cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Focused</h4>
                  <p className="text-gray-600">Every project receives our full attention to detail and craftsmanship.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Partnership</h4>
                  <p className="text-gray-600">We work closely with you to understand and exceed your expectations.</p>
                </div>
              </div>
            </div>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Creative workspace"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Design process"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team collaboration"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Modern office"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;