import React from 'react';
import { Scale, Shield, Briefcase, Users, FileText, Landmark } from 'lucide-react';
import { PRACTICE_AREAS } from '../../constants';

const iconMap: { [key: string]: React.ReactNode } = {
  Scale: <Scale className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
};

const PracticeAreas: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] mb-6 serif">Practice Areas</h2>
          <div className="w-20 h-1 bg-[#0F1E2E] mx-auto mb-8"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We provide strategic counsel across a diverse spectrum of legal disciplines, ensuring excellence in every brief we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="group relative overflow-hidden rounded-3xl border border-[#0F1E2E]/10 bg-white p-12 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A75E] hover:bg-[#0F1E2E] hover:shadow-[0_24px_48px_-16px_rgba(15,30,46,0.55)]"
            >
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A75E]/15 text-[#C6A75E] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C6A75E] group-hover:text-[#0F1E2E]">
                {iconMap[area.icon] || <FileText className="w-8 h-8" />}
              </div>
              <h3 className="mb-6 text-xl font-bold text-[#0F1E2E] serif transition-colors group-hover:text-[#F7F5F0]">
                {area.title}
              </h3>
              <p className="mb-10 text-sm font-light leading-relaxed text-slate-500 transition-colors group-hover:text-[#F7F5F0]/75">
                {area.description}
              </p>
              <a
                href="#/practice"
                className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F1E2E] transition-colors group-hover:text-[#C6A75E]"
              >
                Learn more <span className="ml-3 transition-transform group-hover:translate-x-2">-&gt;</span>
              </a>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-[#C6A75E]/35"></div>
            </div>
          ))}

          {/* Custom CTA card to fill the grid if odd number */}
          {PRACTICE_AREAS.length % 3 !== 0 && (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-[#C6A75E]/35 bg-[#C6A75E] p-12 text-center shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-[#0F1E2E] serif">And more...</h3>
              <p className="mb-8 text-sm leading-relaxed text-[#0F1E2E]/80">
                Inquire about our specialized consultancy for unique legal challenges.
              </p>
              <a href="#/contact" className="rounded-full bg-[#0F1E2E] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">
                Contact Firm
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
