import { Heart, Mail, Instagram, Facebook, Inbox } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96176322468', '_blank');
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
              <img
                src="public/icon/logo.jpg" // Make sure your logo is at public/icon/logo.png
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">FunounByFatima</h1>
              <p className="text-sm text-gray-600">Handcrafted with Love • Since 2019</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={handleInstagramClick} className="hover:opacity-80 transition">
              <Instagram className="w-6 h-6 text-gray-700 hover:text-purple-500" />
            </button>
            <button onClick={handleFacebookClick} className="hover:opacity-80 transition">
              <Facebook className="w-6 h-6 text-gray-700 hover:text-purple-500" />
            </button>
            <button onClick={handleWhatsAppClick} className="w-11 h-11 hover:scale-105 transition">
              <img src="public/icon/whatsapp.webp"  alt="WhatsApp"  />

            </button>
            <button onClick={handleContactClick} className="hover:opacity-80 transition">
              <Inbox className="w-6 h-6 text-gray-700 hover:text-purple-500" />
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            <button onClick={handleContactClick}>
              <Mail className="w-5 h-5 text-gray-600 hover:text-purple-500 cursor-pointer transition-colors" />
            </button>
          </div>
        </div>

        {showContact && (
          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-gray-800 text-center">
              To order please contact us on this number: 76322468
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


