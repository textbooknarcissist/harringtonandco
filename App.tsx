import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Newsletter from './components/layout/Newsletter';
import BackToTop from './components/ui/BackToTop';
import ScrollToTop from './components/ui/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';
import PageLoader from './components/ui/PageLoader';
import { useThemeStore } from './store/useThemeStore';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('./pages/PracticeAreasPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const App: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-[#0A121A]' : 'bg-[#F7F5F0]'}`}>
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <div className="animate-in fade-in duration-700">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/practice" element={<PracticeAreasPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                {/* Fallback to home */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
