'use client'
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Package, 
  DollarSign, 
  MapPin,
  ArrowUpRight,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function InteractiveStatsSection() {
  const [stats, setStats] = useState({
    farmers: 0,
    trades: 0,
    countries: 0,
    value: 0
  });

  const [activeCard, setActiveCard] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);

  // Animate stats on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        farmers: prev.farmers < 10247 ? prev.farmers + 157 : 10247,
        trades: prev.trades < 45892 ? prev.trades + 823 : 45892,
        countries: prev.countries < 12 ? prev.countries + 1 : 12,
        value: prev.value < 2.4 ? +(prev.value + 0.05).toFixed(1) : 2.4
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live activities
  useEffect(() => {
    const activities = [
      { user: "Amina Y.", action: "sold", item: "50kg Rice", location: "Lagos, NG", time: "2s ago" },
      { user: "Kwame M.", action: "bought", item: "100kg Cocoa", location: "Accra, GH", time: "5s ago" },
      { user: "Fatima O.", action: "listed", item: "200kg Cassava", location: "Enugu, NG", time: "12s ago" },
      { user: "John K.", action: "sold", item: "75kg Maize", location: "Nairobi, KE", time: "18s ago" },
      { user: "Sarah M.", action: "bought", item: "50kg Coffee", location: "Addis Ababa, ET", time: "25s ago" }
    ];

    let index = 0;
    setRecentActivities([activities[0]]);

    const activityInterval = setInterval(() => {
      index = (index + 1) % activities.length;
      setRecentActivities(prev => [activities[index], ...prev.slice(0, 4)]);
    }, 3000);

    return () => clearInterval(activityInterval);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      stat: "12 Countries",
      description: "Connect with buyers and sellers across Africa",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "Products",
      stat: "500+ Listed",
      description: "Fresh produce, grains, and more available daily",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: DollarSign,
      title: "Secure Payments",
      stat: "100% Protected",
      description: "Safe transactions with escrow protection",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      stat: "+250% YoY",
      description: "Fastest growing agri-tech platform in Africa",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const countries = [
    { name: "Nigeria", x: "48%", y: "52%", pulse: true },
    { name: "Ghana", x: "45%", y: "54%", pulse: false },
    { name: "Kenya", x: "58%", y: "60%", pulse: true },
    { name: "Ethiopia", x: "60%", y: "48%", pulse: false },
    { name: "Tanzania", x: "60%", y: "65%", pulse: true }
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-sm text-green-400 font-medium">Live Platform Activity</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See AgroStack <span className="text-green-500">In Action</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time trades happening across Africa, right now.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { icon: Users, label: "Active Farmers", value: stats.farmers.toLocaleString(), color: "green" },
            { icon: Package, label: "Total Trades", value: stats.trades.toLocaleString(), color: "blue" },
            { icon: Globe, label: "Countries", value: stats.countries, color: "purple" },
            { icon: DollarSign, label: "Trade Value", value: `$${stats.value}M`, color: "yellow" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${stat.color}-500/20 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left: Interactive Map */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Coverage Map</h3>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Live</span>
              </div>
            </div>

            {/* Simple Africa Map Visualization */}
            <div className="relative h-80 bg-black/40 rounded-lg overflow-hidden">
              {/* Simplified Africa Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                  <path
                    d="M200 50 Q250 100 250 150 L240 200 Q240 250 220 280 L200 320 Q180 290 160 260 L150 200 Q150 150 150 100 Q150 70 200 50 Z"
                    fill="none"
                    stroke="rgba(34, 197, 94, 0.3)"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Country Markers */}
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: country.x, top: country.y }}
                >
                  {country.pulse && (
                    <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  )}
                  <div className="relative w-4 h-4 bg-green-500 rounded-full border-2 border-green-300 shadow-lg shadow-green-500/50">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {country.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="48%" y1="52%" x2="45%" y2="54%" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" strokeDasharray="4" />
                <line x1="48%" y1="52%" x2="58%" y2="60%" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" strokeDasharray="4" />
                <line x1="58%" y1="60%" x2="60%" y2="48%" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" strokeDasharray="4" />
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Active Trading</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>Available Soon</span>
              </div>
            </div>
          </div>

          {/* Right: Live Activity Feed */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">Live Updates</span>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3 max-h-80 overflow-hidden">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`bg-black/40 border border-gray-700 rounded-lg p-4 hover:border-green-500/40 transition-all ${
                    index === 0 ? 'animate-slideIn' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">
                          {activity.user.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-semibold text-white">{activity.user}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            activity.action === 'sold' ? 'bg-green-500/20 text-green-400' :
                            activity.action === 'bought' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {activity.action}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{activity.item}</p>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 whitespace-nowrap ml-2">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-500 ${
                  isActive ? 'border-green-500/50 scale-105 shadow-xl shadow-green-500/20' : 'hover:border-gray-700'
                }`}>
                  
                  {/* Front */}
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-20 mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <div className="text-2xl font-bold text-green-400 mb-2">{feature.stat}</div>
                  </div>

                  {/* Back */}
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                    <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                    <div className="mt-4 inline-flex items-center text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}