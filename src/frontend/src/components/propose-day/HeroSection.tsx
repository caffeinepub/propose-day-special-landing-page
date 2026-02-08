import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export function HeroSection() {
  const scrollToProposal = () => {
    const proposalSection = document.getElementById('proposal-section');
    if (proposalSection) {
      proposalSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/propose-hero-bg.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-pink-900/10 to-rose-50/90" />
      </div>

      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'url(/assets/generated/heart-pattern-tile.dim_512x512.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Heart Emblem */}
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/generated/heart-emblem.dim_512x512.png" 
              alt="Heart" 
              className="w-24 h-24 md:w-32 md:h-32 animate-pulse"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-rose-900 leading-tight">
            Will You Be Mine?
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-rose-700 font-light max-w-2xl mx-auto">
            On this special Propose Day, I have something important to ask you
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={scrollToProposal}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-6 text-lg md:text-xl rounded-full shadow-2xl hover:shadow-rose-300/50 transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="mr-2 h-6 w-6" />
              See My Question
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-rose-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
