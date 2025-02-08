import React from "react";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import googleplay from './GooglePlay.png'
import apstore from './AppStore.png'
import qrcode from './Qr Code.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Subscribe Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Exclusive</h2>
            <h3 className="text-base sm:text-lg">Subscribe</h3>
            <p className="text-sm sm:text-base">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-md max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent p-2 text-sm sm:text-base flex-1 outline-none placeholder:text-gray-400"
              />
              <button className="p-2 hover:bg-white/10 transition-colors rounded-r-md">
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Support</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p className="hover:text-gray-300 transition-colors cursor-pointer">
                exclusive@gmail.com
              </p>
              <p className="hover:text-gray-300 transition-colors cursor-pointer">
                +88015-88888-9999
              </p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Account</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                <li key={item} className="hover:text-gray-300 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Quick Link</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                <li key={item} className="hover:text-gray-300 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Download App</h2>
            <p className="text-xs sm:text-sm">Save $3 with App New User Only</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-2 rounded-lg shrink-0">
                <img src={qrcode} alt="QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-row sm:flex-col gap-2 items-start">
                <img src={googleplay} alt="Google Play" className="h-8 sm:h-10 w-auto object-contain" />
                <img src={apstore} alt="App Store" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
            </div>

            <div className="flex gap-4 items-center">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button 
                  key={index}
                  className="hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm sm:text-base text-gray-400">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);