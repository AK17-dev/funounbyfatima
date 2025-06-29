import { Heart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all ${isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-600 hover:text-red-500'
              }`}
          >
            <Heart className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-500">${product.price}</span>
            <span className="text-gray-500 text-sm ml-1">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
