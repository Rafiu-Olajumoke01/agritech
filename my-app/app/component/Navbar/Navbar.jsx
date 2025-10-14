'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (menu) => {
        if (timeoutId) clearTimeout(timeoutId);
        setOpenMenu(menu);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setOpenMenu(null);
            setTimeoutId(null);
        }, 200);
        setTimeoutId(id);
    };

    const underlineClass =
        "relative hover:text-green-400 transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-400 after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:transition-all after:duration-300 hover:after:w-full";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-black/90 shadow-md backdrop-blur-md'
                    : 'bg-transparent'
                } text-white`}
        >

            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo and Navigation */}
                <div className="flex items-center space-x-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-black font-extrabold text-lg">A</span>
                            </div>
                            <div>
                                <span className="text-2xl font-semibold tracking-wide">AgroStack</span>
                                <div className="text-xs text-green-400">Africa's #1 Platform</div>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={`${underlineClass} text-sm font-medium`}>Home</Link>

                        {/* Marketplace */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('marketplace')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={`${underlineClass} flex items-center space-x-1 text-sm font-medium`}>
                                Marketplace <ChevronDown size={14} />
                            </button>
                            {openMenu === 'marketplace' && (
                                <div className="absolute left-0 top-full pt-2">
                                    <div className="bg-black/95 border border-gray-700 rounded-xl p-4 shadow-lg w-56">
                                        <Link href="/marketplace" className="block py-2 text-sm hover:text-green-400">All Products</Link>
                                        <Link href="/marketplace" className="block py-2 text-sm hover:text-green-400">Buy Produce</Link>
                                        <Link href="/marketplace" className="block py-2 text-sm hover:text-green-400">Post Produce</Link>
                                        <Link href="/products" className="block py-2 text-sm hover:text-green-400">Track Orders</Link>
                                        <Link href="/categories" className="block py-2 text-sm hover:text-green-400">Buyer - Farmer Chat</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Insights */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('insights')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={`${underlineClass} flex items-center space-x-1 text-sm font-medium`}>
                                Agro Insights <ChevronDown size={14} />
                            </button>
                            {openMenu === 'insights' && (
                                <div className="absolute left-0 top-full pt-2">
                                    <div className="bg-black/95 border border-gray-700 rounded-xl p-4 shadow-lg w-56">
                                        <Link href="/news" className="block py-2 text-sm hover:text-green-400">Weather Updates</Link>
                                        <Link href="/tips" className="block py-2 text-sm hover:text-green-400">Market Prices & Trends</Link>
                                        <Link href="/research" className="block py-2 text-sm hover:text-green-400">Farming Tips | Blog</Link>
                                        <Link href="/research" className="block py-2 text-sm hover:text-green-400">Data & Analytics</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Farmers */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('farmers')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={`${underlineClass} flex items-center space-x-1 text-sm font-medium`}>
                                For Farmers <ChevronDown size={14} />
                            </button>
                            {openMenu === 'farmers' && (
                                <div className="absolute left-0 top-full pt-2">
                                    <div className="bg-black/95 border border-gray-700 rounded-xl p-4 shadow-lg w-56">
                                        <Link href="/education" className="block py-2 text-sm hover:text-green-400">Training & Education</Link>
                                        <Link href="/education" className="block py-2 text-sm hover:text-green-400">Farmer Registration</Link>
                                        <Link href="/grants" className="block py-2 text-sm hover:text-green-400">Join Cooperative | Farmer Groups </Link>
                                        <Link href="/community" className="block py-2 text-sm hover:text-green-400">Meet Extension Agents</Link>
                                        <Link href="/community" className="block py-2 text-sm hover:text-green-400">USSD Access Guide</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Partners */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('partners')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className={`${underlineClass} flex items-center space-x-1 text-sm font-medium`}>
                                Partners <ChevronDown size={14} />
                            </button>
                            {openMenu === 'partners' && (
                                <div className="absolute left-0 top-full pt-2">
                                    <div className="bg-black/95 border border-gray-700 rounded-xl p-4 shadow-lg w-56">
                                        <Link href="/organizations" className="block py-2 text-sm hover:text-green-400">Organizations</Link>
                                        <Link href="/investors" className="block py-2 text-sm hover:text-green-400">Investors</Link>
                                        <Link href="/join" className="block py-2 text-sm hover:text-green-400">Become a Partner</Link>
                                        <Link href="/join" className="block py-2 text-sm hover:text-green-400">Advertise With Us</Link>
                                        <Link href="/join" className="block py-2 text-sm hover:text-green-400">Reasearch And Innovation Partnerships</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-5">
                    <button className="flex items-center space-x-1 hover:text-green-400 transition">
                        <Globe size={18} />
                        <span className="text-sm">EN</span>
                    </button>
                    <Link href="/login" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                        Login
                    </Link>
                    <Link href="/signup" className="bg-white text-green-600 hover:bg-green-100 px-4 py-2 rounded-lg text-sm font-medium transition">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
