"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Sprout } from "lucide-react";

export default function SignupPage() {
  // Corrected formData keys to match Django model
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "farmer", // default role
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle account type selection
  const handleAccountTypeChange = (type) => {
    setFormData({
      ...formData,
      role: type,
    });
  };

  // Handle form submission
 const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/users/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (response.status === 201) {
      // Signup successful
      window.location.href = "/login";
    } else {
      alert("Signup failed. Check your input.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("An unexpected error occurred. Please try again.");
  }
};

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-slate-900/50 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-8 shadow-2xl">
          {/* Logo & Header */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8 text-center">
            <motion.div variants={itemVariants} className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sprout className="text-white" size={28} />
              </div>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent mb-2">
              AgroStack
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-400 text-sm">
              Join us and revolutionize agriculture with technology
            </motion.p>
          </motion.div>

          {/* Account Type */}
          <motion.div variants={itemVariants} className="mb-8 p-1 bg-slate-800/50 rounded-xl flex gap-2">
            {["farmer", "buyer"].map((type) => (
              <button
                key={type}
                onClick={() => handleAccountTypeChange(type)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${formData.role === type ? "text-white" : "text-slate-400 hover:text-slate-300"}`}
              >
                {formData.role === type && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg" transition={{ duration: 0.3 }} />
                )}
                <span className="relative z-10">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </button>
            ))}
          </motion.div>

          {/* Form */}
          <div className="space-y-4">
            {/* Full Name */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                onFocus={() => setFocusedField("full_name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Full Name"
                className={`w-full bg-slate-800/30 border transition-all duration-300 rounded-xl pl-4 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:bg-slate-800/60 ${focusedField === "full_name" ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "border-slate-700/50 hover:border-slate-600/50"}`}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="Email Address"
                className={`w-full bg-slate-800/30 border transition-all duration-300 rounded-xl pl-4 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:bg-slate-800/60 ${focusedField === "email" ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "border-slate-700/50 hover:border-slate-600/50"}`}
                required
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder="Phone Number"
                className={`w-full bg-slate-800/30 border transition-all duration-300 rounded-xl pl-4 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:bg-slate-800/60 ${focusedField === "phone" ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "border-slate-700/50 hover:border-slate-600/50"}`}
                required
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants} className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                placeholder="Password"
                className={`w-full bg-slate-800/30 border transition-all duration-300 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:bg-slate-800/60 ${focusedField === "password" ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "border-slate-700/50 hover:border-slate-600/50"}`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </motion.div>

            {/* Submit */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              type="button"
              className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Create Account
            </motion.button>
          </div>

          {/* Footer */}
          <motion.p variants={itemVariants} className="text-slate-400 text-center mt-6 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              Sign In
            </a>
          </motion.p>
        </div>

        {/* Decorative */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-8 text-center text-xs text-slate-500">
          Secure and encrypted • Privacy protected
        </motion.div>
      </motion.div>
    </div>
  );
}
