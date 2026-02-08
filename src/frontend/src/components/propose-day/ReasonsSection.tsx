import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Smile, Star, Sparkles, Sun, Music } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Your Kindness',
    description: 'Your compassionate heart and gentle spirit make the world a better place.'
  },
  {
    icon: Smile,
    title: 'Your Smile',
    description: 'Every time you smile, my heart skips a beat and everything feels right.'
  },
  {
    icon: Star,
    title: 'Your Uniqueness',
    description: 'You are one of a kind, and I cherish every little thing that makes you, you.'
  },
  {
    icon: Sparkles,
    title: 'Your Energy',
    description: 'Your positive energy and enthusiasm inspire me to be a better person every day.'
  },
  {
    icon: Sun,
    title: 'Your Warmth',
    description: 'Being with you feels like coming home - safe, comfortable, and full of love.'
  },
  {
    icon: Music,
    title: 'Our Connection',
    description: 'The way we understand each other without words is something truly special.'
  }
];

export function ReasonsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-rose-100/30 to-transparent relative">
      {/* Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{ 
          backgroundImage: 'url(/assets/generated/heart-pattern-tile.dim_512x512.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-6">
            Why I Adore You
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            There are countless reasons, but here are just a few that make my heart flutter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-center text-rose-900 text-xl">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-rose-700 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
