
import { Heart, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    setTimeout(() => setShowContact(false), 3000);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">FunounByFatima</h1>
              <p className="text-sm text-gray-600">Handcrafted with Love • Since 2019</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
            <button 
              onClick={handleContactClick}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            <button onClick={handleContactClick}>
              <Mail className="w-5 h-5 text-gray-600 hover:text-orange-500 cursor-pointer transition-colors" />
            </button>
          </div>
        </div>
        
        {showContact && (
          <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-gray-800 text-center">To order please contact us on this number: 76322468</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
