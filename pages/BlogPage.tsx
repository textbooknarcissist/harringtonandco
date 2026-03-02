
import React from 'react';
import { BLOG_POSTS } from '../constants';
import Logo from '../components/ui/Logo';
import BlogPreview from '../components/features/BlogPreview';
import Newsletter from '../components/layout/Newsletter';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Refined Hero Header - Unified with Homepage Style */}
      <section className="relative pt-48 pb-32 overflow-hidden flex items-center justify-center text-center px-6">
        {/* Background Image with Desaturated Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
            alt="Briefing Background"
            className="w-full h-full object-cover object-center grayscale brightness-[0.3] scale-105"
          />
          <div className="absolute inset-0 bg-[#0F1E2E]/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#C6A75E] font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6 block animate-in fade-in slide-in-from-top-4 duration-1000">
            The Briefing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F5F0] mb-8 serif leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Resources.
          </h1>
          <div className="w-24 h-px bg-[#C6A75E] mb-8 mx-auto animate-in fade-in zoom-in duration-1000 delay-300"></div>
          <p className="max-w-2xl text-sm md:text-lg text-[#F7F5F0]/70 font-light leading-relaxed mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Strategic commentary on evolving regulations and the global commercial landscape.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col group">
              <div className="overflow-hidden mb-8 aspect-video bg-slate-200">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#0F1E2E] text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  {post.category}
                </span>
                <h2 className="text-3xl font-bold text-[#0F1E2E] mb-4 serif leading-tight group-hover:text-[#C6A75E] transition-colors">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-[#4A5568] mb-8 leading-relaxed font-light">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-100 rounded-full mr-4 flex items-center justify-center border border-slate-200 overflow-hidden">
                      <Logo className="w-6 h-6 opacity-40" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0F1E2E] uppercase tracking-widest">{post.author}</div>
                      <div className="text-[10px] text-[#4A5568]/60 font-medium uppercase tracking-widest">{post.date}</div>
                    </div>
                  </div>
                  <a href="#" className="text-[10px] font-bold text-[#0F1E2E] uppercase tracking-[0.3em] hover:text-[#C6A75E] transition-colors">
                    Read Brief →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="px-12 py-5 bg-[#0F1E2E] text-[#F7F5F0] font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 shadow-xl">
            Archive Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
