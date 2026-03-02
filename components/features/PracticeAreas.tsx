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
          <span className="text-[#d4af37] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b23] mb-6 serif">Practice Areas</h2>
          <div className="w-20 h-1 bg-[#1a2b23] mx-auto mb-8"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We provide strategic counsel across a diverse spectrum of legal disciplines, ensuring excellence in every brief we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100 shadow-2xl">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="p-12 border-r border-b border-slate-100 bg-white hover:bg-[#1a2b23] transition-all duration-500 group relative"
            >
              <div className="mb-8 text-[#d4af37] group-hover:scale-110 transition-transform duration-500 origin-left">
                {iconMap[area.icon] || <FileText className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-[#1a2b23] group-hover:text-[#d4af37] mb-6 serif transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-500 group-hover:text-white/70 leading-relaxed mb-10 transition-colors text-sm font-light">
                {area.description}
              </p>
              <a
                href="#/practice"
                className="text-[10px] font-bold text-[#1a2b23] group-hover:text-[#d4af37] flex items-center uppercase tracking-[0.3em] transition-colors"
              >
                Learn more <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </a>

              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}

          {/* Custom CTA card to fill the grid if odd number */}
          {PRACTICE_AREAS.length % 3 !== 0 && (
            <div className="p-12 border-r border-b border-slate-100 bg-[#d4af37] flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-[#1a2b23] mb-6 serif">And more...</h3>
              <p className="text-[#1a2b23]/80 text-sm leading-relaxed mb-8">
                Inquire about our specialized consultancy for unique legal challenges.
              </p>
              <a href="#/contact" className="px-6 py-3 bg-[#1a2b23] text-white text-[10px] font-bold uppercase tracking-widest">
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