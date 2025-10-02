'use client'
import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Users,
  Leaf,
  Sparkles,
  Globe,
  Shield,
  Phone,
} from 'lucide-react';

export default function AgroStackHomepage() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    farmers: 0,
    countries: 0
  });

  // Animate numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers(prev => ({
        farmers: prev.farmers < 10000 ? prev.farmers + 150 : 10000,
        countries: prev.countries < 12 ? prev.countries + 1 : 12
      }));
    }, 100);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Agricultural market"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <style jsx>{`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.4); }
            50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
          }
          .glow-effect { animation: glow 3s ease-in-out infinite; }
        `}</style>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center glow-effect">
              <span className="text-black font-extrabold text-lg">A</span>
            </div>
            <div>
              <span className="text-2xl font-semibold tracking-wide">AgroStack</span>
              <div className="text-xs text-green-400">Africa's #1 Platform</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
              <span className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-green-400" />
                <span>{animatedNumbers.countries} Countries</span>
              </span>
              <span className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-green-400" />
                <span>{animatedNumbers.farmers.toLocaleString()}+ Farmers</span>
              </span>
            </div>

            {/* Header Buttons - Hidden on small screens */}
            <div className="hidden md:flex gap-3">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-5 py-2 rounded-md transition-colors text-sm">
                Post Produce
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-green-500/30 text-white font-medium px-5 py-2 rounded-md transition-colors text-sm">
                See & Buy Produce
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-10 py-10 md:py-20">
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-6">
            A Complete Agriculture <br />
            <span className="text-green-500">Ecosystem</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Trade, secure, import, export — everything agriculture in one powerful platform.
          </p>

          {/* Mobile Action Buttons - Show only on small screens */}
          <div className="md:hidden flex flex-col gap-3 mb-10 w-full max-w-xs mx-auto">
            <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-md transition-colors text-base w-full">
              Post Produce
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-green-500/30 text-white font-medium px-6 py-3 rounded-md transition-colors text-base w-full">
              See & Buy Produce
            </button>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:block w-full max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, farmers, markets..."
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-white/15 transition-all"
              />
              <button className="absolute right-2 top-2 bg-green-500 hover:bg-green-600 text-black p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* USSD Access */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/40 rounded-xl px-6 py-4 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">No Internet?</span>
              </div>
              <div className="border-l border-green-500/30 pl-4">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Dial</p>
                  <p className="text-lg font-bold text-green-400">*347*2476#</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* marketplace */}
    </div>
  );
}