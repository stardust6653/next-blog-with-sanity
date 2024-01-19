import { MetadataRoute } from 'next';
import { Card } from '../../types/types';

export const getPosts = async () => {
  return fetch('/api/posts', { next: { revalidate: 60 * 30 }, method: 'GET' })
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

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts: Card[] = await getPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://www.soyeah-blog.xyz/posts/${post.id}`,
    lastModified: post.createdAt,
  }));

  console.log(blogPosts);

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

export default sitemap;
