import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, Clock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

type InteractionState = 'default' | 'yes' | 'not-yet';

export function ProposalInteraction() {
  const [state, setState] = useState<InteractionState>('default');

  if (state === 'yes') {
    return (
      <Card className="bg-gradient-to-br from-rose-100 to-pink-100 border-rose-300 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-pulse" />
              <Sparkles className="w-8 h-8 text-gold absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <CardTitle className="text-4xl md:text-5xl font-serif text-rose-900">
            You Said Yes! 💕
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8">
          <p className="text-2xl md:text-3xl text-rose-800 font-light">
            You've just made me the happiest person alive!
          </p>
          <p className="text-lg md:text-xl text-rose-700 leading-relaxed max-w-xl mx-auto">
            This is the beginning of our beautiful journey together. I promise to cherish every moment, 
            support your dreams, and love you with all my heart. Thank you for choosing us. ❤️
          </p>
          <div className="pt-4">
            <div className="inline-block bg-white/80 rounded-full px-8 py-4 shadow-lg">
              <p className="text-rose-900 font-medium text-lg">
                Forever starts now 💑
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (state === 'not-yet') {
    return (
      <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Clock className="w-16 h-16 text-rose-400" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-serif text-rose-900">
            I Understand
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8">
          <p className="text-xl md:text-2xl text-rose-700 leading-relaxed">
            Take all the time you need. True love is patient and understanding.
          </p>
          <p className="text-lg text-rose-600 max-w-xl mx-auto">
            I'll be here, waiting with an open heart, whenever you're ready. 
            There's no rush - what matters most is that you feel comfortable and sure.
          </p>
          <Alert className="bg-rose-50 border-rose-200 max-w-md mx-auto">
            <Heart className="h-5 w-5 text-rose-500" />
            <AlertDescription className="text-rose-800">
              My feelings won't change. I'll always be here for you. 💕
            </AlertDescription>
          </Alert>
          <div className="pt-4">
            <Button
              onClick={() => setState('default')}
              variant="outline"
              className="border-rose-300 text-rose-700 hover:bg-rose-50"
            >
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-2xl">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/generated/heart-emblem.dim_512x512.png" 
            alt="Heart" 
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
        <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-serif text-rose-900 leading-tight">
          Will You Be Mine?
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-8 pb-10">
        <p className="text-xl md:text-2xl text-rose-700 leading-relaxed max-w-2xl mx-auto">
          I'm asking you to be my partner, my best friend, and the love of my life. 
          Will you take this journey with me?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            onClick={() => setState('yes')}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-rose-300/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <Heart className="mr-2 h-6 w-6 fill-white" />
            Yes, I Will! 💕
          </Button>

          <Button
            onClick={() => setState('not-yet')}
            variant="outline"
            size="lg"
            className="border-2 border-rose-300 text-rose-700 hover:bg-rose-50 px-12 py-6 text-xl rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Not Yet
          </Button>
        </div>

        <p className="text-sm text-rose-500 italic pt-4">
          Whatever you choose, know that you're deeply cherished ✨
        </p>
      </CardContent>
    </Card>
  );
}
