import React from 'react';
import Hero from '../components/features/Hero';
import AboutSection from '../components/features/AboutSection';
import Testimonials from '../components/features/Testimonials';
import ContactSection from '../components/features/ContactSection';
import PracticePreview from '../components/features/PracticePreview';
import BlogPreview from '../components/features/BlogPreview';
import FAQ from '../components/features/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticePreview />
      <FAQ limit={1} />
      <BlogPreview />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default HomePage;
