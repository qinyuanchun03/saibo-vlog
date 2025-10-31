import React from 'react';
import { CATEGORIES, TAGS } from '../constants';

const Widget: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-cyber-surface/70 p-6 rounded-xl border border-cyber-cyan/50 shadow-lg">
    <h3 className="text-sm font-heading font-bold tracking-wider uppercase text-cyber-cyan mb-4">{title}</h3>
    {children}
  </div>
);

const RightSidebar: React.FC = () => {
  return (
    <aside className="lg:sticky top-24 space-y-8">
      <Widget title="文章分类">
        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <a
                href="#"
                className="flex justify-between items-center text-gray-300 hover:text-cyber-pink transition-colors text-sm font-medium group"
              >
                <span>{category.name}</span>
                <span className="text-xs text-gray-500 group-hover:text-cyber-pink transition-colors">
                  {category.id === 1 ? '1' : category.id === 2 ? '2' : category.id === 3 ? '1' : '1'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Widget>
      
      <Widget title="热门标签">
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <a
              key={tag.id}
              href="#"
              className="bg-gray-800 text-gray-400 hover:bg-cyber-pink hover:text-white text-xs font-semibold px-2.5 py-1 rounded-full transition-colors"
            >
              #{tag.name}
            </a>
          ))}
        </div>
      </Widget>
    </aside>
  );
};

export default RightSidebar;