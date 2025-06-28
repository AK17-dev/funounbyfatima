
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Handcrafted
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500"> Cups </span>
            Made with Love
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover unique, handmade ceramic cups that bring warmth and character to your daily rituals. 
            Each piece is carefully crafted by Fatima with attention to detail and artistic flair.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg font-medium">
              Learn More
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-orange-400 mx-auto" />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
