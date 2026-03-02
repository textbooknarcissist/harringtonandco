import React, { useState, memo } from 'react';

const partners = [
  { name: "DANGOTE", logo: "https://logos-world.net/wp-content/uploads/2023/11/Dangote-Group-Logo.png" },
  { name: "MTN NIGERIA", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN-Logo.svg" },
  { name: "ZENITH BANK", logo: "https://www.zenithbank.com/media/2521/zenith-bank-logo.png" },
  { name: "UBA GROUP", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/United_Bank_for_Africa_Logo.png" },
  { name: "AIRTEL AFRICA", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Airtel_logo.svg" },
  { name: "TOTAL ENERGIES", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/TotalEnergies_logo.svg" },
  { name: "ACCESS BANK", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Access_Bank_Logo.svg" },
  { name: "NLNG", logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Nigeria_LNG_Logo.png" },
  { name: "IHS TOWERS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/IHS_Towers_Logo.svg" },
  { name: "FIRST BANK", logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FirstBank_Nigeria_Logo.png" }
];

const fullList = [...partners, ...partners];

const TickerItem: React.FC<{ partner: { name: string; logo: string } }> = memo(({ partner }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex items-center gap-6 px-16 group transition-all duration-500 cursor-default">
      <div className="w-16 h-12 flex items-center justify-center filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
        {!hasError ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="max-w-full max-h-full object-contain"
            onError={() => setHasError(true)}
            loading="lazy"
          />
        ) : (
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap">
            {partner.name}
          </div>
        )}
      </div>
      <span className="text-[#F7F5F0] font-bold tracking-[0.3em] text-[10px] md:text-xs opacity-20 group-hover:opacity-100 transition-opacity group-hover:text-[#C6A75E]">
        {partner.name}
      </span>
    </div>
  );
});

const EnterpriseTicker: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] mb-4 serif">
          85% of Nigeria's Leading Enterprises <br className="hidden md:block" /> Choose Harrington & Co
        </h2>
        <p className="text-[#F7F5F0]/40 max-w-2xl mx-auto text-sm font-light leading-relaxed">
          Providing elite counsel to the continent's most ambitious commercial projects and financial institutions.
        </p>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <div className="ticker-content flex items-center whitespace-nowrap">
          {fullList.map((partner, i) => (
            <TickerItem key={i} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(EnterpriseTicker);
