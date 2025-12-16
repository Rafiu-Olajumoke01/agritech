import React from 'react';
import { Quote, TrendingUp, Star, MapPin } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: "Amina Yusuf",
      location: "Kano, Nigeria",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      product: "Rice Farming",
      beforeIncome: "₦150,000",
      afterIncome: "₦650,000",
      percentage: "+333%",
      testimonial: "AgroStack connected me directly to buyers in Lagos. No more middlemen taking my profits. I now export my rice across 3 states!",
      duration: "6 months"
    },
    {
      name: "Kwame Mensah",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      product: "Cocoa Export",
      beforeIncome: "$2,500",
      afterIncome: "$8,900",
      percentage: "+256%",
      testimonial: "I was struggling to find international buyers. AgroStack's platform made it easy to export my cocoa to Europe. Life-changing!",
      duration: "8 months"
    },
    {
      name: "Fatima Okonkwo",
      location: "Enugu, Nigeria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      product: "Cassava Processing",
      beforeIncome: "₦80,000",
      afterIncome: "₦420,000",
      percentage: "+425%",
      testimonial: "From a small farm to supplying major food companies! The USSD feature helped me list products even without internet.",
      duration: "4 months"
    }
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Farmers, <span className="text-green-500">Real Results</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how AgroStack is transforming lives across Africa, one farmer at a time.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-green-500/90 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-black" />
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-white">{story.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Product */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{story.name}</h3>
                  <p className="text-sm text-green-400">{story.product}</p>
                </div>

                {/* Income Comparison */}
                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs text-gray-500">Before</p>
                      <p className="text-sm font-medium text-gray-400">{story.beforeIncome}</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-xs text-gray-500">After</p>
                      <p className="text-lg font-bold text-green-400">{story.afterIncome}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <span className="text-xs font-bold text-green-400">{story.percentage}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 italic">
                  "{story.testimonial}"
                </p>

                {/* Duration */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Growth period:</span>
                  <span className="text-green-400 font-medium">{story.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Join thousands of successful farmers across Africa</p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 inline-flex items-center space-x-2 group">
            <span>Start Your Success Story</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  );
}