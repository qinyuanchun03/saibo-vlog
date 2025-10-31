import React from 'react';
import { RssIcon, TwitterIcon, GithubIcon } from './Icons';

const LeftSidebar: React.FC = () => {
  return (
    <aside className="lg:sticky top-24">
      <div className="bg-cyber-surface/70 p-6 rounded-xl border border-cyber-pink/50 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 rounded-full mb-4 ring-4 ring-cyber-pink/50"
            src="https://i.pravatar.cc/150?u=blog_author"
            alt="Author"
          />
          <h3 className="text-lg font-bold text-gray-100">光环博主</h3>
          <p className="text-sm text-cyber-pink/80 mt-1 font-mono">@haloblogger</p>
          <p className="text-sm text-gray-400 mt-4">
            一个充满激情的前端开发者和设计师，致力于创造极简而实用的赛博体验。欢迎来到我的数字花园。
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-3">
          <a href="#" className="p-2 text-gray-400 hover:text-cyber-pink hover:bg-cyber-pink/20 rounded-full transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-gray-400 hover:text-cyber-pink hover:bg-cyber-pink/20 rounded-full transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-gray-400 hover:text-cyber-pink hover:bg-cyber-pink/20 rounded-full transition-colors">
            <RssIcon className="w-5 h-5" />
          </a>
        </div>
        <button className="w-full mt-6 bg-cyber-pink text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-opacity-90 transition-all focus:outline-none shadow-cyber-glow-pink hover:shadow-none duration-300">
          订阅
        </button>
      </div>
    </aside>
  );
};

export default LeftSidebar;