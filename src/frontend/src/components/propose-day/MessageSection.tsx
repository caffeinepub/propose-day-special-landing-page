import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export function MessageSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-6">
              A Message From My Heart
            </h2>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg md:prose-xl max-w-none text-rose-800">
                <p className="text-center leading-relaxed mb-6">
                  Every moment spent with you feels like a beautiful dream. Your smile lights up my world, 
                  and your laughter is the sweetest melody I've ever heard.
                </p>
                <p className="text-center leading-relaxed mb-6">
                  You've brought so much joy, warmth, and meaning into my life. With you, I've discovered 
                  what it truly means to care for someone deeply and unconditionally.
                </p>
                <p className="text-center leading-relaxed font-medium text-rose-900">
                  Today, on this special Propose Day, I want to take a step forward with you and ask you 
                  something that's been in my heart for so long...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
