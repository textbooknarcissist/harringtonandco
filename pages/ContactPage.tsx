import React from 'react';
import ContactSection from '../components/features/ContactSection';
import FAQ from '../components/features/FAQ';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Immersive Full-Height Hero Header */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
        {/* Background Image with Desaturated Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000"
            alt="Strategic Consultation"
            className="w-full h-full object-cover object-center grayscale brightness-[0.4] scale-105"
          />
          <div className="absolute inset-0 bg-[#0F1E2E]/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 -mt-20">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <span className="text-[#C6A75E] font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
              Direct Access
            </span>
            <div className="w-12 h-px bg-[#C6A75E]/40"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F5F0] mb-8 serif leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Consult the Firm.
          </h1>

          <p className="max-w-2xl text-sm md:text-lg text-[#F7F5F0]/70 font-light leading-relaxed mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            We respond to elite inquiries with the urgency and discretion they command. Reach our partners directly through our secure channels.
          </p>
        </div>

        {/* Scroll indicator for immersive feel */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[8px] uppercase tracking-[0.5em] text-[#F7F5F0] font-bold">Engagement Details</span>
          <div className="w-px h-12 bg-linear-to-b from-[#C6A75E] to-transparent"></div>
        </div>
      </section>

      {/* Extended FAQ Section (8 Items) - Moved above Contact Section */}
      <FAQ />

      {/* Main Contact Form Section */}
      <ContactSection />

      {/* Global Presence Section - Background set to White */}
      <div className="w-full h-[600px] bg-white relative overflow-hidden border-t border-slate-100">
        {/* Subtle Map Graphic Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale pointer-events-none"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl w-full bg-[#F7F5F0] p-10 md:p-20 border border-[#C6A75E]/20 shadow-[0_40px_80px_rgba(15,30,46,0.1)] relative group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full border border-[#C6A75E]/30 shadow-sm transition-transform group-hover:scale-110">
              <div className="w-3 h-3 rounded-full bg-[#C6A75E] animate-pulse"></div>
            </div>

            <span className="text-[#C6A75E] font-bold text-[10px] md:text-xs tracking-[0.5em] mb-6 uppercase block">Worldwide Deployment</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F1E2E] mb-6 serif">Global Presence</h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
              {['LAGOS', 'LONDON', 'DUBAI', 'GENEVA'].map((city) => (
                <span key={city} className="text-[10px] font-bold text-[#0F1E2E]/40 tracking-[0.3em] uppercase">
                  {city}
                </span>
              ))}
            </div>

            <p className="text-slate-500 font-light max-w-md mx-auto text-sm md:text-base leading-relaxed mb-10">
              Headquartered at <span className="text-[#0F1E2E] font-bold">Harrington House, Financial District</span>, Lagos. Our legal architecture supports sophisticated commerce across 24+ global jurisdictions.
            </p>

            <div className="flex justify-center items-center space-x-3 pt-6 border-t border-[#0F1E2E]/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0F1E2E]">Operational Network Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;