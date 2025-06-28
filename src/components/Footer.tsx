
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <h5 className="text-xl font-bold">FunounByFatima</h5>
                <p className="text-sm text-gray-400">Handcrafted with Love</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Every cup tells a story of passion, creativity, and craftsmanship. 
              Made with love by Fatima, each piece brings warmth to your daily moments.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Custom Orders</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Get in Touch</h6>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">fatima@funoun.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Made with love, worldwide</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FunounByFatima. All rights reserved. Made with ❤️ for cup lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
