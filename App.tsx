import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import { MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-bg font-sans cyberpunk-bg">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Responsive Grid Layout
            - Mobile (<md): Single column stack (Left -> Main -> Right)
            - Tablet (md): Left sidebar (4 cols) + Main content (8 cols) on one row, Right sidebar (12 cols) on the next row.
            - Desktop (lg): Three columns (Left: 3, Main: 6, Right: 3)
         */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3 mb-8 md:mb-0">
            <LeftSidebar />
          </div>

          <div className="md:col-span-8 lg:col-span-6">
            <MainContent />
          </div>

          <div className="md:col-span-12 lg:col-span-3 mt-8 lg:mt-0">
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        posts={MOCK_POSTS}
      />
    </div>
  );
};

export default App;