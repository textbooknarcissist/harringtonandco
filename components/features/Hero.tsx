import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4" aria-labelledby="hero-title">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
          alt=""
          className="w-full h-full object-cover object-center"
          role="presentation"
        />
        <div className="absolute inset-0 bg-[#0F1E2E]/80"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <span className="text-[#C6A75E] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-xs mb-4 md:mb-6 block animate-in fade-in slide-in-from-top-4 duration-1000">
          Visionary Counsel • Decisive Action
        </span>
        <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F7F5F0] font-bold leading-[1.1] mb-6 md:mb-8 serif animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Legal Excellence <br className="hidden sm:block" /> Without Compromise.
        </h1>
        <p className="text-sm md:text-lg text-[#F7F5F0]/70 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          Harrington and Co provides bespoke legal advisory and representation, focused on delivering measurable results in complex commercial environments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <a
            href="#/contact"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-[10px]"
            aria-label="Schedule a consultation with Harrington and Co"
          >
            Schedule Consultation
          </a>
          <a
            href="#/practice"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-[#F7F5F0]/30 text-[#F7F5F0] font-bold rounded-sm hover:bg-[#F7F5F0] hover:text-[#0F1E2E] hover:border-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-[10px]"
            aria-label="Explore the legal services offered by Harrington and Co"
          >
            Explore Services
          </a>
        </div>
        <div className="pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <a
            href="#/about"
            className="inline-block px-10 py-5 bg-[#0F1E2E] text-[#F7F5F0] font-bold rounded-sm hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl font-sans"
            aria-label="Learn more about Harrington and Co"
          >
            Our Complete Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;