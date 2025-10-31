import React, { useState, useEffect, useRef } from 'react';
import { Post } from '../types';
import { SearchIcon, CloseIcon } from './Icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, posts }) => {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredPosts([]);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPosts(results);
  }, [query, posts]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-cyber-bg/80 backdrop-blur-md z-50 flex items-start justify-center pt-16 sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-cyber-surface w-full max-w-2xl rounded-xl border border-cyber-pink/50 shadow-cyber-glow-pink transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
             <h2 className="text-lg font-heading text-gray-100">搜索文章</h2>
             <button 
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-cyber-pink/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-bg focus:ring-cyber-pink transition-colors"
                aria-label="关闭搜索"
             >
                <CloseIcon className="h-5 w-5" />
             </button>
          </div>

          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入关键词..."
              className="w-full bg-cyber-bg border-2 border-gray-700 focus:border-cyber-cyan focus:ring-0 rounded-lg pl-12 pr-4 py-3 text-gray-200 placeholder-gray-500 transition-colors"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' && (
            <p className="text-center text-gray-500 py-10">输入内容以开始搜索...</p>
          )}
          {query.trim() !== '' && filteredPosts.length > 0 && (
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id} className="border-b border-gray-800 last:border-b-0">
                  <a href="#" className="block p-4 sm:p-6 hover:bg-cyber-pink/10 transition-colors">
                    <h3 className="font-semibold text-cyber-pink">{post.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{post.excerpt}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
          {query.trim() !== '' && filteredPosts.length === 0 && (
             <p className="text-center text-gray-500 py-10">未找到相关结果。</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;