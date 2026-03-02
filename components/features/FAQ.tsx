import React, { useState, useMemo, memo } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../../constants';

interface FAQProps {
  limit?: number;
}

const FAQ: React.FC<FAQProps> = ({ limit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = useMemo(() =>
    limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS,
    [limit]);

  return (
    <section className={`py-24 ${limit ? 'bg-[#F7F5F0]' : 'bg-transparent'} relative z-10`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F1E2E] text-white rounded-full mb-6">
            <HelpCircle size={14} className="text-[#C6A75E]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Support Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif mb-4">Answers for Your Questions</h2>
          <p className="text-slate-500 font-light text-sm">Providing clarity on our engagement processes and specialized legal capabilities.</p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#0F1E2E]/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0F1E2E]/20 text-[#0F1E2E] text-xs font-bold group-hover:bg-[#0F1E2E] group-hover:text-white transition-all">
                      {idx + 1}
                    </span>
                    <span id={`faq-question-${idx}`} className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#C6A75E]' : 'text-[#0F1E2E]'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0F1E2E]/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C6A75E]' : ''}`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <div className="pl-14 text-slate-500 font-light leading-relaxed text-sm md:text-base pr-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <a
              href="#/contact"
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F1E2E] hover:text-[#C6A75E] transition-colors group"
            >
              view all faqs
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(FAQ);