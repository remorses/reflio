require("dotenv").config({ path: "../../.env" });

const rewrites = {
  rewrites: () => {
    return {
      beforeFiles: [
        {
          source: '/resources',
          destination: 'https://reflio.feather.blog/resources',
        },
        {
          source: '/resources/:path*',
          destination: 'https://reflio.feather.blog/resources/:path*',
        },
        {
          source: '/_feather',
          destination: 'https://reflio.feather.blog/_feather',
        },
        {
          source: '/_feather/:path*',
          destination: 'https://reflio.feather.blog/_feather/:path*',
        },
      ],
    }
  },
  headers: () => {
    return [
      {
        source: '/resources',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'reflio.com',
          },
        ],
      },
      {
        source: '/resources/:slug*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'reflio.com',
          },
        ],
      },
      {
        source: '/_feather',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'reflio.com',
          },
        ],
      },

      {
        source: '/_feather/:slug*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'reflio.com',
          },
        ],
      },
    ]
  },
};

if(process.env.SENTRY_AUTH_TOKEN){
  const { withSentryConfig } = require('@sentry/nextjs');
  
  const sentryWebpackPluginOptions = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true
  };
  
  module.exports = withSentryConfig({
    sentryWebpackPluginOptions,
    transpilePackages: ['ui'],
    images: {
      domains: ['s2.googleusercontent.com'],
    },
    ...rewrites
  });
} else {
  module.exports = {
    transpilePackages: ['ui'],
    images: {
      domains: ['s2.googleusercontent.com'],
    },
    ...rewrites
  };
}
