import React from 'react';
import { ArrowRight, Scale, Briefcase, Landmark } from 'lucide-react';

const PracticePreview: React.FC = () => {
  const previewAreas = [
    {
      title: 'Corporate & Commercial',
      desc: 'Advising boards, founders, and multinational enterprises on governance, regulatory compliance, restructurings, and high-value transactions across Nigeria and West Africa.',
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: 'Banking & Finance  ',
      desc: 'Counsel to financial institutions, private lenders, and corporate borrowers on structured finance, project finance, syndicated facilities, and regulatory engagement with CBN and SEC.',
      icon: <Scale className="w-10 h-10" />
    },
    {
      title: 'Dispute Resolution & Arbitration',
      desc: 'Strategic representation in complex commercial litigation, cross-border disputes, and high-stakes arbitration before Nigerian courts and international tribunals.',
      icon: <Landmark className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F7F5F0] mb-6 serif">Legal Services We Offer</h2>
          <div className="w-20 h-1 bg-[#C6A75E] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {previewAreas.map((area, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-[#0F1E2E]/10 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A75E] hover:bg-[#0F1E2E] hover:shadow-[0_24px_48px_-16px_rgba(15,30,46,0.55)]"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A75E]/15 text-[#C6A75E] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C6A75E] group-hover:text-[#0F1E2E]">
                {area.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#0F1E2E] serif transition-colors group-hover:text-[#F7F5F0]">{area.title}</h3>
              <p className="text-sm font-light leading-relaxed text-[#2D3748] transition-colors group-hover:text-[#F7F5F0]/75">{area.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-[#C6A75E]/35"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#/practice"
            className="inline-flex items-center px-10 py-5 border border-[#F7F5F0]/30 text-[#F7F5F0] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C6A75E] hover:text-[#0F1E2E] hover:border-[#C6A75E] transition-all duration-300 group"
          >
            View All Practice Areas
            <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticePreview;
