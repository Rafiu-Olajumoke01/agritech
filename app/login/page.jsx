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
    role: 'farmer',
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
      const res = await fetch('http://localhost:8000/api/users/login/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        alert("Login successful!");
        window.location.href = "/";
      } else {
        let errors = "";
        for (const key in data) {
          errors += `${key}: ${Array.isArray(data[key]) ? data[key].join(", ") : data[key]}\n`;
        }
        alert("Login failed:\n" + errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950 text-white flex items-center justify-center relative overflow-hidden px-4 py-16">
      {/* Animated Leaves Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating leaves */}
        <div className="absolute top-10 left-10 text-green-400/20 animate-bounce" style={{animationDuration: '6s', animationDelay: '0s'}}>
          <Leaf className="w-20 h-20 rotate-45" />
        </div>
        <div className="absolute top-32 right-20 text-emerald-400/15 animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}}>
          <Leaf className="w-16 h-16 -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-32 text-green-300/20 animate-bounce" style={{animationDuration: '7s', animationDelay: '2s'}}>
          <Leaf className="w-24 h-24 rotate-90" />
        </div>
        <div className="absolute top-1/2 right-10 text-teal-400/15 animate-bounce" style={{animationDuration: '9s', animationDelay: '0.5s'}}>
          <Leaf className="w-14 h-14 rotate-180" />
        </div>
        <div className="absolute bottom-40 right-40 text-green-500/20 animate-bounce" style={{animationDuration: '7.5s', animationDelay: '1.5s'}}>
          <Leaf className="w-18 h-18 -rotate-45" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-emerald-300/10 animate-bounce" style={{animationDuration: '10s', animationDelay: '3s'}}>
          <Leaf className="w-22 h-22 rotate-12" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Decorative farm elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-950/80 to-transparent z-0">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-800/40"></div>
      </div>

      {/* Login Card */}
      <div
        className={`relative z-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-6 w-full max-w-md shadow-2xl shadow-green-900/20 transition-all duration-1000 my-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Header */}
        <div className="text-center mb-4 flex-shrink-0">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border-2 border-green-500/40 rounded-full px-4 py-1.5 mb-3">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400 font-semibold">Welcome Back</span>
          </div>
          <h1 className="text-3xl font-bold mb-1 text-white">
            Sign in to <span className="text-green-500">AgroStack</span>
          </h1>
          <p className="text-gray-400 text-xs">Cultivate your farming success</p>
        </div>

        {/* Account Type Selection */}
        <div className="mb-6 grid grid-cols-2 gap-4 flex-shrink-0">
          <button
            type="button"
            onClick={() => handleAccountTypeChange('farmer')}
            className={`px-4 py-4 rounded-xl border-2 transition-all duration-300 ${accountType === 'farmer'
              ? 'border-green-600 bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105'
              : 'border-green-200 bg-white text-gray-600 hover:border-green-400 hover:bg-green-50'
              }`}
          >
            <Leaf className="w-6 h-6 mx-auto mb-1" />
            <span className="text-sm font-semibold">Farmer</span>
          </button>
          <button
            type="button"
            onClick={() => handleAccountTypeChange('buyer')}
            className={`px-4 py-4 rounded-xl border-2 transition-all duration-300 ${accountType === 'buyer'
              ? 'border-green-600 bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105'
              : 'border-green-200 bg-white text-gray-600 hover:border-green-400 hover:bg-green-50'
              }`}
          >
            <User className="w-6 h-6 mx-auto mb-1" />
            <span className="text-sm font-semibold">Buyer</span>
          </button>
        </div>

        {/* Login Form */}
        <div className="space-y-4 flex-grow">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-white border-2 border-green-200 rounded-xl pl-12 pr-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-white border-2 border-green-200 rounded-xl pl-12 pr-12 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <span className="text-sm text-green-600 hover:text-green-700 cursor-pointer font-medium">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 flex items-center justify-center space-x-2 group hover:scale-105"
          >
            <span>Sign In</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6 flex-shrink-0">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-green-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gradient-to-br from-white/95 to-green-50/95 text-gray-600 font-medium">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 flex-shrink-0">
          <button className="bg-white border-2 border-green-200 hover:border-green-400 hover:scale-105 hover:shadow-md text-gray-700 px-4 py-3 rounded-xl transition-all flex items-center justify-center space-x-2">
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
            <span className="text-sm font-semibold">Google</span>
          </button>
          <button className="bg-white border-2 border-green-200 hover:border-green-400 hover:scale-105 hover:shadow-md text-gray-700 px-4 py-3 rounded-xl transition-all flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-sm font-semibold">Facebook</span>
          </button>
        </div>

        {/* Create Account */}
        <div className="text-center mt-6 flex-shrink-0">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <span className="text-green-600 ml-1 hover:text-green-700 cursor-pointer font-semibold">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}