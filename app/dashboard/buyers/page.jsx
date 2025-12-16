'use client';
import React, { useState } from 'react';
import {
  Home,
  Search,
  Heart,
  ShoppingCart,
  MessageSquare,
  Bell,
  User,
  X,
  ArrowRight,
  DollarSign,
  Calendar
} from 'lucide-react';

export default function BuyerDashboard() {
  const [cart, setCart] = useState([]);

  const featured = [
    { id: 1, name: 'Fresh Maize', price: 5200, farmer: 'Ade Farms', location: 'Lagos', unit: '25kg' },
    { id: 2, name: 'Yam Tubers', price: 2500, farmer: 'Ikechi Agro', location: 'Ibadan', unit: 'per tuber' },
    { id: 3, name: 'Tomatoes', price: 1200, farmer: 'Blessing Agro', location: 'Kano', unit: 'basket' },
    { id: 4, name: 'Rice', price: 8500, farmer: 'Musa Farms', location: 'Kano', unit: '50kg' },
    { id: 5, name: 'Cassava', price: 1800, farmer: 'Grace Agro', location: 'Ogun', unit: '20kg' },
    { id: 6, name: 'Peppers', price: 900, farmer: 'Ade Farms', location: 'Lagos', unit: 'basket' },
  ];

  const recentOrders = [
    { id: 'ORD-1001', product: 'Maize', qty: '2 bags', amount: 10400, status: 'Delivered', date: 'Nov 8' },
    { id: 'ORD-1002', product: 'Tomatoes', qty: '3 baskets', amount: 3600, status: 'In Transit', date: 'Nov 10' },
    { id: 'ORD-1003', product: 'Rice', qty: '1 bag', amount: 8500, status: 'Processing', date: 'Nov 11' },
  ];

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgroStack</h1>
                <p className="text-xs text-gray-500">Your Farm Marketplace</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {cart.length}
                  </span>
                )}
              </button>
              <div className="flex items-center gap-2 ml-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">Jummy</p>
                  <p className="text-xs text-gray-500">Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Jummy 👋</h2>
          <p className="text-gray-600">Discover fresh produce directly from trusted farmers</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">3</h3>
            <p className="text-sm text-gray-600">Active Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-rose-600 bg-rose-50 px-3 py-1 rounded-full">Saved</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">12</h3>
            <p className="text-sm text-gray-600">Favorite Items</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur">Total</span>
            </div>
            <h3 className="text-3xl font-bold mb-1">₦145,000</h3>
            <p className="text-sm text-green-50">This Month</p>
          </div>
        </div>

        {/* Featured Products */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Fresh from Farms</h3>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition group">
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-600/5"></div>
                  <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-rose-50 transition">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-rose-500 transition" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.unit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <User className="w-3 h-3 text-green-600" />
                    </div>
                    <span>{product.farmer}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{product.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-medium transition flex items-center gap-2 shadow-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Orders */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recent Orders</h3>
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {recentOrders.map((order, idx) => (
              <div 
                key={order.id} 
                className={`p-5 hover:bg-gray-50 transition ${idx !== recentOrders.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{order.product}</h4>
                      <p className="text-sm text-gray-500">{order.id} • {order.qty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-gray-500 mb-1">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">₦{order.amount.toLocaleString()}</p>
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}