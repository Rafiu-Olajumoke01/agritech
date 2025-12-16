"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from '../component/Navbar/Navbar';

const AllProductsPage = () => {
    const pathname = usePathname();

    const products = [
        { id: 1, name: "Fresh Tomatoes", price: 1500, image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg", rating: 4.8, category: "Vegetables", location: "Lagos", stock: true },
        { id: 2, name: "Organic Plantain", price: 2500, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.6, category: "Fruits", location: "Ogun", stock: true },
        { id: 3, name: "Corn (Maize)", price: 1200, image: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg", rating: 4.5, category: "Grains", location: "Kaduna", stock: true },
        { id: 4, name: "Yam Tubers", price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkv93LEetwP6xa2DchG-VVrxGvZtvGW494Q&s", rating: 4.9, category: "Tubers", location: "Benue", stock: false },
        { id: 5, name: "Groundnut (Peanuts)", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMgau4zIr9IXUFB0jHDMkLAxXJVAsLsrzbQ&s", rating: 4.7, category: "Nuts", location: "Kano", stock: true },
        { id: 6, name: "Fresh Carrots", price: 1000, image: "https://images.unsplash.com/photo-1617196039397-0dc2eb7b9d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.6, category: "Vegetables", location: "Jos", stock: true },
        { id: 7, name: "Watermelon", price: 2000, image: "https://images.unsplash.com/photo-1592928307334-5e896d63c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.8, category: "Fruits", location: "Oyo", stock: true },
        { id: 8, name: "Brown Beans", price: 3000, image: "https://images.unsplash.com/photo-1623456789012-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.7, category: "Grains", location: "Katsina", stock: true },
        { id: 9, name: "Cassava", price: 2200, image: "https://images.unsplash.com/photo-1587544212345-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.5, category: "Tubers", location: "Ekiti", stock: true },
        { id: 10, name: "Cashew Nuts", price: 4000, image: "https://images.unsplash.com/photo-1601234567890-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", rating: 4.9, category: "Nuts", location: "Kwara", stock: true },
    ];

    const categories = ["All", "Fruits", "Vegetables", "Grains", "Tubers", "Nuts"];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter by category and search
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Pagination
    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 p-6 md:p-10">
            {/* Navbar */}
            <Navbar />

            {/* Page Header */}
            <div className="mb-6 mt-5 ms-5">
                <h1 className="text-3xl font-bold text-green-400 mb-2 mt-10">Marketplace</h1>
                <p className="text-gray-300">Explore farm-fresh produce directly from trusted farmers.</p>
            </div>

            {/* Search & Categories */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 ms-5">
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search for produce, location, category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/10 border border-green-500/30 text-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-500"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
                            className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${selectedCategory === category
                                    ? "bg-green-500 text-white"
                                    : "bg-white/10 border border-green-500/30 text-gray-200 hover:bg-white/20"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ms-5">
                {currentProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/10 border border-green-500/20 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/20 transition-all"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-bold text-green-300">{product.name}</h2>
                            <p className="text-sm text-gray-300 mt-1">{product.location}</p>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-xl font-semibold text-green-400">₦{product.price}</p>
                                <span className="text-yellow-400 text-sm">⭐ {product.rating}</span>
                            </div>

                            <Link href={`/marketplace/${product.id}`}>
                                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm transition-all">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-md ${currentPage === index + 1
                                ? "bg-green-500 text-white"
                                : "bg-white/10 text-gray-200 border border-green-500/30 hover:bg-white/20"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
