import React from 'react';

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-live="polite" aria-label="Loading page">
    <div className="w-12 h-12 border-4 border-[#1C1C1C] border-t-transparent rounded-full animate-spin"></div>
    <span className="sr-only">Loading page</span>
  </div>
);

export default PageLoader;
