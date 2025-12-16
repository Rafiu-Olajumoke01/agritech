'use client'
import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Search } from 'lucide-react';

const TrackOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-11-08',
      status: 'delivered',
      items: [
        { name: 'Organic Fertilizer', quantity: '50 bags', price: '$1,250' },
        { name: 'Hybrid Corn Seeds', quantity: '20 kg', price: '$400' }
      ],
      total: '$1,650',
      deliveryAddress: 'Green Valley Farm, Plot 45, Rural District',
      timeline: [
        { status: 'Order Placed', date: '2024-11-08', time: '10:30 AM', completed: true },
        { status: 'Processing', date: '2024-11-08', time: '02:15 PM', completed: true },
        { status: 'Shipped', date: '2024-11-09', time: '08:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2024-11-10', time: '07:30 AM', completed: true },
        { status: 'Delivered', date: '2024-11-10', time: '03:45 PM', completed: true }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-11-10',
      status: 'shipped',
      items: [
        { name: 'Drip Irrigation Kit', quantity: '1 set', price: '$850' },
        { name: 'Pesticide Spray', quantity: '10 liters', price: '$200' }
      ],
      total: '$1,050',
      deliveryAddress: 'Sunrise Farms, Highway Road, Agricultural Zone',
      timeline: [
        { status: 'Order Placed', date: '2024-11-10', time: '11:20 AM', completed: true },
        { status: 'Processing', date: '2024-11-10', time: '04:30 PM', completed: true },
        { status: 'Shipped', date: '2024-11-11', time: '09:15 AM', completed: true },
        { status: 'Out for Delivery', date: '2024-11-12', time: 'Expected', completed: false },
        { status: 'Delivered', date: '2024-11-12', time: 'Expected', completed: false }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-11-11',
      status: 'processing',
      items: [
        { name: 'Vegetable Seeds Mix', quantity: '5 kg', price: '$150' },
        { name: 'Bio Compost', quantity: '100 bags', price: '$2,000' }
      ],
      total: '$2,150',
      deliveryAddress: 'Harvest Fields, Lane 12, Farmland Estate',
      timeline: [
        { status: 'Order Placed', date: '2024-11-11', time: '09:45 AM', completed: true },
        { status: 'Processing', date: '2024-11-11', time: '02:00 PM', completed: true },
        { status: 'Shipped', date: 'Pending', time: '', completed: false },
        { status: 'Out for Delivery', date: 'Pending', time: '', completed: false },
        { status: 'Delivered', date: 'Pending', time: '', completed: false }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-700 border-green-300';
      case 'shipped': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'processing': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="w-5 h-5" />;
      case 'shipped': return <Truck className="w-5 h-5" />;
      case 'processing': return <Clock className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">Track Orders</h1>
          <p className="text-gray-500">Stay updated on your agricultural supply deliveries</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search order by ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-emerald-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 outline-none"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order List */}
          <div className="space-y-4">
            {filteredOrders.map(order => (
              <div
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className={`bg-white rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all cursor-pointer ${
                  selectedOrder?.id === order.id ? 'border-emerald-500' : 'border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{order.id}</h3>
                    <p className="text-sm text-gray-500">Placed on {order.date}</p>
                  </div>
                  <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)} {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>

                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{item.name} ({item.quantity})</span>
                      <span className="font-medium text-gray-800">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Total</span>
                  <span className="text-lg font-bold text-emerald-700">{order.total}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Details */}
          <div className="lg:sticky lg:top-8 h-fit">
            {selectedOrder ? (
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>

                <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Delivery Address</h3>
                      <p className="text-gray-600 text-sm">{selectedOrder.deliveryAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Timeline</h3>
                  {selectedOrder.timeline.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-emerald-500' : 'bg-gray-200'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                        {i < selectedOrder.timeline.length - 1 && (
                          <div className={`w-0.5 h-10 ${step.completed ? 'bg-emerald-400' : 'bg-gray-200'}`}></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className={`font-semibold ${step.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.status}
                        </h4>
                        <p className="text-sm text-gray-500">{step.date} {step.time && `• ${step.time}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select an order to view full details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrders;
