
export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: Author;
  publishDate: string;
  readingTime: number; // in minutes
  category: Category;
  tags: Tag[];
}
