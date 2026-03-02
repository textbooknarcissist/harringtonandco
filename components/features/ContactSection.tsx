import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '../../types';

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log('Form data:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Engagement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-8 serif">Book a Consultation</h2>
            <p className="text-[#F7F5F0]/60 mb-12 text-lg leading-relaxed font-light">
              Strategic counsel begins with a conversation. Reach out via the channels below or provide your details for a prioritized callback.
            </p>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <Phone className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">Priority Line</h3>
                  <a href="tel:09065624016" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors serif">
                    09065624016
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <Mail className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">Secure Email</h3>
                  <a href="mailto:mfredebel@gmail.com" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors break-all serif">
                    mfredebel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <MapPin className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">The Office</h3>
                  <address className="not-italic text-xl md:text-2xl font-bold text-[#F7F5F0] serif leading-snug">
                    Harrington House, Lagos
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-8 md:p-12 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group border border-[#C6A75E]/20 transition-transform duration-500 hover:-translate-y-2 bg-[#0F1E2E] bg-[linear-gradient(to_right,rgba(198,167,94,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,167,94,0.08)_1px,transparent_1px)] bg-size-[40px_40px]"
          >
            {/* Elegant corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-[#C6A75E]/10 to-transparent rounded-bl-full z-0"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-12 h-12 rounded-sm bg-[#C6A75E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C6A75E] transition-all duration-500">
                  <CheckCircle2 size={24} className="text-[#C6A75E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F7F5F0] serif mb-4 mt-6">Request Received</h3>
                <p className="text-[#F7F5F0]/60 max-w-sm mx-auto font-light leading-relaxed">
                  Your inquiry has been encrypted and prioritized. A senior partner will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C6A75E] hover:text-[#F7F5F0] transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-1">
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Full Name</label>
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      className={`w-full px-5 py-4 bg-[#0F1E2E]/50 border ${errors.fullName ? 'border-red-500/50' : 'border-[#C6A75E]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.fullName.message}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Email Address</label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-5 py-4 bg-[#0F1E2E]/50 border ${errors.email ? 'border-red-500/50' : 'border-[#C6A75E]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Legal Counsel Category</label>
                  <div className="relative">
                    <select
                      {...register('category')}
                      id="category"
                      className={`w-full px-5 py-4 bg-[#0F1E2E]/80 border ${errors.category ? 'border-red-500/50' : 'border-[#C6A75E]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] appearance-none cursor-pointer`}
                    >
                      <option value="">Select Subject Area</option>
                      <option value="corporate">Corporate & Commercial</option>
                      <option value="maritime">Maritime & Shipping</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="finance">Banking & Finance</option>
                      <option value="realestate">Real Estate & Probate</option>
                      <option value="dispute">Dispute Resolution</option>
                      <option value="digital">Digital Sovereignty</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#C6A75E]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  {errors.category && <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.category.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Brief Description of Matter</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className={`w-full px-5 py-4 bg-[#0F1E2E]/50 border ${errors.message ? 'border-red-500/50' : 'border-[#C6A75E]/30'} rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20`}
                    placeholder="Provide a high-level summary..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl"
                >
                  {isSubmitting ? 'Transmitting...' : 'Request Appointment'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
