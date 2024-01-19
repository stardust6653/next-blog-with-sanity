/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://soyeah-blog.xyz',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: [
    'https://www.soyeah-blog.xyz/auth',
    'https://www.soyeah-blog.xyz/bookmarks',
    'https://www.soyeah-blog.xyz/editor',
    'https://www.soyeah-blog.xyz/api/search',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/editor', '/bookmarks', '/auth', '/api/search'],
      },
    ],
  },
};
