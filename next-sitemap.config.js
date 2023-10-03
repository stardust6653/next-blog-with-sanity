/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://soyeah-blog.xyz',
  changefreq: 'daily',
  priority: 0.5,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: [
    'https://www.soyeah-blog.xyz/auth',
    'https://www.soyeah-blog.xyz/bookmarks',
    'https://www.soyeah-blog.xyz/editor',
  ],
};
