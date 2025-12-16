'use client'
import React, { useState } from 'react';
import { Search, Lightbulb, BookOpen, FlaskConical, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const FarmerResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');

  const resources = [
    // Farmer Tips
    {
      id: 1,
      type: 'tip',
      title: 'Best Time to Plant Tomatoes for Maximum Yield',
      excerpt: 'Learn the optimal planting schedule for tomatoes based on your climate zone and soil temperature.',
      content: 'Plant tomatoes 2-3 weeks after the last frost when soil temperature reaches 60°F. Use mulch to retain moisture and space plants 24-36 inches apart.',
      author: 'John Agbaje',
      date: 'Nov 10, 2025',
      readTime: '3 min read',
      category: 'Planting Tips'
    },
    {
      id: 2,
      type: 'blog',
      title: 'How I Increased My Corn Harvest by 40% Using Organic Methods',
      excerpt: 'A successful farmer shares his journey of switching to organic farming and the surprising results he achieved.',
      content: 'After three seasons of implementing crop rotation, composting, and natural pest control, I saw remarkable improvements in both yield and soil health.',
      author: 'Amina Bello',
      date: 'Nov 8, 2025',
      readTime: '8 min read',
      category: 'Success Stories'
    },
    {
      id: 3,
      type: 'research',
      title: 'New Drought-Resistant Maize Varieties Show 30% Better Performance',
      excerpt: 'Recent agricultural research reveals promising new maize varieties that can withstand extended dry periods.',
      content: 'Study conducted across 5 states shows new hybrid varieties maintain productivity even with 40% less rainfall than traditional varieties.',
      author: 'Dr. Chioma Okonkwo',
      date: 'Nov 5, 2025',
      readTime: '12 min read',
      category: 'Research Findings'
    },
    {
      id: 4,
      type: 'tip',
      title: 'Natural Pest Control: Protect Your Vegetables Without Chemicals',
      excerpt: 'Discover effective organic methods to keep pests away from your vegetable garden without harmful pesticides.',
      content: 'Companion planting with marigolds, using neem oil spray, and introducing beneficial insects can reduce pest damage by up to 80%.',
      author: 'Ibrahim Musa',
      date: 'Nov 9, 2025',
      readTime: '5 min read',
      category: 'Pest Control'
    },
    {
      id: 5,
      type: 'blog',
      title: 'From Small Farm to Profitable Business: My 5-Year Journey',
      excerpt: 'How strategic planning and modern techniques transformed a 2-acre farm into a thriving agricultural business.',
      content: 'Started with cassava farming, expanded to mixed cropping, and now supply to 15 local markets. Here\'s what I learned along the way.',
      author: 'Grace Okafor',
      date: 'Nov 7, 2025',
      readTime: '10 min read',
      category: 'Business'
    },
    {
      id: 6,
      type: 'research',
      title: 'Soil Testing Shows 60% of Farms Need pH Adjustment',
      excerpt: 'Comprehensive soil analysis reveals widespread pH imbalance affecting crop productivity across the region.',
      content: 'Research team tested 500 farms and found proper pH adjustment could increase yields by 25-35%. Free testing programs now available.',
      author: 'Prof. Adebayo Olumide',
      date: 'Nov 3, 2025',
      readTime: '7 min read',
      category: 'Soil Health'
    },
    {
      id: 7,
      type: 'tip',
      title: 'Water Conservation Techniques That Cut Irrigation Costs by Half',
      excerpt: 'Simple but effective methods to reduce water usage while maintaining healthy crop growth.',
      content: 'Drip irrigation, mulching, and proper timing can dramatically reduce water bills. Install rain barrels to capture free water during rainy season.',
      author: 'Fatima Ahmed',
      date: 'Nov 6, 2025',
      readTime: '4 min read',
      category: 'Water Management'
    },
    {
      id: 8,
      type: 'blog',
      title: 'Why I Switched to Greenhouse Farming and Never Looked Back',
      excerpt: 'The benefits and challenges of greenhouse farming from a farmer who made the transition three years ago.',
      content: 'Year-round production, pest protection, and better quality produce. Initial investment was high but payback period was only 18 months.',
      author: 'Emmanuel Nwosu',
      date: 'Nov 4, 2025',
      readTime: '9 min read',
      category: 'Modern Farming'
    },
    {
      id: 9,
      type: 'research',
      title: 'Impact of Organic Fertilizers on Long-Term Soil Fertility',
      excerpt: '10-year study reveals how organic fertilizers improve soil structure and microbial activity compared to synthetic options.',
      content: 'Long-term use of compost and manure increases soil organic matter by 45% and beneficial microorganisms by 70%. Results in sustained productivity.',
      author: 'Dr. Blessing Eze',
      date: 'Nov 1, 2025',
      readTime: '11 min read',
      category: 'Soil Science'
    },
    {
      id: 10,
      type: 'tip',
      title: 'Preparing Your Farm for the Rainy Season: Essential Checklist',
      excerpt: 'Don\'t get caught unprepared! Follow this comprehensive checklist to protect your farm before heavy rains arrive.',
      content: 'Check drainage systems, secure structures, prepare seedbeds, and stock up on essential supplies. Plan your planting schedule now.',
      author: 'Kunle Adeyemi',
      date: 'Nov 2, 2025',
      readTime: '6 min read',
      category: 'Farm Management'
    },
    {
      id: 11,
      type: 'blog',
      title: 'How Mobile Apps Helped Me Triple My Farm Productivity',
      excerpt: 'Technology meets agriculture: A farmer\'s guide to using smartphone apps for better farm management.',
      content: 'Weather forecasting, market prices, pest identification, and record keeping - all in my pocket. These 5 apps changed everything.',
      author: 'Sarah Obi',
      date: 'Oct 30, 2025',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      id: 12,
      type: 'research',
      title: 'New Crop Insurance Programs Benefit Small-Scale Farmers',
      excerpt: 'Government-backed research shows how affordable insurance protects farmers from climate risks and crop failures.',
      content: 'Pilot program in 12 states demonstrates 85% uptake rate. Farmers report better financial security and willingness to invest in improvements.',
      author: 'Dr. Yusuf Ibrahim',
      date: 'Oct 28, 2025',
      readTime: '8 min read',
      category: 'Policy & Finance'
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'tip': return <Lightbulb className="w-5 h-5" />;
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'research': return <FlaskConical className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'tip':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Farmer Tip</span>;
      case 'blog':
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Blog</span>;
      case 'research':
        return <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Research</span>;
      default:
        return null;
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = selectedTab === 'all' || resource.type === selectedTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Farmer Resources</h1>
          <p className="text-gray-600 text-lg">Tips, blogs, and research to help you grow better</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for tips, blogs, or research..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'all'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            All Resources
          </button>
          <button
            onClick={() => setSelectedTab('tip')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'tip'
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Farmer Tips
          </button>
          <button
            onClick={() => setSelectedTab('blog')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'blog'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Blogs
          </button>
          <button
            onClick={() => setSelectedTab('research')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
              selectedTab === 'research'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FlaskConical className="w-5 h-5" />
            Research
          </button>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Type Badge */}
              <div className="mb-4">
                {getTypeBadge(resource.type)}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {resource.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {resource.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{resource.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{resource.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{resource.readTime}</span>
                </div>
              </div>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {resource.category}
                </span>
              </div>

              {/* Read More Button */}
              <button className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No resources found. Try a different search or filter.</p>
          </div>
        )}

        {/* Results Count */}
        {filteredResources.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-green-600">{filteredResources.length}</span> {selectedTab === 'all' ? 'resources' : selectedTab === 'tip' ? 'tips' : selectedTab === 'blog' ? 'blogs' : 'research articles'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerResources;