import { ProposalInteraction } from './ProposalInteraction';

export function ProposalSection() {
  return (
    <section id="proposal-section" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ProposalInteraction />
        </div>
      </div>
    </section>
  );
}
