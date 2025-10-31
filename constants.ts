import { Post, Category, Tag } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, name: '前沿技术' },
  { id: 2, name: 'UI/UX 设计' },
  { id: 3, name: '生产力工具' },
  { id: 4, name: '生活方式' },
];

export const TAGS: Tag[] = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Web开发' },
  { id: 3, name: '用户体验' },
  { id: 4, name: '极简主义' },
  { id: 5, name: '远程工作' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: '在React中构建一个设计系统',
    excerpt: '探索为您的React应用创建可扩展、可维护的设计系统的基础知识，从组件设计到文档编写。',
    imageUrl: 'https://picsum.photos/seed/react/800/600',
    author: {
      name: '简·道',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane_doe'
    },
    publishDate: '2023年10月26日',
    readingTime: 8,
    category: CATEGORIES[1],
    tags: [TAGS[0], TAGS[2]]
  },
  {
    id: 2,
    title: '极简主义网页设计的兴起',
    excerpt: '少即是多。探索极简主义设计的原则，以及如何应用它们来创造出既美观又用户友好的网站。',
    imageUrl: 'https://picsum.photos/seed/minimalism/800/600',
    author: {
      name: '约翰·史密斯',
      avatarUrl: 'https://i.pravatar.cc/150?u=john_smith'
    },
    publishDate: '2023年10月24日',
    readingTime: 5,
    category: CATEGORIES[1],
    tags: [TAGS[2], TAGS[3]]
  },
  {
    id: 3,
    title: '在远程世界中掌握生产力',
    excerpt: '在家工作带来了独特的挑战。学习行之有效的策略和工具，以保持专注、有条理和高效。',
    imageUrl: 'https://picsum.photos/seed/productivity/800/600',
    author: {
      name: '简·道',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane_doe'
    },
    publishDate: '2023年10月20日',
    readingTime: 7,
    category: CATEGORIES[2],
    tags: [TAGS[4]]
  },
  {
    id: 4,
    title: 'Tailwind CSS 入门指南',
    excerpt: '厌倦了编写自定义CSS？本指南将带您快速上手Tailwind CSS，这个正在改变Web开发的实用程序优先框架。',
    imageUrl: 'https://picsum.photos/seed/tailwind/800/600',
    author: {
      name: '亚历克斯·约翰逊',
      avatarUrl: 'https://i.pravatar.cc/150?u=alex_johnson'
    },
    publishDate: '2023年10月15日',
    readingTime: 10,
    category: CATEGORIES[0],
    tags: [TAGS[1]]
  },
    {
    id: 5,
    title: '拥抱数字游民的生活方式',
    excerpt: '在任何地方工作的梦想现在对许多人来说已经成为现实。这是一份关于如何开始您的数字游民之旅的实用指南。',
    imageUrl: 'https://picsum.photos/seed/nomad/800/600',
    author: {
      name: '约翰·史密斯',
      avatarUrl: 'https://i.pravatar.cc/150?u=john_smith'
    },
    publishDate: '2023年10月11日',
    readingTime: 9,
    category: CATEGORIES[3],
    tags: [TAGS[4], TAGS[3]]
  }
];