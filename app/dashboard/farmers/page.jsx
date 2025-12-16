'use client';
import React, { useState } from 'react';
import {
  Home,
  PlusCircle,
  Package,
  MessageSquare,
  Bell,
  User,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  ArrowRight,
  Edit2,
  Trash2,
  X
} from 'lucide-react';

export default function FarmerDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fresh Tomatoes', price: 10000, quantity: '50kg', status: 'Active', orders: 12 },
    { id: 2, name: 'Yam Tubers', price: 25000, quantity: '100kg', status: 'Active', orders: 8 },
    { id: 3, name: 'Plantain Bunches', price: 15000, quantity: '70kg', status: 'Active', orders: 15 },
    { id: 4, name: 'Fresh Maize', price: 5200, quantity: '25kg', status: 'Active', orders: 20 },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });

  const recentOrders = [
    { id: 'ORD-2001', buyer: 'Jummy Store', product: 'Tomatoes', qty: '3 baskets', amount: 3600, status: 'Pending' },
    { id: 'ORD-2002', buyer: 'Lagos Market', product: 'Yam', qty: '2 bags', amount: 50000, status: 'Completed' },
    { id: 'ORD-2003', buyer: 'Fresh Groceries', product: 'Maize', qty: '5 bags', amount: 26000, status: 'In Transit' },
  ];

const handleAddProduct = async () => {
  if (!newProduct.name || !newProduct.price || !newProduct.quantity) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY0Nzc0MjE4LCJpYXQiOjE3NjQ3NzA2MTksImp0aSI6ImMwOGVhYTMzYTRkYTRlODg4NGNhMjg2YjM3YzVmMjhiIiwidXNlcl9pZCI6IjE4In0.w7a7lZSqJhYgWkgZhRgr19nfULUz0VlStXCBcAxkxqU";

    const productPayload = {
      crop_type: newProduct.name,
      price_per_unit: parseFloat(newProduct.price),
      quantity_with_unit: newProduct.quantity
    };

    const response = await fetch("/api/farmers/products/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(productPayload),
    });

    // ✅ log backend error if request fails
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Backend error:", errorData);
      alert(errorData.message || "Failed to post product");
      return;
    }

    const createdProduct = await response.json();
    console.log("Product created:", createdProduct); // ✅ log created product

    setProducts([...products, {
      id: createdProduct.id,
      name: createdProduct.crop_type,
      price: createdProduct.price_per_unit,
      quantity: createdProduct.quantity_with_unit,
      orders: 0,
      status: "Active"
    }]);

    setNewProduct({ name: "", price: "", quantity: "" });
    setShowAddModal(false);

    alert("Product posted successfully!");
  } catch (err) {
    console.error("Request error:", err);
    alert("Something went wrong. Please check the console for details.");
  }
};


  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
                <p className="text-xs text-gray-500">Farmer Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Post Produce</span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 ml-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">Ade Farms</p>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ade 👨‍🌾</h2>
          <p className="text-gray-600">Manage your produce and connect with buyers</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{products.length}</h3>
            <p className="text-sm text-gray-600">Active Products</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">55</h3>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">+23%</h3>
            <p className="text-sm text-gray-600">Growth Rate</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">₦285,000</h3>
            <p className="text-sm text-green-50">Total Revenue</p>
          </div>
        </div>

        {/* Your Products */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Products</h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
            >
              Add New <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-50 relative">
                  <div className="absolute inset-0 bg-green-600/5"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 transition">
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{product.quantity}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Orders</p>
                      <p className="text-xl font-bold text-green-600">{product.orders}</p>
                    </div>
                  </div>

                  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                    {product.status}
                  </span>
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
                      <ShoppingBag className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{order.buyer}</h4>
                      <p className="text-sm text-gray-500">{order.id} • {order.product} • {order.qty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">₦{order.amount.toLocaleString()}</p>
                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                      }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Post New Produce</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Fresh Tomatoes"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₦)</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  placeholder="e.g. 10000"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input
                  type="text"
                  value={newProduct.quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                  placeholder="e.g. 50kg"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition shadow-sm"
                >
                  Post Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}