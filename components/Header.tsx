import React, { useState } from 'react';
import { SearchIcon, MenuIcon } from './Icons';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '关于', href: '#' },
    { name: '归档', href: '#' },
    { name: '联系', href: '#' },
  ];

  return (
    <header className="bg-cyber-surface/50 backdrop-blur-lg sticky top-0 z-40 border-b border-cyber-pink/30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-heading font-bold text-cyber-pink glitch-text tracking-wider">
              赛博光环
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyber-pink px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onSearchClick}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-cyber-pink/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-bg focus:ring-cyber-pink transition-colors"
              aria-label="搜索文章"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyber-pink/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-bg focus:ring-cyber-pink transition-colors"
                aria-label="打开菜单"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-cyber-pink/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:bg-cyber-pink/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;