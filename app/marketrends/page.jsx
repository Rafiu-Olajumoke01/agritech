'use client'
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, Search, Calendar, DollarSign, AlertCircle } from 'lucide-react';

const MarketPrices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const commodities = [
    {
      id: 'corn',
      name: 'Corn',
      category: 'Grains',
      currentPrice: 245,
      previousPrice: 233,
      unit: 'per ton',
      trend: 'up',
      change: 5.2,
      description: 'Prices are rising steadily. Good demand from feed manufacturers and export markets pushing prices higher.',
      forecast: 'Expected to continue rising through next month',
      bestTime: 'Good time to sell if you have stock',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'wheat',
      name: 'Wheat',
      category: 'Grains',
      currentPrice: 280,
      previousPrice: 286,
      unit: 'per ton',
      trend: 'down',
      change: -2.1,
      description: 'Prices dropping slightly due to increased supply from recent harvests. Market is stable overall.',
      forecast: 'Likely to stabilize at current levels',
      bestTime: 'Wait a few weeks before selling',
      lastUpdate: '3 hours ago'
    },
    {
      id: 'rice',
      name: 'Rice',
      category: 'Grains',
      currentPrice: 520,
      previousPrice: 520,
      unit: 'per ton',
      trend: 'stable',
      change: 0.0,
      description: 'Prices remain steady. Balanced supply and demand keeping the market stable.',
      forecast: 'No major changes expected soon',
      bestTime: 'Market is stable, sell when ready',
      lastUpdate: '1 hour ago'
    },
    {
      id: 'tomatoes',
      name: 'Tomatoes',
      category: 'Vegetables',
      currentPrice: 85,
      previousPrice: 78,
      unit: 'per crate',
      trend: 'up',
      change: 8.5,
      description: 'Strong price increase! Lower supply due to weather conditions while demand remains high.',
      forecast: 'Prices may stay high for 2-3 weeks',
      bestTime: 'Excellent time to sell',
      lastUpdate: '4 hours ago'
    },
    {
      id: 'onions',
      name: 'Onions',
      category: 'Vegetables',
      currentPrice: 45,
      previousPrice: 47,
      unit: 'per bag',
      trend: 'down',
      change: -3.4,
      description: 'Prices falling as new harvest reaches markets. Supply is abundant right now.',
      forecast: 'May drop further before stabilizing',
      bestTime: 'Consider waiting if possible',
      lastUpdate: '5 hours ago'
    },
    {
      id: 'potatoes',
      name: 'Potatoes',
      category: 'Vegetables',
      currentPrice: 38,
      previousPrice: 37,
      unit: 'per bag',
      trend: 'up',
      change: 2.7,
      description: 'Gradual price increase. Steady demand from processing plants and retail markets.',
      forecast: 'Stable growth expected',
      bestTime: 'Fair time to sell',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'soybeans',
      name: 'Soybeans',
      category: 'Grains',
      currentPrice: 415,
      previousPrice: 425,
      unit: 'per ton',
      trend: 'down',
      change: -2.4,
      description: 'Slight decline in prices. International market fluctuations affecting local prices.',
      forecast: 'Expected to stabilize soon',
      bestTime: 'Monitor for next week',
      lastUpdate: '6 hours ago'
    },
    {
      id: 'carrots',
      name: 'Carrots',
      category: 'Vegetables',
      currentPrice: 32,
      previousPrice: 29,
      unit: 'per bag',
      trend: 'up',
      change: 10.3,
      description: 'Significant price jump! Reduced supply from major growing regions due to drought conditions.',
      forecast: 'High prices likely to continue',
      bestTime: 'Very good time to sell',
      lastUpdate: '3 hours ago'
    }
  ];

  const getTrendBadge = (trend, change) => {
    if (trend === 'up') {
      return (
        <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
          <TrendingUp className="w-5 h-5" />
          <span>Rising +{change}%</span>
        </div>
      );
    } else if (trend === 'down') {
      return (
        <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">
          <TrendingDown className="w-5 h-5" />
          <span>Falling {change}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold">
          <Minus className="w-5 h-5" />
          <span>Stable</span>
        </div>
      );
    }
  };

  const filteredCommodities = commodities.filter(commodity => {
    const matchesSearch = commodity.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || commodity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Market Prices & Trends</h1>
          <p className="text-gray-600 text-lg">Easy-to-understand market insights for farmers</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search commodities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-green-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('Grains')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === 'Grains'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Grains
            </button>
            <button
              onClick={() => setSelectedCategory('Vegetables')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === 'Vegetables'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Vegetables
            </button>
          </div>
        </div>

        {/* Commodities List */}
        <div className="space-y-5">
          {filteredCommodities.map(commodity => (
            <div key={commodity.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{commodity.name}</h2>
                    <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {commodity.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Updated {commodity.lastUpdate}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">${commodity.currentPrice}</span>
                    <span className="text-gray-500">/ {commodity.unit}</span>
                  </div>
                  {getTrendBadge(commodity.trend, commodity.change)}
                </div>
              </div>

              {/* Content Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-blue-600" />
                      What's happening:
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{commodity.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-500">Previous price</p>
                      <p className="font-semibold text-gray-900">${commodity.previousPrice} {commodity.unit}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      What to expect:
                    </h3>
                    <p className="text-blue-800">{commodity.forecast}</p>
                  </div>

                  <div className={`p-4 rounded-lg border-l-4 ${
                    commodity.trend === 'up' 
                      ? 'bg-green-50 border-green-500' 
                      : commodity.trend === 'down'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-gray-50 border-gray-500'
                  }`}>
                    <h3 className={`font-semibold mb-2 ${
                      commodity.trend === 'up' 
                        ? 'text-green-900' 
                        : commodity.trend === 'down'
                        ? 'text-yellow-900'
                        : 'text-gray-900'
                    }`}>
                      💡 Advice for farmers:
                    </h3>
                    <p className={`font-medium ${
                      commodity.trend === 'up' 
                        ? 'text-green-800' 
                        : commodity.trend === 'down'
                        ? 'text-yellow-800'
                        : 'text-gray-800'
                    }`}>
                      {commodity.bestTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCommodities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No commodities found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;