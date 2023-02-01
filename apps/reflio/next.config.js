require("dotenv").config({ path: "../../.env" });

if(process.env.SENTRY_AUTH_TOKEN){
  const { withSentryConfig } = require('@sentry/nextjs');
  
  const sentryWebpackPluginOptions = {
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true
  };
  
  module.exports = withSentryConfig({
    transpilePackages: ['ui'],
    images: {
      domains: ['s2.googleusercontent.com'],
    },
    sentryWebpackPluginOptions
  });
} else {
  module.exports = {
    transpilePackages: ['ui'],
    images: {
      domains: ['s2.googleusercontent.com'],
    }
  };
}
