"use client";
import { useState } from "react";
import { MessageCircle, PlusCircle, ShoppingBag, LogOut } from "lucide-react";

export default function FarmerDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const products = [
    { id: 1, name: "Fresh Tomatoes", price: "₦10,000", quantity: "50kg" },
    { id: 2, name: "Yam Tubers", price: "₦25,000", quantity: "100kg" },
    { id: 3, name: "Plantain Bunches", price: "₦15,000", quantity: "70kg" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-gray-800 flex flex-col p-6">
        <h1 className="text-2xl font-bold text-green-500 mb-8">AgroStack</h1>

        <nav className="flex flex-col space-y-4 text-sm font-medium">
          <button
            onClick={() => setActivePage("dashboard")}
            className={`flex items-center space-x-2 p-2 rounded-md ${
              activePage === "dashboard"
                ? "bg-green-600 text-black"
                : "hover:bg-white/10"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActivePage("post")}
            className={`flex items-center space-x-2 p-2 rounded-md ${
              activePage === "post"
                ? "bg-green-600 text-black"
                : "hover:bg-white/10"
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span>Post Produce</span>
          </button>

          <button
            onClick={() => setActivePage("messages")}
            className={`flex items-center space-x-2 p-2 rounded-md ${
              activePage === "messages"
                ? "bg-green-600 text-black"
                : "hover:bg-white/10"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Messages</span>
          </button>
        </nav>

        <div className="mt-auto">
          <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-red-500 transition">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === "dashboard" && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Your Product Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#111] border border-gray-800 p-5 rounded-xl hover:border-green-600 transition"
                >
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">Price: {item.price}</p>
                  <p className="text-gray-400 text-sm mb-3">Qty: {item.quantity}</p>
                  <button className="bg-green-600 hover:bg-green-500 text-black font-medium px-4 py-2 rounded-md text-sm">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "post" && (
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Post New Produce</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Produce Name"
                className="w-full p-3 bg-[#111] border border-gray-700 rounded-md focus:outline-none focus:border-green-600"
              />
              <input
                type="text"
                placeholder="Price"
                className="w-full p-3 bg-[#111] border border-gray-700 rounded-md focus:outline-none focus:border-green-600"
              />
              <input
                type="text"
                placeholder="Quantity"
                className="w-full p-3 bg-[#111] border border-gray-700 rounded-md focus:outline-none focus:border-green-600"
              />
              <button className="bg-green-600 hover:bg-green-500 text-black font-medium px-6 py-3 rounded-md w-full">
                Post Produce
              </button>
            </form>
          </div>
        )}

        {activePage === "messages" && <ChatWindow onBack={() => setActivePage("dashboard")} />}
      </main>
    </div>
  );
}

function ChatWindow({ onBack }) {
  const [messages, setMessages] = useState([
    { from: "buyer", text: "Hello! Are the yams still available?" },
    { from: "farmer", text: "Yes, they are fresh and ready for delivery!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setMessages([...messages, { from: "farmer", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-[#0d0d0d] h-full rounded-lg border border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Chat with Buyer</h2>
        <button
          onClick={onBack}
          className="bg-green-600 hover:bg-green-500 text-black text-sm px-3 py-1 rounded-md"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-3 rounded-lg ${
              msg.from === "farmer"
                ? "bg-green-600 text-black ml-auto"
                : "bg-[#222] text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={sendMessage}
        className="p-4 border-t border-gray-800 flex items-center space-x-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-[#111] border border-gray-700 rounded-md p-3 text-sm focus:outline-none focus:border-green-600"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-black font-semibold px-5 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}
