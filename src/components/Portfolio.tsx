import React from 'react';

const Portfolio: React.FC = () => {
  // out portfolios data, but its static
  const portfolioItems = [
    {
      title: "Website Design",
      category: "Web Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Mobile Application", 
      category: "App Design",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Corporate Design",
      category: "Branding",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Mobile Application",
      category: "App Design", 
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Branding Design",
      category: "Branding",
      image: "https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Digital Design",
      category: "Web Design",
      image: "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quality examples of digital work achievements. Excellent talent in complex parts of
            applications that range from simple website ideas to complex platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-yellow-500 text-sm font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
