import React from 'react';
import Hero from '../components/features/Hero';
import PracticeTicker from '../components/features/PracticeTicker';
import AboutSection from '../components/features/AboutSection';
import Testimonials from '../components/features/Testimonials';
import ContactSection from '../components/features/ContactSection';
import PracticePreview from '../components/features/PracticePreview';
import BlogPreview from '../components/features/BlogPreview';
import EnterpriseTicker from '../components/features/EnterpriseTicker';
import FAQ from '../components/features/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PracticeTicker />
      <AboutSection />
      <EnterpriseTicker />
      <PracticePreview />
      <BlogPreview />
      <FAQ limit={1} />
      <ContactSection />
      <Testimonials />
    </>
  );
};

export default HomePage;