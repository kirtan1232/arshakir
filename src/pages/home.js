import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-transparent">
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-800">AR SHAKIR</h2>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10">
            <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer font-medium">
              Product 
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer font-medium">
              Template
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium">Blog</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium">Pricing</li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2">
            Sign In
          </button>
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-lg lg:max-w-none">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Managing freelance payments has never been easier
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-full transition-colors">
                  Get Started
                </button>
                
                <div className="flex items-center space-x-3">
                  <button className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5l7 7-7 7V5z"/>
                    </svg>
                  </button>
                  <span className="text-gray-700 font-medium">See How It Works</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-800 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">Free Register</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-blue-800 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-medium">Great Service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Area */}
            <div className="flex-1 relative">
              <div className="relative h-96 md:h-[500px] flex items-center justify-center">
                {/* Main Image */}
                <div className="relative z-10 w-64 md:w-80 h-80 md:h-96 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="images/bankingsolution.png"
                    alt="Banking Solution"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-8 md:left-16 w-20 h-20 opacity-30">
          <div className="grid grid-cols-5 gap-1">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-800 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-800 rounded-full opacity-10"></div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-12">
            Over 32k+ software businesses growing with AR Shakir.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [OpenZeppelin]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Oracle]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Morpheus]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Samsung]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Monday.com]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Segment]
            </div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg text-gray-600 font-bold min-w-[140px] text-center">
              [Protonet]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;