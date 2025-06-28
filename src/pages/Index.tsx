
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Header />
      <Hero />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;
