'use client'

import React, { useState } from 'react';
import {
    Filter,
    MapPin,
    Star,
    Users,
    ShoppingCart,
    Eye,
    ArrowRight,
    Package
} from 'lucide-react';
import Link from 'next/link';

export default function AgroStackMarketplace() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [favorites, setFavorites] = useState(new Set());

    const categories = [
        'All', 'Vegetables', 'Fruits', 'Grains', 'Legumes', 'Livestock', 'Dairy', 'Seeds'
    ];

    const products = [
        { id: 1, name: 'Premium Tomatoes', farmer: 'John Adebayo', location: 'Lagos, Nigeria', price: '₦2,500', unit: 'per basket', rating: 4.8, reviews: 124, image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528', category: 'Vegetables', quantity: '50 baskets available' },
        { id: 2, name: 'Fresh Cassava', farmer: 'Amina Mohammed', location: 'Kano, Nigeria', price: '₦1,800', unit: 'per bag', rating: 4.6, reviews: 89, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccS0tzJegzIdPVe6sRtut8CK7Ih5sFL55DA&s', category: 'Vegetables', quantity: '200 bags available' },
        { id: 3, name: 'Plantains', farmer: 'David Okoro', location: 'Ogun, Nigeria', price: '₦3,200', unit: 'per bunch', rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Fruits', quantity: '80 bunches available' },
        { id: 4, name: 'White Rice', farmer: 'Sarah Okafor', location: 'Kebbi, Nigeria', price: '₦45,000', unit: 'per ton', rating: 4.7, reviews: 203, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Grains', quantity: '15 tons available' },
        { id: 5, name: 'Fresh Corn', farmer: 'Ibrahim Yusuf', location: 'Kaduna, Nigeria', price: '₦25,000', unit: 'per ton', rating: 4.5, reviews: 167, image: 'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg', category: 'Grains', quantity: '30 tons available' },
        { id: 6, name: 'Cocoa', farmer: 'Musa Hassan', location: 'Sokoto, Nigeria', price: '₦950,000', unit: 'per ton', rating: 4.8, reviews: 98, image: '/cocoa.jpg', category: 'Cash Crops', quantity: '20 tons available' },
        { id: 7, name: 'Catfish', farmer: 'Blessing Eze', location: 'Delta, Nigeria', price: '₦2,200', unit: 'per kg', rating: 4.7, reviews: 145, image: 'https://afrimash.com/wp-content/uploads/2024/12/images-2.jpeg', category: 'Livestock', quantity: '300 kg available' },
        { id: 8, name: 'Eggs', farmer: 'Chinedu Obi', location: 'Enugu, Nigeria', price: '₦1,200', unit: 'per crate', rating: 4.9, reviews: 220, image: 'https://people.com/thmb/VRDWkXD21cB4CPE0E7fKA5ve9u8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(758x411:760x413)/Cartons-of-brown-eggs-packaged-at-a-plant-020525-tout-dac7850027434e4cbe2bb551f6999d2d.jpg', category: 'Livestock', quantity: '800 crates available' },
        { id: 9, name: 'Palm Oil', farmer: 'Grace Adeniran', location: 'Ondo, Nigeria', price: '₦18,000', unit: 'per 25L keg', rating: 4.6, reviews: 132, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-1FkOPs21oN8mFze_3G6cST6FGxXMqLbyw&s', category: 'Cash Crops', quantity: '200 kegs available' },
        { id: 10, name: 'Cocoa Beans', farmer: 'Abdulrahman Bello', location: 'Osun, Nigeria', price: '₦950,000', unit: 'per ton', rating: 4.8, reviews: 87, image: 'https://images.unsplash.com/photo-1615485737459-c7cc7a7a3a42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Cash Crops', quantity: '10 tons available' },
        { id: 11, name: 'Yam Tubers', farmer: 'Emeka Nwosu', location: 'Benue, Nigeria', price: '₦750', unit: 'per tuber', rating: 4.5, reviews: 64, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkv93LEetwP6xa2DchG-VVrxGvZtvGW494Q&s', category: 'Vegetables', quantity: '1,000 tubers available' },
        { id: 12, name: 'Groundnuts', farmer: 'Hauwa Sani', location: 'Kano, Nigeria', price: '₦6,500', unit: 'per bag', rating: 4.7, reviews: 112, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMgau4zIr9IXUFB0jHDMkLAxXJVAsLsrzbQ&s', category: 'Cash Crops', quantity: '150 bags available' },
        { id: 13, name: 'Watermelons', farmer: 'Tunde Afolabi', location: 'Oyo, Nigeria', price: '₦4,500', unit: 'per crate', rating: 4.6, reviews: 78, image: 'https://images.unsplash.com/photo-1592928307334-5e896d63c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Fruits', quantity: '60 crates available' },
        { id: 14, name: 'Red Onions', farmer: 'Bola Ajayi', location: 'Ekiti, Nigeria', price: '₦3,200', unit: 'per bag', rating: 4.4, reviews: 52, image: 'https://images.unsplash.com/photo-1617196039397-0dc2eb7b9d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Vegetables', quantity: '150 bags available' },
        { id: 15, name: 'Soybeans', farmer: 'Fatima Bello', location: 'Kano, Nigeria', price: '₦18,000', unit: 'per bag', rating: 4.7, reviews: 98, image: 'https://images.unsplash.com/photo-1623456789012-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Legumes', quantity: '75 bags available' },
        { id: 16, name: 'Goat Meat', farmer: 'Samuel Okoye', location: 'Enugu, Nigeria', price: '₦2,800', unit: 'per kg', rating: 4.9, reviews: 67, image: 'https://images.unsplash.com/photo-1603070101234-1234abcd5678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Livestock', quantity: '100 kg available' },
        { id: 17, name: 'Cow Milk', farmer: 'Chuka Nnamdi', location: 'Abia, Nigeria', price: '₦1,200', unit: 'per litre', rating: 4.5, reviews: 84, image: 'https://images.unsplash.com/photo-1589987201234-abc123def456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Dairy', quantity: '200 litres available' },
        { id: 18, name: 'Rice Seeds', farmer: 'Aisha Yusuf', location: 'Kebbi, Nigeria', price: '₦5,000', unit: 'per packet', rating: 4.6, reviews: 50, image: 'https://images.unsplash.com/photo-1609998123456-1234abcd5678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Seeds', quantity: '120 packets available' },
        { id: 19, name: 'Bananas', farmer: 'Emmanuel Okonkwo', location: 'Ogun, Nigeria', price: '₦2,500', unit: 'per bunch', rating: 4.8, reviews: 140, image: 'https://images.unsplash.com/photo-1587544212345-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Fruits', quantity: '90 bunches available' },
        { id: 20, name: 'Cabbage', farmer: 'Ngozi Nwafor', location: 'Enugu, Nigeria', price: '₦1,800', unit: 'per head', rating: 4.7, reviews: 60, image: 'https://images.unsplash.com/photo-1601234567890-abcdef123456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', category: 'Vegetables', quantity: '150 heads available' }
    ];

    // Filtered and limited products
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const limitedProducts = filteredProducts.slice(0, 12);

    const toggleFavorite = (productId) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(productId)) newFavorites.delete(productId);
        else newFavorites.add(productId);
        setFavorites(newFavorites);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-xl md:text-5xl font-bold mb-4">
                        Fresh <span className="text-green-500">Produce</span> Marketplace
                    </h1>
                    <p className="text-sm text-gray-300 mb-2 max-w-2xl mx-auto">
                        Connect directly with farmers across Africa for the freshest produce at the best prices
                    </p>
                </div>
            </div>

            {/* Categories & Filters */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-green-500 text-black'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-green-500/30 px-4 py-2 rounded-md text-sm">
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>

                        <div className="flex bg-white/10 rounded-md overflow-hidden">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 ${viewMode === 'grid' ? 'bg-green-500 text-black' : 'text-gray-300'}`}
                            >
                                <Package className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 ${viewMode === 'list' ? 'bg-green-500 text-black' : 'text-gray-300'}`}
                            >
                                <Eye className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className={`grid gap-6 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-1'
                    }`}>
                    {limitedProducts.map(product => (
                        <div
                            key={product.id}
                            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-green-400">{product.price}</div>
                                        <div className="text-xs text-gray-400">{product.unit}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{product.rating}</span>
                                    <span className="text-sm text-gray-400">({product.reviews})</span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <Users className="w-4 h-4 text-green-400" />
                                        <span>{product.farmer}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <MapPin className="w-4 h-4 text-green-400" />
                                        <span>{product.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <Package className="w-4 h-4 text-green-400" />
                                        <span>{product.quantity}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded-md transition-colors text-sm flex items-center justify-center gap-2">
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 border border-green-500/30 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                {filteredProducts.length > 12 && (
                    <div className="text-center mt-10">
                        <Link
                            href="/marketplace"
                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium"
                        >
                            View All Products
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* No Products Message */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-semibold mb-2">No products found</h3>
                        <p>Try adjusting your search or category filters</p>
                    </div>
                )}
            </div>
        </div>
    );
}
