import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyber-pink/30 mt-16 relative z-10">
      <div className="max-w-8xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} 赛博光环主题. 版权所有.</p>
        <p className="mt-1">
          由 <a href="#" className="font-semibold text-gray-400 hover:text-cyber-pink">Halo</a> 强力驱动. 
          设计理念 <a href="#" className="font-semibold text-gray-400 hover:text-cyber-pink">赛博朋克</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;