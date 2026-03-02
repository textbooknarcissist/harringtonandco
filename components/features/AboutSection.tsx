import React from 'react';
import Logo from '../ui/Logo';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F7F5F0] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-24 md:w-40 h-24 md:h-40 bg-[#C6A75E]/5 rounded-full -z-10"></div>
            <div className="relative z-10 group">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Legal Excellence"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-sm shadow-[0_35px_60px_-15px_rgba(15,30,46,0.2)] transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 p-6 md:p-10 bg-[#0F1E2E] border-l-4 border-[#C6A75E] shadow-2xl hidden md:block">
                <p className="text-[#F7F5F0] text-lg font-bold serif italic mb-2">Excellence in practice.</p>
                <p className="text-[#C6A75E] text-xs font-bold uppercase tracking-widest">Harrington and Co</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Identity</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F1E2E] mb-6 md:mb-8 serif leading-tight">
                Strategic Insight.<br />
                Sophisticated Advocacy.<br />
                Proven Results.
              </h2>
              <div className="w-16 h-1 bg-[#C6A75E] mb-8"></div>
            </div>

            <p className="text-[#2D3748] text-base md:text-lg leading-relaxed font-light">
              Harrington and Co is a full-service commercial law firm dedicated to excellence, serving a diverse portfolio of domestic and international clients. Our expertise spans across multiple jurisdictions and sectors.
            </p>

            <p className="text-[#2D3748] leading-relaxed text-sm md:text-base">
              We leverage our profound understanding of the legal and regulatory landscape to provide tailored solutions that drive business growth and protect client assets. Our reputation is built on <span className="text-[#0F1E2E] font-bold">precision</span> and professional <span className="text-[#0F1E2E] font-bold">integrity</span>.
            </p>

            <div className="flex flex-wrap gap-10 md:gap-12 py-4">
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#0F1E2E] serif">Lagos</div>
                <div className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest mt-1">Headquarters</div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-200"></div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#0F1E2E] serif">Abuja</div>
                <div className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest mt-1">Regional Office</div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#/about"
                className="inline-block px-10 py-5 bg-[#0F1E2E] text-[#F7F5F0] font-bold rounded-sm hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl"
              >
                Our Complete Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;