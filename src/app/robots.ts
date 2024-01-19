import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.soyeah-blog.xyz/sitemap.xml',
    host: 'https://www.soyeah-blog.xyz/',
  };
}
