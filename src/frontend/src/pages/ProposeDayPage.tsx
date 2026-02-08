import { HeroSection } from '../components/propose-day/HeroSection';
import { MessageSection } from '../components/propose-day/MessageSection';
import { ReasonsSection } from '../components/propose-day/ReasonsSection';
import { ProposalSection } from '../components/propose-day/ProposalSection';
import { FooterSection } from '../components/propose-day/FooterSection';

export function ProposeDayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-cream">
      <HeroSection />
      <MessageSection />
      <ReasonsSection />
      <ProposalSection />
      <FooterSection />
    </div>
  );
}
