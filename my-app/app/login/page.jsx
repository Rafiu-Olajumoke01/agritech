'use client'
import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, Leaf, User, ArrowRight, Sparkles } from 'lucide-react';

export default function AgroStackLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('farmer');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    setFormData({
      ...formData,
      role: type,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        console.log("User created:", data);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong");
    }
  }
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Login Card */}
      <div
        className={`relative z-10 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl transition-all duration-1000 flex flex-col h-[80vh] overflow-y-auto no-scrollbar ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Header */}
        <div className="text-center mb-6 flex-shrink-0">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Welcome Back</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Sign in to <span className="text-green-500">AgroStack</span>
          </h1>
          <p className="text-gray-400 text-sm">Access your account and continue your journey</p>
        </div>

        {/* Account Type Selection */}
        <div className="mb-5 grid grid-cols-2 gap-3 flex-shrink-0">
          <button
            onClick={() => setAccountType('farmer')}
            className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${accountType === 'farmer'
              ? 'border-green-500 bg-green-500/20 text-white scale-105'
              : 'border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600'
              }`}
          >
            <Leaf className="w-5 h-5 mx-auto mb-1" />
            <span className="text-sm font-medium">Farmer</span>
          </button>
          <button
            onClick={() => setAccountType('buyer')}
            className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${accountType === 'buyer'
              ? 'border-green-500 bg-green-500/20 text-white scale-105'
              : 'border-gray-700 bg-gray-900/50 text-gray-400 hover:border-gray-600'
              }`}
          >
            <User className="w-5 h-5 mx-auto mb-1" />
            <span className="text-sm font-medium">Buyer</span>
          </button>
        </div>

        {/* Login Form */}
        <div className="space-y-4 flex-grow">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-11 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
            />
            <button
            type='button'
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <span className="text-sm text-green-400 hover:text-green-300 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2 group hover:scale-105">
            <span>Sign In</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6 flex-shrink-0">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-900 text-gray-400">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          <button className="bg-gray-900/50 border border-gray-700 hover:border-gray-600 hover:scale-105 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-medium">Google</span>
          </button>
          <button className="bg-gray-900/50 border border-gray-700 hover:border-gray-600 hover:scale-105 text-white px-4 py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>

        {/* Create Account */}
        <div className="text-center mt-6 flex-shrink-0">
          <p className="text-sm text-gray-400">
            Don’t have an account?{' '}
            <span className="text-green-400 ml-2 hover:text-green-300 cursor-pointer font-medium">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
