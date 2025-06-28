
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    setTimeout(() => setShowContact(false), 3000);
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/funoun_by_fatima?igsh=MXFvbWZ1eGh2djg4NA==', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/18pStMaAAX/', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
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
              <button onClick={handleInstagramClick}>
                <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              </button>
              <button onClick={handleFacebookClick}>
                <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              </button>
              <button onClick={handleContactClick}>
                <Mail className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Get in Touch</h6>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">fatimahomsy.designer@gmail.com</span>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Interested in a custom piece? Send me a message and let's create something beautiful together.
              </p>
            </div>
          </div>
        </div>
        
        {showContact && (
          <div className="mt-8 p-4 bg-orange-500 rounded-lg">
            <p className="text-white text-center">To order please contact us on this number: 76322468</p>
          </div>
        )}
        
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
