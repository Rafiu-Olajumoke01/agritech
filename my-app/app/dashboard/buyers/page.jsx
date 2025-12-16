'use client';
import React, { useState } from 'react';
import {
  Home,
  Search,
  Heart,
  ShoppingCart,
  Box,
  MessageSquare,
  Bell,
  User,
  X,
  ArrowRight,
  DollarSign,
  Calendar,
  Star
} from 'lucide-react';

/**
 * Buyer Dashboard - Dark Theme (Next.js client component)
 * Paste as: app/dashboard/buyer/page.jsx  (or any route you use)
 *
 * Notes:
 * - Mock data only (no backend wiring).
 * - Chat drawer slides from the right (keeps sidebar fixed).
 * - Layout matches the Farmer Dashboard style: dark + green accents.
 */

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'browse' | 'favorites' | 'orders'
  const [chatOpen, setChatOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [messages, setMessages] = useState([
    { id: 1, from: 'farmer', text: 'Hi — fresh maize available today.' },
    { id: 2, from: 'buyer', text: 'Great — how much per bag?' },
  ]);
  const [chatInput, setChatInput] = useState('');

  const featured = [
    { id: 1, name: 'Maize (25kg)', price: 5200, farmer: 'Ade Farms', location: 'Lagos' },
    { id: 2, name: 'Yam Tubers (per tuber)', price: 2500, farmer: 'Ikechi Agro', location: 'Ibadan' },
    { id: 3, name: 'Tomatoes (basket)', price: 1200, farmer: 'Blessing Agro', location: 'Kano' },
  ];

  const recentOrders = [
    { id: 'B-1001', product: 'Maize', qty: '2 bags', amount: 10400, status: 'Pending' },
    { id: 'B-1002', product: 'Tomatoes', qty: '3 baskets', amount: 3600, status: 'Delivered' },
  ];

  function addToCart(product) {
    setCart((c) => [...c, product]);
  }

  function sendMessage(e) {
    e?.preventDefault();
    if (!chatInput.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: 'buyer', text: chatInput }]);
    setChatInput('');
  }

  return (
    <div className="min-h-screen bg-[#071014] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0e1111] border-r border-green-900/20 p-6 flex flex-col">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow">
              <span className="text-black font-extrabold">A</span>
            </div>
            <div>
              <div className="text-xl font-bold">AgroStack</div>
              <div className="text-xs text-green-300/80">Buyer Panel</div>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 text-sm">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${activeTab === 'dashboard' ? 'bg-green-600 text-black' : 'hover:bg-white/5'}`}
            >
              <Home className="w-4 h-4" /> <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('browse')}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${activeTab === 'browse' ? 'bg-green-600 text-black' : 'hover:bg-white/5'}`}
            >
              <Search className="w-4 h-4" /> <span>Browse Products</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${activeTab === 'favorites' ? 'bg-green-600 text-black' : 'hover:bg-white/5'}`}
            >
              <Heart className="w-4 h-4" /> <span>Saved Items</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${activeTab === 'orders' ? 'bg-green-600 text-black' : 'hover:bg-white/5'}`}
            >
              <ShoppingCart className="w-4 h-4" /> <span>My Orders</span>
            </button>

            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition"
            >
              <MessageSquare className="w-4 h-4" /> <span>Messages</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs text-green-200/80 mb-3">
            <div>Cart</div>
            <div className="font-medium">{cart.length}</div>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-500 text-black font-semibold px-4 py-2 rounded-md">
            Checkout
          </button>
          <button className="w-full mt-3 text-sm text-gray-300 hover:text-red-500 flex items-center gap-2">
            <LogOutIcon className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Top bar */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-green-300">Welcome back — Shopper</h1>
            <p className="text-sm text-gray-400">Find fresh produce from trusted farmers</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block relative">
              <input className="pl-10 pr-4 py-2 rounded-md bg-[#021515] border border-green-900/20 text-sm w-[360px] focus:outline-none" placeholder="Search produce, farmers..." />
              <Search className="absolute left-3 top-2.5 text-green-300 w-4 h-4" />
            </div>

            <button onClick={() => setChatOpen(true)} className="p-2 rounded-full bg-[#0b1111] hover:bg-white/5 transition">
              <MessageSquare className="w-5 h-5 text-green-300" />
            </button>

            <button className="p-2 rounded-full bg-[#0b1111] hover:bg-white/5 transition">
              <Bell className="w-5 h-5 text-green-300" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-sm text-green-200">Hi, Jummy</div>
              <div className="w-9 h-9 rounded-full bg-green-600 text-black flex items-center justify-center font-semibold">J</div>
            </div>
          </div>
        </header>

        {/* Dashboard / Browse / Favorites / Orders */}
        {activeTab === 'dashboard' && (
          <>
            {/* Top stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard title="Active Orders" value="3" icon={<ShoppingCart className="w-5 h-5" />} />
              <StatCard title="Saved Items" value="10" icon={<Heart className="w-5 h-5" />} />
              <StatCard title="Completed Orders" value="8" icon={<Calendar className="w-5 h-5" />} />
              <StatCard title="Total Spent" value="₦145,000" icon={<DollarSign className="w-5 h-5" />} />
            </section>

            {/* Featured produce */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Featured produce</h2>
                <div className="text-sm text-green-300">Popular this week</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((p) => (
                  <div key={p.id} className="bg-[#0b1111] border border-green-900/20 rounded-xl p-4">
                    <div className="h-36 bg-[#081212] rounded-md mb-3" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{p.name}</h3>
                        <div className="text-xs text-gray-400">{p.farmer} • {p.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-300 font-semibold">₦{p.price.toLocaleString()}</div>
                        <button onClick={() => addToCartAndNotify(p)} className="mt-2 bg-green-600 text-black text-xs px-3 py-1 rounded-md">Add</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Orders */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">My Recent Orders</h2>
                <a className="text-sm text-green-300 hover:underline flex items-center gap-1">See all <ArrowRight className="w-3 h-3" /></a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentOrders.map((o) => (
                  <div key={o.id} className="bg-[#0b1111] border border-green-900/20 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{o.product} • {o.qty}</div>
                      <div className="text-xs text-gray-400">Order {o.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-300 font-semibold">₦{o.amount.toLocaleString()}</div>
                      <div className={`text-xs mt-1 ${o.status === 'Delivered' ? 'text-green-300' : 'text-yellow-300'}`}>{o.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'browse' && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Browse Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((p) => (
                <div key={p.id} className="bg-[#0b1111] border border-green-900/20 rounded-xl p-4">
                  <div className="h-36 bg-[#081212] rounded-md mb-3" />
                  <h3 className="font-semibold">{p.name}</h3>
                  <div className="text-xs text-gray-400">{p.farmer} • {p.location}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-green-300 font-semibold">₦{p.price.toLocaleString()}</div>
                    <div className="flex gap-2">
                      <button onClick={() => addToCartAndNotify(p)} className="bg-green-600 text-black px-3 py-1 rounded-md text-sm">Add</button>
                      <button onClick={() => setChatOpen(true)} className="bg-white/5 px-3 py-1 rounded-md text-sm">Message</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'favorites' && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Saved Items</h2>
            <div className="text-gray-400">No saved items yet. Save a product to see it here.</div>
          </section>
        )}

        {activeTab === 'orders' && (
          <section>
            <h2 className="text-lg font-semibold mb-4">My Orders</h2>
            <div className="space-y-4">
              {recentOrders.map(o => (
                <div key={o.id} className="bg-[#0b1111] border border-green-900/20 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{o.product}</div>
                    <div className="text-xs text-gray-400">Order {o.id} • {o.qty}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-300 font-semibold">₦{o.amount.toLocaleString()}</div>
                    <div className={`text-xs mt-1 ${o.status === 'Delivered' ? 'text-green-300' : 'text-yellow-300'}`}>{o.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Chat Drawer (slides from the right) */}
      <div className={`fixed top-0 right-0 h-full md:w-[420px] w-full bg-[#081010] border-l border-green-900/20 transform transition-transform duration-300 z-50 ${chatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-green-900/10">
          <div>
            <div className="text-lg font-semibold">Messages</div>
            <div className="text-xs text-gray-400">Chat with farmers</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-green-300">{messages.length} msgs</div>
            <button onClick={() => setChatOpen(false)} className="p-2 rounded-md hover:bg-white/5">
              <X className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 h-[calc(100%-128px)] overflow-y-auto space-y-3">
          {messages.map((m) => (
            <div key={m.id} className={`${m.from === 'buyer' ? 'bg-[#05241f] text-green-200 ml-auto' : 'bg-[#0f1919] text-gray-200'} max-w-[80%] p-3 rounded-lg`}>
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="p-4 border-t border-green-900/10 flex items-center gap-3">
          <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type a message..." className="flex-1 p-3 rounded-md bg-[#071111] border border-green-900/10 text-sm focus:outline-none" />
          <button type="submit" className="bg-green-600 text-black px-4 py-2 rounded-md">Send</button>
        </form>
      </div>
    </div>
  );

  // local helpers
  function addToCartAndNotify(p) {
    setCart((c) => [...c, p]);
    // subtle notification (replace with toast in your app)
    // eslint-disable-next-line no-alert
    alert(`${p.name} added to cart`);
  }

  function sendMessage(e) {
    e?.preventDefault();
    if (!chatInput.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: 'buyer', text: chatInput }]);
    setChatInput('');
  }
}

/* ---------- Small UI components ---------- */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#0b1111] border border-green-900/10 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-300">{title}</div>
        <div className="text-2xl font-bold text-green-300">{value}</div>
      </div>
      <div className="bg-white/5 p-2 rounded-md">{icon}</div>
    </div>
  )
}

function LogOutIcon(props) {
  // simple logout icon (small wrapper for lucide)
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
}
