
import ProductCard from './ProductCard';
import AdminPanel from './AdminPanel';
import { useState } from 'react';
import { Settings } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Nautical Tea Set",
    price: 45,
    image: "/lovable-uploads/a8c1dbed-219c-47c9-b909-e604a5e24d12.png",
    description: "Beautiful blue and white ceramic tea cups with nautical theme and Arabic calligraphy"
  },
  {
    id: 2,
    name: "Village Scene Vase",
    price: 55,
    image: "/lovable-uploads/b2529f4f-2501-47ba-8124-b0655547d505.png",
    description: "Hand-painted glass vase featuring a charming village scene with trees and houses"
  },
  {
    id: 3,
    name: "Terra Cotta Bowl Set",
    price: 38,
    image: "/lovable-uploads/6a00bbb8-5d01-4eff-8d6f-6fc091c49ccf.png",
    description: "Set of traditional terra cotta bowls with Arabic calligraphy and decorative motifs"
  },
  {
    id: 4,
    name: "Golden Accent Tea Set",
    price: 65,
    image: "/lovable-uploads/5927860b-69c1-4927-8967-61f4af4679e9.png",
    description: "Elegant white porcelain tea cups with golden accents and Arabic calligraphy"
  },
  {
    id: 5,
    name: "Floral Glass Tumbler",
    price: 25,
    image: "/lovable-uploads/4e86560e-a9ea-4996-b7da-7d7a27e90eba.png",
    description: "Hand-painted glass tumbler with vibrant floral designs and gold rim"
  },
  {
    id: 6,
    name: "Crystal Village Cup",
    price: 35,
    image: "/lovable-uploads/19811784-6532-441f-87cd-6e50f78daa29.png",
    description: "Delicate crystal tea cup with hand-painted village scene and decorative handle"
  }
];

const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem("funoun-products");
      return stored ? JSON.parse(stored) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "FatimaBoss2024") {
      setIsAdminAuthenticated(true);
      setShowAdminPanel(true);
    } else {
      alert("Access denied. Only the owner can access admin features.");
    }
  };

  const updateProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    try {
      localStorage.setItem("funoun-products", JSON.stringify(updatedProducts));
    } catch (error) {
      console.error("Failed to save products to localStorage:", error);
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Collection</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each cup is uniquely handcrafted, making every piece one-of-a-kind.
            Discover the perfect companion for your favorite beverages.
          </p>

          <button
            onClick={handleAdminAccess}
            className="absolute top-0 right-4 p-2 text-gray-400 hover:text-purple-500 transition-colors"
            title="Admin Access"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button className="text-purple-500 hover:text-purple-600 font-medium underline">
            Request a Custom Design
          </button>
        </div>

        {showAdminPanel && isAdminAuthenticated && (
          <AdminPanel
            products={products}
            onUpdateProducts={updateProducts}
            onClose={() => setShowAdminPanel(false)}
          />
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
