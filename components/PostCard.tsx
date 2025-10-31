import React from 'react';
import { Post } from '../types';
import { BookmarkIcon } from './Icons';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-cyber-surface/70 rounded-xl border border-gray-800 hover:border-cyber-pink transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative">
        <img className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={post.imageUrl} alt={post.title} />
        <a href="#" className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-cyber-cyan hover:text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors">
          {post.category.name}
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          <a href="#" className="hover:text-cyber-pink transition-colors">{post.title}</a>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
           <div className="flex items-center">
              <img className="h-8 w-8 rounded-full mr-3 border-2 border-gray-700" src={post.author.avatarUrl} alt={post.author.name} />
              <div>
                <p className="font-semibold text-gray-300">{post.author.name}</p>
                <p>{post.publishDate}</p>
              </div>
           </div>
           <div className="flex items-center space-x-2">
            <span>{post.readingTime} 分钟阅读</span>
            <button className="p-1.5 rounded-full hover:bg-cyber-pink/20 transition-colors">
                <BookmarkIcon className="w-4 h-4 text-gray-400" />
            </button>
           </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;