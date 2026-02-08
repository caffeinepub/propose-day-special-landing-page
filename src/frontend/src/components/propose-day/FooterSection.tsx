import { Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function FooterSection() {
  return (
    <footer className="py-12 bg-gradient-to-b from-transparent to-rose-100/50">
      <div className="container mx-auto px-4">
        <Separator className="mb-8 bg-rose-200" />
        
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-rose-700">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <p className="text-lg font-medium">
              Propose Day 2026
            </p>
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </div>
          
          <p className="text-rose-600 text-sm">
            © 2026. Built with <Heart className="inline w-4 h-4 fill-rose-500 text-rose-500 mx-1" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-rose-900 underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
