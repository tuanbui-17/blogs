interface COVER {
  url: string;
}

interface AUTHOR {
  name: string;
}

interface CATEGORY {
  name: string;
  slug: string;
}

interface BLOCK {
  __component: string;
  id: number;
  body?: string;
  title?: string;
}

export interface BLOG {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    type: string;
    readTime: string;
    cover: COVER;
    author: AUTHOR;
    category: CATEGORY;
    blocks: BLOCK[];
}