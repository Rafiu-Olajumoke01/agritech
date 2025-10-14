import React from 'react';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Globe,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';

export default function AgroStackFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-green-500/20">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-extrabold text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-semibold tracking-wide">AgroStack</span>
                  <div className="text-xs text-green-400">Africa's #1 Platform</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering African farmers with technology. Trade, secure, import, and export agricultural products seamlessly.
              </p>
              
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Verified & Secure Platform</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'How It Works', 'Marketplace', 'Farmers Hub', 'Success Stories', 'Blog & News'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Resources</h3>
              <ul className="space-y-3">
                {['Help Center', 'USSD Guide', 'Pricing', 'API Documentation', 'Partner Program', 'Terms & Conditions'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Get In Touch</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-green-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:support@agrostack.com" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                      support@agrostack.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-green-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href="tel:+234800000000" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                      +234 800 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-green-400 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 border-t border-green-500/20 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} AgroStack. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 mr-2">Follow us:</span>
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Youtube, label: 'YouTube' }
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/40 rounded-full flex items-center justify-center transition-all group"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}