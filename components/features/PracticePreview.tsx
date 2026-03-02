import React from 'react';
import { ArrowRight, Scale, Briefcase, Landmark } from 'lucide-react';

const PracticePreview: React.FC = () => {
  const previewAreas = [
    {
      title: 'Corporate & Commercial',
      desc: 'Strategic counsel for businesses on governance, compliance, and complex transactions.',
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: 'Alternative Dispute Resolution',
      desc: 'Expert mediation and arbitration services to resolve complex legal disputes efficiently.',
      icon: <Scale className="w-10 h-10" />
    },
    {
      title: 'Banking & Finance',
      desc: 'Comprehensive legal support for financial institutions and corporate borrowers.',
      icon: <Landmark className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-[#F7F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Practice</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E2E] mb-6 serif">Practice Areas</h2>
          <div className="w-20 h-1 bg-[#C6A75E] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {previewAreas.map((area, idx) => (
            <div key={idx} className="p-10 border border-[#0F1E2E]/15 bg-white hover:border-[#C6A75E]/50 transition-all duration-500 group shadow-sm hover:shadow-xl">
              <div className="mb-8 text-[#C6A75E] group-hover:scale-110 transition-transform duration-500 origin-left">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0F1E2E] mb-4 serif transition-colors group-hover:text-[#C6A75E]">{area.title}</h3>
              <p className="text-[#2D3748] leading-relaxed font-light text-sm">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#/practice"
            className="inline-flex items-center px-10 py-5 border border-[#0F1E2E] text-[#0F1E2E] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#0F1E2E] hover:text-[#F7F5F0] transition-all duration-300 group"
          >
            Explore All Practice Areas
            <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticePreview;