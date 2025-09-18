/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://davidgibbon.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/projects/')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.includes('/writing/')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (['/about', '/contact', '/uses'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
