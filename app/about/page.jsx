import React from 'react';
import Navbar from './../component/Navbar/Navbar'

export default function About() {
    const features = [
        {
            title: "Direct Marketplace",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            description: "Connect farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural produce across Africa.",
        },
        {
            title: "AI-Powered Insights",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            description: "Advanced AI analyzes weather patterns, soil conditions, and market demand to optimize crop selection and farming techniques.",
        },
        {
            title: "Logistics Solutions",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
            ),
            description: "End-to-end logistics management from farm to market, ensuring fresh produce delivery through our reliable transportation network.",
        },
        {
            title: "USSD Accessibility",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            description: "Access services via USSD codes on any mobile phone, ensuring platform availability regardless of internet connectivity.",
        },
        {
            title: "Farmer Cooperatives",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            description: "Form or join cooperatives to pool resources, share knowledge, and access group benefits including loans and bulk purchases.",
        },
        {
            title: "Education & Training",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            description: "Access agricultural training, workshops, and extension services to learn modern techniques and business skills.",
        },
    ];

    const stats = [
        { number: "10,000+", label: "Active Farmers" },
        { number: "12+", label: "African Countries" },
        { number: "$50M+", label: "Total Transactions" },
        { number: "200+", label: "Cooperatives Formed" },
    ];

    return (
        <div className="bg-white">
            <Navbar/>
            {/* Hero Banner */}
            <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="African Farmers"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/50"></div>
                </div>
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-center px-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About <span className="text-green-400">AgroStack</span></h1>
                        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
                        <p className="text-xl text-white max-w-2xl">Empowering African farmers through technology, market access, and innovation</p>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col items-center">
                        <div className="inline-block p-2 bg-green-100 rounded-lg mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
                        <p className="text-lg text-gray-600 max-w-3xl text-center leading-relaxed">
                            At AgroStack, we believe in transforming African agriculture through technology and innovation.
                            We don't just connect farmers to markets — we empower communities, build sustainable livelihoods,
                            and cultivate excellence across the entire agricultural value chain.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Our Journey</span>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">A Legacy of <span className="text-green-600">Agricultural Innovation</span></h2>
                            <div className="h-1 w-16 bg-green-600 mb-8"></div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                AgroStack was founded with the vision to bridge the gap between smallholder farmers and modern agricultural markets. Our platform quickly gained recognition for its commitment to fair pricing, technological innovation, and farmer empowerment.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Over the years, we've evolved by combining AI-powered insights with on-the-ground logistics solutions. Our ever-adapting platform reflects market trends and draws from the experience of agricultural experts across the continent.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, AgroStack farmers can be found thriving across 12+ African countries, increasing their yields, maximizing profits, and building sustainable farming businesses for future generations.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                    alt="African Agriculture"
                                    className="rounded-lg shadow-xl w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-lg bg-green-100 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values & Philosophy */}
            <div className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Core Values</span>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
                        <div className="h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Fair Market Access',
                                desc: 'Direct connection between farmers and buyers eliminates middlemen, ensuring farmers receive up to 40% more profit for their produce.',
                            },
                            {
                                title: 'AI-Powered Farming',
                                desc: 'Our advanced AI analyzes weather, soil, and market data to provide personalized recommendations for maximum yield and profitability.',
                            },
                            {
                                title: 'Universal Accessibility',
                                desc: 'From smartphones to basic feature phones via USSD codes, we ensure every farmer can access our platform regardless of technology.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
                                <div className="mb-4 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Complete Solutions</span>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
                        <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive platform designed to support farmers at every stage of the agricultural journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100">
                                <div className="mb-6 text-green-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 px-6 bg-green-600 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="py-6">
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-green-200 text-sm md:text-base uppercase tracking-wider font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Join the AgroStack Community</h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Join thousands of farmers already transforming their agricultural businesses with AgroStack.
                        Start maximizing your yields and profits today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/signup" className="px-10 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg text-lg">
                            Get Started Free
                        </a>
                        <a href="/contact" className="px-10 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-green-600 text-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}