
import { Heart } from 'lucide-react';

const Header = () => {
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
              <p className="text-sm text-gray-600">Handcrafted with Love</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Products</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
