import { MetadataRoute } from 'next';
import { Card } from '../../types/types';

export const getPosts = () => {
  return fetch('/api/posts', { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts: Card[] = await getPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://www.soyeah-blog.xyz/posts/${post.id}`,
    lastModified: post.createdAt,
  }));

  return [
    {
      url: 'https://www.soyeah-blog.xyz',
      lastModified: new Date(),
    },
    {
      url: 'https://www.soyeah-blog.xyz/posts',
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
};

export default Sitemap;
