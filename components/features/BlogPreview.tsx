import React from 'react';
import { BLOG_POSTS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
  // Only show the most recent post
  const featuredPost = BLOG_POSTS[0];

  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-4 serif leading-tight">Featured Insight</h2>
            <p className="text-[#F7F5F0]/50 text-lg font-light leading-relaxed">
              Strategic commentary on evolving Nigerian legal landscapes and international best practices.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {featuredPost && (
            <article className="group cursor-pointer p-8 md:p-12 border border-white/10 hover:border-[#C6A75E]/50 transition-all duration-500 bg-white/5 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="overflow-hidden aspect-video bg-white/5 relative">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C6A75E] text-[#0F1E2E] text-[8px] font-bold uppercase tracking-widest">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-[#F7F5F0] group-hover:text-[#C6A75E] transition-colors serif leading-tight flex items-start gap-3">
                    {featuredPost.title}
                    <ArrowUpRight size={20} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[#4A5568] font-light text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-[10px] text-white/40 pt-4 tracking-widest uppercase font-bold">
                    <span>{featuredPost.author}</span>
                    <span className="mx-3 opacity-30">•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>

        <div className="mt-16 text-center">
          <a href="#/blog" className="inline-flex items-center px-12 py-5 border border-[#F7F5F0]/20 text-[#F7F5F0] font-bold hover:bg-[#C6A75E] hover:text-[#0F1E2E] hover:border-[#C6A75E] transition-all duration-300 uppercase text-[10px] tracking-[0.3em]">
            View All Articles & Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;