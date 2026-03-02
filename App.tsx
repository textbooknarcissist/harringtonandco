import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Newsletter from './components/layout/Newsletter';
import BackToTop from './components/ui/BackToTop';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('./pages/PracticeAreasPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <HomePage />;
      case '#/about':
        return <AboutPage />;
      case '#/practice':
        return <PracticeAreasPage />;
      case '#/blog':
        return <BlogPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/privacy':
        return <PrivacyPolicyPage />;
      case '#/terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      <Navbar currentPath={currentPath} />
      <main className="grow">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;