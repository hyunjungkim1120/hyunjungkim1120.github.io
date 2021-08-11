module.exports = {
  pathPrefix: '',
  siteUrl: 'https://moongkim.com',
  siteTitle: 'Moong Kim 개발일지',
  siteDescription: 'Logbook of a software developer',
  author: 'Moong Kim',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://moongkim-com.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/hyunjungkim1120',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    algorithm: {
      name: 'algorithm',
      description: 'algorithm is a step-by-step procedure for solving a problem or accomplishing some end.',
      color: '#dd3431',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
  },
};