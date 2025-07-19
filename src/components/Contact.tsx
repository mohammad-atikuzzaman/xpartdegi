import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                CONTACT US
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to start your next project? Get in touch with our team and let's 
                create something amazing together. We're here to bring your vision to life.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@studio.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">123 Creative Street, Design City</p>
                </div>
              </div>
            </div>

            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Our workspace"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img 
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-xl mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Creative process"
                className="w-full h-48 object-cover rounded-xl -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Design tools"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;