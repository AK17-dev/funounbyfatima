
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Morning Bloom Cup",
    price: 28,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
    description: "Elegant ceramic cup with hand-painted floral motifs"
  },
  {
    id: 2,
    name: "Rustic Earth Mug",
    price: 32,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80",
    description: "Natural clay finish with organic textures"
  },
  {
    id: 3,
    name: "Sunset Glow Cup",
    price: 30,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80",
    description: "Warm gradient glazing reminiscent of golden hour"
  },
  {
    id: 4,
    name: "Ocean Breeze Mug",
    price: 35,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
    description: "Cool blue tones with wave-like patterns"
  },
  {
    id: 5,
    name: "Vintage Rose Cup",
    price: 29,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80",
    description: "Delicate rose motifs on cream ceramic"
  },
  {
    id: 6,
    name: "Forest Green Mug",
    price: 33,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80",
    description: "Deep forest green with gold rim accents"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Our Collection</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each cup is uniquely handcrafted, making every piece one-of-a-kind. 
            Discover the perfect companion for your favorite beverages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button className="text-orange-500 hover:text-orange-600 font-medium underline">
            Request a Custom Design
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
