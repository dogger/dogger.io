module.exports = {
  siteMetadata: {
    siteUrl: `https://dogger.io`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              withWebp: true
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dogger.io',
        sitemap: 'https://dogger.io/sitemap.xml',
        policy: [
          { 
            userAgent: '*', 
            allow: '/' 
          },
          { 
            userAgent: '*', 
            disallow: '/dashboard'
          },
          { 
            userAgent: '*', 
            disallow: '/callback'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/static/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `${__dirname}/static/documentation`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "short_name": "Dogger",
        "name": "Dogger",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#86613d",
        "background_color": "#ffffff"
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/dashboard/*`, `/callback`]
      }
    },
    'gatsby-plugin-top-layout',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, '400', '500', `700`]
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'dogger.io',
          protocol: "https",
          hostname: "dogger.io",
          params: {
            '**/*.svg': {
                ContentType: 'image/svg+xml',
                CacheControl: 'public, max-age=31536000, immutable'
            },
            '**/*.woff': {
                ContentType: 'font/woff',
                CacheControl: 'public, max-age=31536000, immutable'
            },
            '**/*.woff2': {
                ContentType: 'font/woff2',
                CacheControl: 'public, max-age=31536000, immutable'
            }
        }
      },
    },
  ],
}
