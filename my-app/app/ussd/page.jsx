'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Wifi, WifiOff, Globe, ArrowRight, Check, Smartphone } from 'lucide-react';

export default function USSDSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const ussdSteps = [
    { number: "1", action: "Dial *347*2476#", icon: Phone },
    { number: "2", action: "Select your option", icon: Smartphone },
    { number: "3", action: "Trade anywhere!", icon: Check }
  ];

  // Animate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % ussdSteps.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden relative">
      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-4">
            <WifiOff className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Works Everywhere</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            No Internet? <span className="text-green-500">No Problem!</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trade, buy, and sell agricultural products using simple USSD codes on any mobile phone.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Phone Illustration */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              
              {/* Floating WiFi Off Icon */}
              <div className="absolute -top-8 -left-8 animate-bounce">
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-full p-4 backdrop-blur-sm">
                  <WifiOff className="w-6 h-6 text-red-400" />
                </div>
              </div>

              {/* Floating Globe Icon */}
              <div className="absolute -top-4 -right-8 animate-pulse">
                <div className="bg-green-500/20 border-2 border-green-500/50 rounded-full p-4 backdrop-blur-sm">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black border-8 border-gray-700 rounded-[3rem] shadow-2xl shadow-black/50 p-4 mx-auto" style={{ width: '280px', height: '560px' }}>
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Phone Screen */}
                <div className="relative bg-gradient-to-b from-gray-950 to-black rounded-[2rem] h-full overflow-hidden border border-gray-800">
                  
                  {/* Screen Header */}
                  <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 px-4 py-3 border-b border-green-500/40 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-300 font-medium">USSD Menu</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Screen Content with Animation */}
                  <div className="p-6 space-y-4 bg-black">
                    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                      
                      {/* USSD Code Display */}
                      <div className="bg-green-500/20 border-2 border-green-500/40 rounded-lg p-4 mb-6 text-center backdrop-blur-sm">
                        <p className="text-xs text-gray-400 mb-2">Dial</p>
                        <p className="text-3xl font-bold text-green-400 tracking-wider">*347*2476#</p>
                      </div>

                      {/* Menu Options */}
                      <div className="space-y-3">
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 hover:border-green-500/50 hover:bg-gray-800/80 transition-all">
                          <p className="text-sm text-white font-medium">1. Post Produce</p>
                        </div>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 hover:border-green-500/50 hover:bg-gray-800/80 transition-all">
                          <p className="text-sm text-white font-medium">2. Buy Products</p>
                        </div>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 hover:border-green-500/50 hover:bg-gray-800/80 transition-all">
                          <p className="text-sm text-white font-medium">3. Check Orders</p>
                        </div>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-3 hover:border-green-500/50 hover:bg-gray-800/80 transition-all">
                          <p className="text-sm text-white font-medium">4. Account Info</p>
                        </div>
                      </div>

                      {/* Input Prompt */}
                      <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400">Enter option:</p>
                        <div className="inline-block bg-green-500/30 border border-green-500/50 rounded px-4 py-2 mt-2">
                          <span className="text-green-400 font-mono text-xl animate-pulse">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            
            {/* How It Works Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">How USSD Works</h3>
              
              {ussdSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index;
                
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-100 opacity-60'
                    }`}
                  >
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive 
                        ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50' 
                        : 'bg-gray-900 border-gray-700'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-gray-500'}`} />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-xs font-semibold ${isActive ? 'text-green-400' : 'text-gray-600'}`}>
                          STEP {step.number}
                        </span>
                        {isActive && (
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        )}
                      </div>
                      <p className={`text-lg font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>
                        {step.action}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: Phone, text: "Works on any phone" },
                { icon: WifiOff, text: "No internet needed" },
                { icon: Globe, text: "Available 24/7" },
                { icon: Check, text: "Simple & fast" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-green-500/50 hover:bg-gray-800/80 transition-all group">
                    <Icon className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-200 font-medium">{benefit.text}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 inline-flex items-center justify-center space-x-2 group">
                <span>Try USSD Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-gray-400 mt-3">Available in 12 African countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}