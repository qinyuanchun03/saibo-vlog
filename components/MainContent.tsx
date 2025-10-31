
import React from 'react';
import { MOCK_POSTS } from '../constants';
import PostCard from './PostCard';

const MainContent: React.FC = () => {
  return (
    <main>
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
