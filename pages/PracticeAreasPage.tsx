import React, { useCallback } from 'react';
import {
  Globe,
  ShieldAlert,
  Cpu,
  Landmark,
  Ship,
  Briefcase,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { contentService } from '../services/contentService';

const sophisticatedPractices = [
  {
    id: '01',
    title: 'Commercial Equilibrium',
    subtitle: 'Corporate Law & Strategic M&A',
    desc: 'Facilitating complex mergers, acquisitions, and corporate restructurings to ensure long-term stability and market leadership.',
    icon: <Briefcase className="w-10 h-10" />,
  },
  {
    id: '02',
    title: 'Digital Sovereignty',
    subtitle: 'Technology, Data & IP Protection',
    desc: 'Securing technological assets through rigorous AI ethics protocols, blockchain governance, and elite intellectual property legal frameworks.',
    icon: <Cpu className="w-10 h-10" />,
  },
  {
    id: '03',
    title: 'Maritime Cartography',
    subtitle: 'Shipping, Logistics & Admiralty Law',
    desc: 'Navigating the complex legal currents of international waters, logistics disputes, and global trade route regulations with precision.',
    icon: <Ship className="w-10 h-10" />,
  },
  {
    id: '04',
    title: 'Sovereign Asset Protection',
    subtitle: 'Private Wealth, Trusts & Estates',
    desc: 'Comprehensive wealth custody and legacy planning for high-net-worth individuals, focused on multi-generational preservation.',
    icon: <Landmark className="w-10 h-10" />,
  },
  {
    id: '05',
    title: 'Strategic Dispute Resolution',
    subtitle: 'International Arbitration & Mediation',
    desc: 'High-stakes arbitration that prioritizes decisive resolution over prolonged litigation, protecting corporate brand reputations.',
    icon: <ShieldAlert className="w-10 h-10" />,
  },
  {
    id: '06',
    title: 'Inter-Jurisdictional Trade',
    subtitle: 'Cross-Border Regulatory Compliance',
    desc: 'Providing seamless legal navigation across multiple jurisdictions, ensuring full compliance within a globalized regulatory field.',
    icon: <Globe className="w-10 h-10" />,
  },
];

const PracticeAreasPage: React.FC = () => {
  const fetchAttorneys = useCallback(() => contentService.getAttorneys(), []);
  const { data: attorneys, loading: attorneysLoading, error: attorneysError, refetch } = useContent(fetchAttorneys);
  const hasAttorneys = (attorneys?.length ?? 0) > 0;

  return (
    <div className="bg-[#F7F5F0]">
      {/* Refined Hero Header */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Landscape"
            className="w-full h-full object-cover object-center grayscale brightness-[0.3] scale-105"
          />
          <div className="absolute inset-0 bg-[#0F1E2E]/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <span className="text-[#C6A75E] font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
              Our Specialized Capabilities
            </span>
            <div className="w-12 h-px bg-[#C6A75E]/40"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#F7F5F0] mb-8 serif leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Practice Areas.
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-[#F7F5F0]/70 font-light leading-relaxed mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            We provide a spectrum of elite legal services designed to address the multifaceted
            challenges of modern global commerce and private interests.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[8px] uppercase tracking-[0.5em] text-[#F7F5F0] font-bold">
            Explore Expertise
          </span>
          <div className="w-px h-12 bg-linear-to-b from-[#C6A75E] to-transparent"></div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sophisticatedPractices.map((area) => (
              <div
                key={area.id}
                className="group relative flex flex-col h-full bg-white p-12 border border-[#0F1E2E]/10 hover:border-[#C6A75E]/30 hover:shadow-[0_20px_50px_rgba(15,30,46,0.08)] transition-all duration-500 ease-out rounded-sm"
              >
                <div className="absolute top-8 right-10 text-5xl font-bold text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 serif pointer-events-none select-none">
                  {area.id}
                </div>

                <div className="mb-10 text-[#C6A75E] transition-transform duration-500 group-hover:scale-110 origin-left">
                  {area.icon}
                </div>

                <div className="grow">
                  <h3 className="text-2xl font-bold text-[#0F1E2E] mb-1 serif leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    {area.subtitle}
                  </p>
                  <p className="text-slate-700 leading-relaxed font-light text-sm line-clamp-4">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-50">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-[10px] font-bold text-[#0F1E2E] uppercase tracking-[0.3em] group/btn transition-colors hover:text-[#C6A75E]"
                  >
                    Engage Practice Lead
                    <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Strategy Section */}
      <section className="py-28 bg-[#0F1E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-[#C6A75E]/30"></div>
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Elite Advocacy detail"
                  className="w-full h-[550px] object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F1E2E] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[#C6A75E]/30"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Execution Strategy
                </span>
                <h2 className="text-4xl md:text-5xl text-[#F7F5F0] font-bold serif leading-tight">
                  Multidisciplinary Counsel for Complex Markets
                </h2>
              </div>

              <p className="text-[#F7F5F0]/60 text-lg font-light leading-relaxed">
                Our practice is built on the reality that legal challenges do not exist in
                isolation. We provide holistic, 360-degree advocacy that considers business risk,
                brand reputation, and future-proof regulatory compliance.
              </p>

              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A75E]">
                      Global Regulatory Mapping
                    </span>
                    <span className="text-xs text-[#F7F5F0]/40 font-light">24+ Jurisdictions</span>
                  </div>
                  <div className="w-full h-px bg-white/10">
                    <div className="h-full bg-[#C6A75E] transition-all duration-1000 w-[75%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A75E]">
                      Risk Mitigation Protocols
                    </span>
                    <span className="text-xs text-[#F7F5F0]/40 font-light">Predictive Analysis</span>
                  </div>
                  <div className="w-full h-px bg-white/10">
                    <div className="h-full bg-[#C6A75E] transition-all duration-1000 w-[90%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6A75E]">
                      Executive Level Advisory
                    </span>
                    <span className="text-xs text-[#F7F5F0]/40 font-light">Boardroom Direct</span>
                  </div>
                  <div className="w-full h-px bg-white/10">
                    <div className="h-full bg-[#C6A75E] transition-all duration-1000 w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Counsel in Charge */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Practice Leads
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif leading-tight">
                The Strategic Counsel <br /> in Charge.
              </h2>
            </div>
            <p className="text-[#4A5568] max-w-sm text-sm font-light leading-relaxed mb-1">
              Connect directly with the specialized partners who drive our practice results.
            </p>
          </div>

          {attorneysLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-4/5 bg-slate-200 mb-8 rounded-sm"></div>
                  <div className="h-6 bg-slate-200 w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-slate-200 w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : attorneysError ? (
            <div className="text-center py-12 space-y-4">
              <p className="text-red-500">The practice lead roster is temporarily unavailable.</p>
              <button
                type="button"
                onClick={refetch}
                className="px-6 py-3 bg-[#0F1E2E] text-[#F7F5F0] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-colors"
              >
                Retry loading practice leads
              </button>
            </div>
          ) : !hasAttorneys ? (
            <div className="text-center py-12 space-y-4">
              <p className="text-slate-500">No practice leads are available in the current demo feed.</p>
              <button
                type="button"
                onClick={refetch}
                className="px-6 py-3 bg-[#0F1E2E] text-[#F7F5F0] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-colors"
              >
                Retry loading practice leads
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {attorneys?.map((attorney) => (
                <div key={attorney.id} className="group">
                  <div className="relative overflow-hidden mb-8 aspect-4/5 bg-slate-100 shadow-2xl transition-all duration-700 border border-[#0F1E2E]/5">
                      <img
                        src={attorney.imageUrl}
                        alt={attorney.name}
                        className="w-full h-full object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                    <div className="absolute inset-0 bg-[#0F1E2E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                      <Linkedin
                        size={20}
                        className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                      <Twitter
                        size={20}
                        className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                      <Instagram
                        size={20}
                        className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#0F1E2E] serif mb-1">{attorney.name}</h3>
                    <p className="text-[#C6A75E] font-bold text-[10px] uppercase tracking-[0.3em] mb-2">
                      {attorney.role}
                    </p>
                    <p className="text-[#0F1E2E]/40 font-bold text-[8px] uppercase tracking-[0.4em] mb-4 italic">
                      {attorney.expertise}
                    </p>
                    <div className="w-8 h-0.5 bg-slate-200 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 text-center bg-white border-b border-[#0F1E2E]/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] mb-8 serif italic">
            Secure Your Interests.
          </h2>
          <p className="text-slate-700 mb-12 text-lg font-light leading-relaxed px-4">
            Our specialized partners are available for high-level consultations on matters of
            regional and international significance. Let us design the shield your ambitions
            require.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-5 bg-[#0F1E2E] text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 shadow-xl"
            >
              Request Strategic Review
            </Link>
            <a
              href="tel:09065624016"
              className="w-full sm:w-auto px-12 py-5 border border-[#0F1E2E]/20 text-[#0F1E2E] font-bold uppercase tracking-[0.2em] text-[10px] hover:border-[#0F1E2E] transition-all duration-300"
            >
              Priority Line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
