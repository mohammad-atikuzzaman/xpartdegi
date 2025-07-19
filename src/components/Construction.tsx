import React from 'react';
import { ArrowRight } from 'lucide-react';

const Construction: React.FC = () => {
  return (
    <section className="py-20 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction and renovation workspace"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Construction and renovation projects
              </h2>
              <p className="text-xl text-yellow-100 leading-relaxed">
                Beyond digital solutions, we also specialize in physical space transformation. 
                From office renovations to complete construction projects, we bring the same 
                attention to detail and quality craftsmanship.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-yellow-100">Complete project management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-yellow-100">Quality materials and craftsmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-yellow-100">Timely delivery and budget management</span>
              </div>
            </div>

            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center group">
              View Construction Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;