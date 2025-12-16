'use client'
import React, { useState } from 'react';
import {
    Search,
    ShoppingCart,
    Truck,
    CheckCircle,
    Smartphone,
    Users,
    MapPin,
    Camera,
    Upload,
    DollarSign,
    MessageCircle,
    Shield,
    Clock,
    Star,
    ArrowRight,
    Phone,
    Leaf
} from 'lucide-react';

export default function HowItWorksSection() {
    const [activeTab, setActiveTab] = useState('buyers');

    const buyerSteps = [
        {
            icon: Search,
            title: "Browse & Search",
            description: "Discover fresh produce from verified farmers across Africa. Filter by location, category, or search for specific items.",
            details: ["Filter by category, location, and price", "View detailed product information", "Check farmer ratings and reviews"]
        },
        {
            icon: MessageCircle,
            title: "Connect with Farmers",
            description: "Chat directly with farmers to discuss quantities, quality, and special requirements for your order.",
            details: ["Direct messaging with farmers", "Negotiate bulk pricing", "Ask about farming practices"]
        },
        {
            icon: ShoppingCart,
            title: "Place Your Order",
            description: "Add items to cart and choose your preferred payment method. Track your order status in real-time.",
            details: ["Secure payment processing", "Multiple payment options", "Order confirmation & tracking"]
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Get your fresh produce delivered directly to your location or arrange pickup from the farm.",
            details: ["Door-to-door delivery", "Farm pickup options", "Real-time delivery tracking"]
        }
    ];

    const sellerSteps = [
        {
            icon: Upload,
            title: "Create Your Profile",
            description: "Set up your farmer profile with photos, location, and certifications to build trust with buyers.",
            details: ["Upload farm photos", "Add certifications", "Complete verification process"]
        },
        {
            icon: Camera,
            title: "List Your Products",
            description: "Upload high-quality photos of your produce with detailed descriptions, quantities, and pricing.",
            details: ["Professional product photos", "Detailed descriptions", "Set competitive prices"]
        },
        {
            icon: Users,
            title: "Manage Orders",
            description: "Receive and manage orders through our easy-to-use dashboard. Communicate with buyers instantly.",
            details: ["Order management dashboard", "Inventory tracking", "Customer communication"]
        },
        {
            icon: DollarSign,
            title: "Get Paid Securely",
            description: "Receive payments directly to your bank account or mobile money wallet within 24 hours of delivery.",
            details: ["Multiple payout options", "Fast payment processing", "Transaction security"]
        }
    ];

    const currentSteps = activeTab === 'buyers' ? buyerSteps : sellerSteps;

    return (
        <div className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-5xl font-bold mb-4">
                        How <span className="text-green-500">AgroStack</span> Works
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Connecting farmers and buyers across Africa through technology. 
                        Fresh produce, fair prices, direct from farm to table.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-green-500/30">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('buyers')}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                                    activeTab === 'buyers'
                                        ? 'bg-green-500 text-black shadow-lg'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                For Buyers
                            </button>
                            <button
                                onClick={() => setActiveTab('sellers')}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                                    activeTab === 'sellers'
                                        ? 'bg-green-500 text-black shadow-lg'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                <Leaf className="w-5 h-5" />
                                For Farmers
                            </button>
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {currentSteps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connection Line */}
                            {index < currentSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent z-0" />
                            )}
                            
                            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:border-green-500/60 transition-all duration-300 hover:transform hover:scale-105 group">
                                {/* Step Number */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <step.icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                                </div>

                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                                    {step.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="space-y-2">
                                    {step.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-400">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-md border border-green-500/30 rounded-xl p-6 text-center">
                        <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Verified Farmers</h3>
                        <p className="text-gray-300 text-sm">All farmers are verified through our rigorous screening process to ensure quality and authenticity.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 text-center">
                        <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-300 text-sm">Our support team is available round the clock to help with any questions or issues you may have.</p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 backdrop-blur-md border border-yellow-500/30 rounded-xl p-6 text-center">
                        <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
                        <p className="text-gray-300 text-sm">We guarantee the freshness and quality of all products, with easy returns if you're not satisfied.</p>
                    </div>
                </div>

                {/* USSD Access Section */}
                <div className="bg-gradient-to-r from-green-900/30 via-black to-green-900/30 border border-green-500/30 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">No Smartphone? No Internet? No Problem!</h3>
                    <p className="text-gray-300 mb-6">Access our marketplace from any mobile phone using USSD technology</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-4">
                            <Phone className="w-8 h-8 text-green-400" />
                            <div>
                                <p className="text-sm text-gray-400">Simply dial</p>
                                <p className="text-2xl font-bold text-green-400">*347*2476#</p>
                            </div>
                        </div>
                        
                        <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                        
                        <div className="text-left">
                            <p className="text-sm text-gray-400 mb-2">Available actions:</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>• Browse products by category</li>
                                <li>• Place orders via SMS</li>
                                <li>• Check order status</li>
                                <li>• Contact customer support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}